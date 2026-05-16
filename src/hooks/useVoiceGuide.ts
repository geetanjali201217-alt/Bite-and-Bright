import { useState, useEffect, useCallback, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

interface VoiceGuideOptions {
  recipeName: string;
  steps: string[];
  ingredients: string[];
  onStepChange?: (index: number) => void;
}

export function useVoiceGuide({ recipeName, steps, ingredients, onStepChange }: VoiceGuideOptions) {
  const [isActive, setIsActive] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isListening, setIsListening] = useState(false);
  const [lastTranscript, setLastTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(typeof window !== 'undefined' ? window.speechSynthesis : null);
  const aiRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onresult = (event: any) => {
          const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
          setLastTranscript(transcript);
          handleCommand(transcript);
        };

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => {
          setIsListening(false);
          // Auto-restart if active
          if (isActive) {
            try {
              recognition.start();
            } catch (e) {
              console.error('Failed to restart recognition', e);
            }
          }
        };

        recognitionRef.current = recognition;
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, [isActive]);

  const speak = useCallback((text: string) => {
    if (!synthRef.current) return;
    
    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    synthRef.current.speak(utterance);
  }, []);

  const handleCommand = useCallback(async (command: string) => {
    // 1. Navigation Commands
    if (command.includes('next') || command.includes('continue')) {
      setCurrentStepIndex(prev => {
        const next = Math.min(prev + 1, steps.length - 1);
        if (next === -1) return 0;
        return next;
      });
      return;
    }

    if (command.includes('previous') || command.includes('back')) {
      setCurrentStepIndex(prev => Math.max(prev - 1, 0));
      return;
    }

    if (command.includes('repeat')) {
      // Check for specific step
      const stepMatch = command.match(/step (\d+)/);
      if (stepMatch) {
        const index = parseInt(stepMatch[1]) - 1;
        if (index >= 0 && index < steps.length) {
          setCurrentStepIndex(index);
          // Wait a tick for state update if needed, but we can just speak directly
          speak(`Step ${index + 1}: ${steps[index]}`);
          return;
        }
      }
      
      if (currentStepIndex >= 0) {
        speak(`Repeating step ${currentStepIndex + 1}: ${steps[currentStepIndex]}`);
      } else {
        speak("I haven't started reading the steps yet. Say next step to begin.");
      }
      return;
    }

    if (command.includes('ingredients')) {
      speak(`The ingredients for ${recipeName} are: ${ingredients.join(', ')}.`);
      return;
    }

    if (command.includes('stop') || command.includes('exit') || command.includes('quit')) {
      toggleActive();
      speak("Stopping voice guide. Happy cooking!");
      return;
    }

    // 2. Intelligent Ingredient/Step Questions (Gemini Power)
    if (command.includes('why') || command.includes('how') || command.includes('what') || command.includes('much')) {
      if (!process.env.GEMINI_API_KEY) {
        speak("I heard a question, but I need an API key to answer complex cooking queries. Try basic commands like next or back.");
        return;
      }

      try {
        if (!aiRef.current) {
          aiRef.current = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        }

        const result = await aiRef.current.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `You are a helpful cooking assistant. User is cooking "${recipeName}". 
          Steps: ${steps.join(' | ')}.
          Ingredients: ${ingredients.join(', ')}.
          Current Step: ${currentStepIndex >= 0 ? steps[currentStepIndex] : 'Not started'}.
          Question: "${command}"
          Answer briefly in 1-2 sentences for a person in the middle of cooking.`,
        });

        const responseText = result.text;
        if (responseText) {
          speak(responseText);
        }
      } catch (error) {
        console.error('Gemini error:', error);
        speak("I'm sorry, I couldn't process that question right now.");
      }
    }
  }, [currentStepIndex, steps, ingredients, recipeName, speak]);

  useEffect(() => {
    if (currentStepIndex >= 0 && currentStepIndex < steps.length) {
      speak(`Step ${currentStepIndex + 1}: ${steps[currentStepIndex]}`);
      onStepChange?.(currentStepIndex);
    }
  }, [currentStepIndex, steps, speak, onStepChange]);

  const toggleActive = useCallback(() => {
    setIsActive(prev => {
      const next = !prev;
      if (next) {
        setLastTranscript('Listening...');
        if (recognitionRef.current) {
          try {
            recognitionRef.current.start();
          } catch (e) {
            console.error('Recognition already started');
          }
        }
        speak(`Voice guide active for ${recipeName}. You can say next step, previous step, or ask me questions.`);
      } else {
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
        if (synthRef.current) {
          synthRef.current.cancel();
        }
        setIsListening(false);
      }
      return next;
    });
  }, [recipeName, speak]);

  return {
    isActive,
    isListening,
    isSpeaking,
    currentStepIndex,
    lastTranscript,
    toggleActive,
    setCurrentStepIndex
  };
}
