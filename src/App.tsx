/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, MouseEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronRight, 
  ArrowLeft,
  Clock, 
  MapPin, 
  ChefHat, 
  UtensilsCrossed, 
  X, 
  ArrowRight,
  Filter,
  Heart,
  Mic,
  Volume2,
  VolumeX,
  Plus,
  Minus,
  ShoppingCart,
  Users,
  Calculator,
  ListChecks,
  ChevronDown,
  Soup,
  Coffee,
  Sun,
  Moon,
  Trash2,
  Share2,
  AudioLines,
  Zap,
  Loader2,
  Sparkles,
  AlertTriangle,
  Languages,
  Flame,
  Clock3,
  Timer
} from 'lucide-react';
import { recipes, CATEGORIES, Recipe, Category } from './data/recipes';
import { useVoiceGuide } from './hooks/useVoiceGuide';
import { SubstituteButton } from './components/SubstituteButton';

import { adjustRecipeFlavor } from './services/flavorService';
import { scaleRecipe, generateGroceryList, getPairingSuggestion, getMealTypeFilter } from './services/planningService';
import { getEmergencyFix } from './services/emergencyService';
import { translateRecipe } from './services/translationService';
import { extractTimers } from './services/timerService';

interface RecipeModalProps {
  recipe: Recipe;
  flavorPreference: string;
  language: string;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e?: MouseEvent) => void;
  onAddToShoppingList: (recipe: Recipe) => void;
  isInShoppingList: boolean;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ 
  recipe, 
  flavorPreference, 
  language,
  onClose, 
  isFavorite, 
  onToggleFavorite,
  onAddToShoppingList,
  isInShoppingList
}) => {
  const [displayRecipe, setDisplayRecipe] = useState(recipe);
  const [isAdjusting, setIsAdjusting] = useState(false);
  const [servings, setServings] = useState(4);
  const [isScaling, setIsScaling] = useState(false);
  const [suggestedPairing, setSuggestedPairing] = useState<Recipe | null>(null);
  const [emergencyLog, setEmergencyLog] = useState<{problem: string, fix: string} | null>(null);
  const [isEmergencyLoading, setIsEmergencyLoading] = useState(false);
  const [stepTimers, setStepTimers] = useState<(number | null)[]>([]);
  const [activeTimer, setActiveTimer] = useState<{index: number, seconds: number} | null>(null);

  useEffect(() => {
    async function transform() {
      setIsAdjusting(true);
      // Translation first
      let current = await translateRecipe(recipe, language);
      
      // Then flavor adjustment (if any)
      if (flavorPreference !== 'Classic') {
        const adjustedData = await adjustRecipeFlavor(recipe, flavorPreference);
        // We re-translate if necessary
        if (language !== 'English') {
          current = await translateRecipe({ ...recipe, ...adjustedData }, language);
        } else {
          current = { ...current, ...adjustedData };
        }
      }
      
      setDisplayRecipe({ ...recipe, ...current });
      
      // Extract timers
      const timers = await extractTimers(current.steps);
      setStepTimers(timers);
      
      setIsAdjusting(false);
    }
    transform();
  }, [recipe, flavorPreference, language]);

  useEffect(() => {
    let interval: any;
    if (activeTimer && activeTimer.seconds > 0) {
      interval = setInterval(() => {
        setActiveTimer(prev => prev ? { ...prev, seconds: prev.seconds - 1 } : null);
      }, 1000);
    } else if (activeTimer && activeTimer.seconds === 0) {
      setActiveTimer(null);
    }
    return () => clearInterval(interval);
  }, [activeTimer]);

  const handleEmergency = async () => {
    const problem = prompt("Kitchen Emergency! What's wrong? (e.g. Too salty, too spicy, burning)");
    if (!problem) return;
    setIsEmergencyLoading(true);
    const fix = await getEmergencyFix(problem, displayRecipe.name);
    setEmergencyLog({ problem, fix });
    setIsEmergencyLoading(false);
  };

  useEffect(() => {
    async function scale() {
      if (servings === 4) return;
      setIsScaling(true);
      const scaled = await scaleRecipe(recipe, servings);
      setDisplayRecipe(prev => ({ ...prev, ingredients: scaled.ingredients }));
      setIsScaling(false);
    }
    scale();
  }, [servings, recipe]);

  useEffect(() => {
    async function fetchPairing() {
      const pairing = await getPairingSuggestion(recipe, recipes);
      setSuggestedPairing(pairing);
    }
    fetchPairing();
  }, [recipe]);

  const {
    isActive,
    isListening,
    isSpeaking,
    currentStepIndex,
    lastTranscript,
    toggleActive,
    setCurrentStepIndex
  } = useVoiceGuide({
    recipeName: displayRecipe.name,
    steps: displayRecipe.steps,
    ingredients: displayRecipe.ingredients,
    onStepChange: (index) => {
      // Handle auto-scroll if needed
      const stepElement = document.getElementById(`step-${index}`);
      if (stepElement) {
        stepElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-brand-cream overflow-hidden"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        className="bg-brand-cream w-full h-full overflow-y-auto flex flex-col relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Immersive Header */}
        <div className="sticky top-0 z-40 bg-brand-cream/90 backdrop-blur-2xl border-b border-brand-faded px-8 py-6 md:px-16 md:py-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-8">
            <button 
              onClick={onClose}
              className="p-3 bg-white rounded-xl hover:bg-brand-faded transition-all border border-brand-faded shadow-sm active:scale-95 group"
            >
              <ArrowLeft size={24} className="text-brand-ink group-hover:-translate-x-1 transition-transform" />
            </button>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-accent">{displayRecipe.category}</span>
                <div className="w-1 h-1 rounded-full bg-brand-faded" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-ink/30 italic">{displayRecipe.time}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-ink tracking-tight leading-none">{displayRecipe.name}</h2>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end gap-1">
              <span className="text-[9px] font-bold tracking-widest text-brand-accent uppercase opacity-50">Chef Mode</span>
              <button 
                onClick={toggleActive}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all ${
                  isActive 
                    ? 'bg-brand-ink text-white border-brand-ink shadow-xl' 
                    : 'bg-white text-brand-accent border-brand-faded hover:bg-brand-cream'
                }`}
              >
                <div className="relative">
                  <Mic size={18} className={isListening ? "text-red-500" : ""} />
                  {isListening && <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-red-400 rounded-full -z-10" />}
                </div>
                <span className="text-xs font-bold tracking-[0.1em] uppercase">{isActive ? "Stop" : "Voice Control"}</span>
              </button>
            </div>

            <button 
              onClick={handleEmergency}
              disabled={isEmergencyLoading}
              className="p-4 bg-red-600 text-white rounded-xl border border-red-700 hover:bg-red-700 transition-all flex items-center gap-3 px-8 group shadow-lg shadow-red-600/10 active:scale-95"
            >
              {isEmergencyLoading ? <Loader2 size={20} className="animate-spin" /> : <AlertTriangle size={20} />}
              <span className="text-xs font-bold tracking-[0.1em] uppercase">Emergency</span>
            </button>

            <button 
              onClick={(e) => onToggleFavorite(recipe.id, e)}
              className={`p-4 rounded-xl border transition-all shadow-sm active:scale-95 ${
                isFavorite 
                  ? 'bg-brand-accent border-brand-accent text-white' 
                  : 'bg-white border-brand-faded text-brand-faded hover:bg-brand-faded'
              }`}
            >
              <Heart size={20} className={isFavorite ? 'fill-white' : ''} />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-8 md:px-16 py-16 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Ingredients Sidepane */}
            <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
              <div className="mb-12 bg-white p-10 rounded-[2.5rem] border border-brand-faded shadow-xl shadow-brand-ink/5 space-y-8">
                <div className="flex items-center justify-between pb-8 border-b border-brand-faded">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-brand-ink/30">Yield Count</span>
                    <div className="flex items-center gap-4">
                      <Users size={18} className="text-brand-accent" />
                      <span className="text-sm font-bold tracking-widest uppercase text-brand-ink">Servings</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 bg-brand-cream px-5 py-3 rounded-xl border border-brand-faded shadow-inner">
                    <button 
                      onClick={() => setServings(s => Math.max(1, s - 1))}
                      className="hover:text-brand-accent transition-all hover:scale-110"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="font-serif text-2xl min-w-[28px] text-center tabular-nums">{servings}</span>
                    <button 
                      onClick={() => setServings(s => Math.min(20, s + 1))}
                      className="hover:text-brand-accent transition-all hover:scale-110"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                <div>
                  <button 
                    onClick={() => onAddToShoppingList(recipe)}
                    disabled={isInShoppingList}
                    className={`w-full py-7 rounded-[2.5rem] text-xs font-bold tracking-[0.4em] uppercase flex items-center justify-center gap-5 transition-all ${
                      isInShoppingList 
                        ? 'bg-green-50 text-green-700 border border-green-200 shadow-none' 
                        : 'bg-brand-ink text-white hover:bg-brand-accent shadow-2xl hover:shadow-brand-accent/20 active:scale-[0.98]'
                    }`}
                  >
                    <ShoppingCart size={22} />
                    {isInShoppingList ? "In Shopping Bag" : "Buy Ingredients"}
                  </button>
                  <p className="text-[11px] text-brand-ink/30 font-serif italic text-center mt-8 px-6 leading-relaxed">
                    {isScaling ? "AI Vision: Recalculating spice ratios..." : "Scaling measurements to match your party size automatically."}
                  </p>
                </div>
              </div>

                <h3 className="font-serif text-3xl italic text-brand-ink/90 flex items-center gap-4">
                  The Pantry
                  <div className="h-px bg-brand-faded grow" />
                </h3>
                <ul className="space-y-6 relative">
                  {isScaling && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-x-0 -top-6 -bottom-6 bg-brand-cream/10 backdrop-blur-[2px] z-10 rounded-2xl" 
                    />
                  )}
                  {displayRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="text-lg text-brand-ink/80 flex items-start justify-between gap-6 group py-1">
                      <div className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/30 mt-2.5 flex-shrink-0" />
                        <span className="font-serif italic leading-relaxed text-xl">{ing}</span>
                      </div>
                      <SubstituteButton item={ing} recipeName={displayRecipe.name} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps Main Column */}
              <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-12">
                <h3 className="font-serif text-4xl italic text-brand-ink/90">The Master Class</h3>
                <div className="flex items-center gap-3 text-[9px] font-bold tracking-[0.3em] uppercase text-brand-ink/30 border border-brand-faded px-5 py-2 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  {displayRecipe.steps.length} Steps
                </div>
              </div>

              <div className="relative">
                {isAdjusting && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-x-0 -top-10 -bottom-10 bg-brand-cream/95 backdrop-blur-xl z-30 flex flex-col items-center justify-center rounded-[4rem] min-h-[600px] border border-brand-faded shadow-2xl"
                  >
                    <Loader2 className="text-brand-accent animate-spin mb-8" size={64} />
                    <p className="text-lg font-bold tracking-[0.5em] uppercase text-brand-accent">Zing Infusion Active</p>
                    <p className="text-sm text-brand-ink/40 mt-4 font-serif italic max-w-sm text-center px-10">Adjusting ingredients for {flavorPreference} flavor profile...</p>
                  </motion.div>
                )}

                <div className="space-y-12">
                  {displayRecipe.steps.map((step, i) => (
                    <motion.div 
                      id={`step-${i}`}
                      key={i} 
                      animate={currentStepIndex === i ? { x: 20 } : { x: 0 }}
                      className={`flex gap-10 group cursor-pointer transition-all p-8 rounded-[2rem] ${
                        currentStepIndex === i 
                          ? 'bg-white shadow-xl ring-1 ring-brand-accent/10' 
                          : 'hover:bg-brand-faded/20'
                      }`}
                      onClick={() => setCurrentStepIndex(i)}
                    >
                      <div className={`flex-shrink-0 h-16 w-16 rounded-2xl border flex items-center justify-center font-serif text-3xl transition-all duration-500 shadow-sm ${
                        currentStepIndex === i 
                          ? 'bg-brand-ink text-white border-brand-ink shadow-lg rotate-3 scale-105' 
                          : 'bg-white border-brand-faded text-brand-faded group-hover:border-brand-accent group-hover:text-brand-accent'
                      }`}>
                        {i + 1}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-8 mb-4">
                          <p className={`text-2xl leading-[1.6] font-serif italic pt-1 transition-all duration-700 ${
                            currentStepIndex === i ? 'text-brand-ink opacity-100' : 'text-brand-ink/40'
                          }`}>
                            {step}
                          </p>
                          <div className="flex flex-col gap-4 shrink-0 pt-1">
                            <SubstituteButton item={step} recipeName={displayRecipe.name} />
                            {stepTimers[i] && (
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveTimer({ index: i, seconds: (stepTimers[i] || 1) * 60 });
                                }}
                                className={`h-11 w-11 rounded-xl border transition-all duration-500 flex items-center justify-center shadow-sm ${
                                  activeTimer?.index === i 
                                    ? 'bg-brand-accent text-white border-brand-accent shadow-lg scale-110' 
                                    : 'bg-white border-brand-faded text-brand-faded hover:text-brand-accent hover:border-brand-accent'
                                }`}
                              >
                                {activeTimer?.index === i ? <Clock3 size={20} className="animate-pulse" /> : <Timer size={22} />}
                              </button>
                            )}
                          </div>
                        </div>

                        {activeTimer?.index === i && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="bg-brand-ink text-white px-10 py-6 rounded-3xl inline-flex items-center gap-10 shadow-3xl border border-white/10 mt-4 relative overflow-hidden group/timer"
                            onClick={e => e.stopPropagation()}
                          >
                            <motion.div 
                              className="absolute left-0 bottom-0 h-1 bg-brand-accent"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: (stepTimers[i] || 1) * 60, ease: "linear" }}
                            />
                            <div className="flex items-center gap-8">
                              <div className="relative">
                                <div className="h-4 w-4 rounded-full bg-brand-accent animate-ping absolute inset-0" />
                                <div className="h-4 w-4 rounded-full bg-brand-accent relative z-10" />
                              </div>
                              <div>
                                <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30 mb-1">Step Countdown</p>
                                <span className="text-4xl font-mono tracking-tighter tabular-nums text-brand-accent">
                                  {Math.floor(activeTimer.seconds / 60)}:{(activeTimer.seconds % 60).toString().padStart(2, '0')}
                                </span>
                              </div>
                            </div>
                            <button 
                              onClick={() => setActiveTimer(null)} 
                              className="p-4 hover:bg-white/10 rounded-2xl transition-all hover:rotate-90"
                            >
                              <X size={24} />
                            </button>
                          </motion.div>
                        )}

                        {currentStepIndex === i && (
                          <motion.div  
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-12 flex items-center gap-4 py-4 px-8 bg-brand-accent/5 rounded-2xl inline-flex border border-brand-accent/10"
                          >
                            <div className="flex gap-1.5 h-4 items-end">
                              {[0, 1, 2, 3, 4].map(n => (
                                <motion.div 
                                  key={n} 
                                  className="w-1.5 bg-brand-accent rounded-full" 
                                  animate={{ height: ["20%", "100%", "20%"] }}
                                  transition={{ duration: 0.8, repeat: Infinity, delay: n * 0.1 }}
                                />
                              ))}
                            </div>
                            <span className="text-[12px] font-bold tracking-[0.3em] text-brand-accent uppercase">Voice Assistant Reading...</span>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pairings & Footer */}
              <div className="mt-40 space-y-24">
                {suggestedPairing && (
                  <div className="text-center relative">
                    <div className="flex items-center gap-5 mb-10 justify-center">
                      <ChefHat size={24} className="text-brand-accent" />
                      <span className="text-[12px] font-bold tracking-[0.5em] uppercase text-brand-ink/20">The Chef's Pairing</span>
                    </div>
                    <div 
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        onClose();
                      }}
                      className="bg-white p-10 rounded-[3rem] border border-brand-faded group cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 max-w-2xl mx-auto flex items-center gap-10 text-left shadow-lg overflow-hidden group"
                    >
                      <div className="h-28 w-28 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-faded font-serif text-4xl border border-brand-faded group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all duration-500 relative z-10">
                        {suggestedPairing.name[0]}
                      </div>
                      <div className="flex-1 relative z-10">
                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-2">{suggestedPairing.category}</p>
                        <h4 className="text-3xl font-serif text-brand-ink mb-4 leading-tight group-hover:text-brand-accent transition-colors duration-500">{suggestedPairing.name}</h4>
                        <div className="flex items-center gap-2 text-brand-ink/40 font-serif italic text-base group-hover:text-brand-accent transition-all">
                          Experience this pairing <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="text-center max-w-2xl mx-auto border-t border-brand-faded pt-20">
                  <p className="text-base font-serif italic text-brand-ink/20 mb-12 tracking-wide">Tradition served with a modern zing.</p>
                  <div className="flex flex-wrap justify-center gap-8">
                    <button className="px-12 py-5 bg-brand-ink text-white rounded-full font-serif text-xl tracking-wide hover:bg-brand-accent shadow-xl hover:shadow-brand-accent/20 transition-all active:scale-95 flex items-center gap-3">
                      <Share2 size={20} /> Print Recipe
                    </button>
                    <button 
                      onClick={onClose}
                      className="px-12 py-5 bg-white border border-brand-faded text-brand-ink rounded-full font-serif text-xl tracking-wide hover:bg-brand-faded transition-all active:scale-95"
                    >
                      Exit Kitchen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Emergency Log Overlay */}
        {emergencyLog && (
          <motion.div 
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 150 }}
            className="fixed bottom-12 right-12 z-[70] max-w-2xl"
          >
            <div className="bg-red-600 text-white p-14 rounded-[4rem] shadow-4xl border border-white/20 relative backdrop-blur-2xl ring-[12px] ring-red-600/10">
              <button 
                onClick={() => setEmergencyLog(null)}
                className="absolute top-8 right-8 p-3 hover:bg-white/10 rounded-2xl transition-all hover:rotate-90"
              >
                <X size={32} />
              </button>
              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <AlertTriangle size={40} className="animate-bounce" />
                </div>
                <div>
                  <span className="text-[12px] font-bold tracking-[0.5em] uppercase text-red-200 block mb-1">Emergency fix Engaged</span>
                  <span className="text-sm font-bold opacity-60 uppercase tracking-[0.2em]">{emergencyLog.problem}</span>
                </div>
              </div>
              <p className="text-3xl font-serif italic leading-snug text-white drop-shadow-xl font-medium tracking-tight">"{emergencyLog.fix}"</p>
            </div>
          </motion.div>
        )}

        {/* Floating Voice Indicator when Assistant is Active */}
        {isActive && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="fixed bottom-16 left-16 z-[60]"
          >
            <div className="bg-brand-ink text-white p-8 rounded-full shadow-4xl border border-white/10 backdrop-blur-xl flex items-center gap-8 pr-12 group">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center relative transition-colors duration-500 ${isListening ? 'bg-brand-accent shadow-[0_0_40px_rgba(242,125,38,0.6)]' : 'bg-white/10'}`}>
                {isListening && <motion.div animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 bg-brand-accent rounded-full" />}
                <Mic size={32} className={isListening ? 'text-white' : 'text-white/40'} />
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-brand-accent mb-2">Voice Assistant</p>
                <div className="h-6 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={lastTranscript || 'idle'}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="text-lg font-serif italic whitespace-nowrap min-w-[200px]"
                    >
                      {lastTranscript || "Awaiting your command..."}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
  onClick: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e?: MouseEvent) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, index, onClick, isFavorite, onToggleFavorite }) => {
  const formattedIndex = (index + 1).toString().padStart(2, '0');
  const shortCategory = recipe.category === 'Sweets & Popsicles' ? 'SWEET' : 
                       recipe.category === 'Main Dishes' ? 'MAIN' :
                       recipe.category === 'Snacks' ? 'SNACK' :
                       recipe.category === 'Rice Dishes' ? 'RICE' : 
                       recipe.category === 'Drinks' ? 'DRINK' :
                       recipe.category === 'Healthy Dishes' ? 'HEALTH' :
                       recipe.category === 'Chutneys & Pickles' ? 'SAUCE' :
                       recipe.category === 'Spice Blends' ? 'SPICE' : 
                       recipe.category === 'Soya Dishes' ? 'SOYA' : 
                       recipe.category === 'Homemade Bases' ? 'BASE' : 'BREAD';

  return (
    <motion.div 
      layoutId={`card-${recipe.id}`}
      onClick={onClick}
      className="group cursor-pointer bg-brand-card rounded-[2.5rem] p-10 flex flex-col min-h-[480px] transition-all duration-500 hover:-translate-y-3 recipe-card-shadow border border-brand-faded/20 hover:border-brand-accent/30 active:scale-98 shadow-md"
    >
      <div className="flex justify-between items-start mb-12">
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-bold tracking-[0.4em] text-brand-accent uppercase bg-white px-3 py-1 rounded-full border border-brand-faded w-fit shadow-xs">
            {shortCategory}
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(recipe.id, e);
            }}
            className="w-11 h-11 rounded-2xl bg-white border border-brand-faded flex items-center justify-center hover:bg-brand-cream hover:border-brand-accent transition-all group/heart shadow-sm"
          >
            <Heart size={20} className={isFavorite ? "fill-brand-accent text-brand-accent" : "text-brand-ink/10 group-hover/heart:scale-110 transition-transform"} />
          </button>
        </div>
        <span className="font-serif text-6xl text-brand-ink/5 leading-none group-hover:text-brand-accent/10 transition-colors duration-700">
          {formattedIndex}
        </span>
      </div>

      <div className="flex-grow">
        <h3 className="text-3xl font-serif text-brand-ink mb-4 leading-tight group-hover:text-brand-accent transition-colors">
          {recipe.name}
        </h3>
        <p className="text-brand-ink/40 text-lg font-serif italic mb-6">
          {recipe.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
        </p>
        <div className="w-10 h-px bg-brand-faded mb-8" />
        <p className="text-brand-ink/40 text-sm leading-relaxed line-clamp-3 italic font-serif">
          {recipe.ingredients.slice(0, 4).join(', ')}...
        </p>
      </div>

      <div className="mt-10 pt-8 border-t border-brand-faded/30 flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-[0.3em] text-brand-accent uppercase">
          Read Recipe
        </span>
        <motion.div 
          whileHover={{ x: 6 }}
          className="w-10 h-10 rounded-full bg-brand-accent/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300"
        >
          <ArrowRight size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All' | 'Favorites'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [pantryIngredients, setPantryIngredients] = useState<string[]>([]);
  const [mealTypeFilter, setMealTypeFilter] = useState<'Default' | 'Breakfast' | 'Quick Snack' | 'Lunch' | 'Late Night'>('Default');
  const [filteredIds, setFilteredIds] = useState<string[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [flavorPreference, setFlavorPreference] = useState<string>('Classic');
  const [language, setLanguage] = useState<string>('English');
  
  const [shoppingBag, setShoppingBag] = useState<Recipe[]>([]);
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [groceryData, setGroceryData] = useState<Record<string, string[]>>({});
  const [isGeneratingList, setIsGeneratingList] = useState(false);

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bite_bright_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    async function filterMeal() {
      if (mealTypeFilter === 'Default') {
        setFilteredIds([]);
        return;
      }
      setIsFiltering(true);
      const ids = await getMealTypeFilter(recipes, mealTypeFilter);
      setFilteredIds(ids);
      setIsFiltering(false);
    }
    filterMeal();
  }, [mealTypeFilter]);

  useEffect(() => {
    async function fetchList() {
      if (showShoppingList && shoppingBag.length > 0) {
        setIsGeneratingList(true);
        const data = await generateGroceryList(shoppingBag);
        setGroceryData(data);
        setIsGeneratingList(false);
      }
    }
    fetchList();
  }, [showShoppingList, shoppingBag]);

  const toggleFavorite = (id: string, e?: MouseEvent) => {
    e?.stopPropagation();
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      localStorage.setItem('bite_bright_favorites', JSON.stringify(next));
      return next;
    });
  };

  const filteredRecipes = useMemo(() => {
    return recipes.filter(r => {
      // 1. Search (Text + Pantry)
      const matchesText = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         r.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesPantry = pantryIngredients.length === 0 || 
                           pantryIngredients.every(pi => r.ingredients.some(ri => ri.toLowerCase().includes(pi.toLowerCase())));

      if (!matchesText || !matchesPantry) return false;

      // 2. Favorites
      if (selectedCategory === 'Favorites') {
        return favorites.includes(r.id);
      }
      
      // 3. Meal Type (AI Filter)
      if (mealTypeFilter !== 'Default' && filteredIds.length > 0) {
        return filteredIds.includes(r.id);
      }

      // 4. Regular Category
      const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
      return matchesCategory;
    });
  }, [selectedCategory, searchQuery, favorites, mealTypeFilter, filteredIds, pantryIngredients]);

  const addToShoppingBag = (recipe: Recipe) => {
    if (!shoppingBag.find(r => r.id === recipe.id)) {
      setShoppingBag(prev => [...prev, recipe]);
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream relative">
      <header className="sticky top-0 z-40 bg-brand-cream/80 backdrop-blur-xl border-b border-brand-olive/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-white">
              <UtensilsCrossed size={20} />
            </div>
            <h1 className="text-3xl font-serif tracking-tight">Bite & Bright.</h1>
          </div>

          <div className="hidden md:flex items-center bg-white rounded-full px-6 py-2 border border-brand-faded w-96">
            <Search size={18} className="text-brand-olive/40" />
            <input 
              type="text" 
              placeholder="Search by spices or ingredients..." 
              className="ml-3 bg-transparent outline-none text-sm w-full font-serif italic"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowShoppingList(true)}
              className="relative flex items-center gap-2 text-[10px] font-bold tracking-widest text-white uppercase bg-brand-ink px-5 py-2.5 rounded-full border border-brand-ink shadow-lg hover:bg-brand-accent transition-all"
            >
              <ShoppingCart size={14} /> 
              Shopping Bag
              {shoppingBag.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center animate-bounce">
                  {shoppingBag.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-20 pb-40">
        <div className="mb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-bold tracking-[0.5em] text-brand-accent uppercase mb-6 block">Heirloom Flavors</span>
            <h1 className="text-6xl md:text-8xl font-serif text-brand-ink mb-10 tracking-tight leading-tight">
              Bite & <span className="italic text-brand-accent">Bright</span>
            </h1>
            <div className="w-24 h-px bg-brand-accent/30 mx-auto mb-10" />
            <p className="max-w-2xl mx-auto text-xl font-serif text-brand-ink/40 leading-relaxed italic px-10">
              A curated anthology of traditional secrets, distilled through generations and refined for the modern epicurean.
            </p>
          </motion.div>
        </div>

        {/* Leftover Combiner */}
        <div className="max-w-5xl mx-auto mb-40">
          <div className="bg-white p-12 md:p-16 rounded-[3rem] border border-brand-faded shadow-xl shadow-brand-ink/5">
            <div className="flex items-center gap-6 mb-12">
              <div className="p-4 bg-brand-accent/5 rounded-2xl">
                <Trash2 size={28} className="text-brand-accent" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-brand-accent block mb-1">Sustainable Cooking</span>
                <span className="text-3xl font-serif text-brand-ink italic">Zero-Waste Combiner</span>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <input 
                type="text"
                placeholder="What remains in your pantry? (e.g. Tomato, Paneer)..."
                className="w-full bg-brand-cream border border-brand-faded rounded-2xl px-10 py-6 text-2xl font-serif italic outline-none focus:border-brand-accent focus:bg-white transition-all shadow-inner focus:ring-4 focus:ring-brand-accent/5"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.currentTarget.value) {
                    setPantryIngredients(prev => [...new Set([...prev, e.currentTarget.value])]);
                    e.currentTarget.value = '';
                  }
                }}
              />
              <div className="flex gap-3 flex-wrap min-h-[48px]">
                {pantryIngredients.length === 0 ? (
                  <p className="text-brand-ink/20 text-lg font-serif italic ml-4">Add items to discover matching heritage dishes...</p>
                ) : (
                  pantryIngredients.map(item => (
                    <motion.span 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      key={item} 
                      className="flex items-center gap-4 bg-brand-ink text-brand-cream px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg"
                    >
                      {item}
                      <button 
                        onClick={() => setPantryIngredients(prev => prev.filter(i => i !== item))}
                        className="hover:text-brand-accent transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </motion.span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Meal Type Quick Filters */}
        <div className="max-w-7xl mx-auto mb-32 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: 'Breakfast', icon: <Coffee size={24} />, label: 'Morning Harvest' },
            { id: 'Quick Snack', icon: <Clock size={24} />, label: 'Light Bites' },
            { id: 'Lunch', icon: <Sun size={24} />, label: 'Mid-Day Feast' },
            { id: 'Late Night', icon: <Moon size={24} />, label: 'Midnight Cravings' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setMealTypeFilter(prev => prev === item.id ? 'Default' : item.id as any)}
              className={`p-10 rounded-3xl border transition-all duration-500 flex flex-col items-center gap-6 group ${
                mealTypeFilter === item.id 
                  ? 'bg-brand-ink text-white border-brand-ink shadow-xl -translate-y-2' 
                  : 'bg-white text-brand-ink/40 border-brand-faded hover:border-brand-accent hover:translate-y-[-5px]'
              }`}
            >
              <div className={`p-6 rounded-2xl transition-colors ${mealTypeFilter === item.id ? 'bg-brand-accent/20 text-brand-accent' : 'bg-brand-faded/5'}`}>
                {item.icon}
              </div>
              <div className="text-center">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase block mb-1">{item.label}</span>
                {mealTypeFilter === item.id && isFiltering ? (
                  <Loader2 size={16} className="animate-spin mx-auto text-brand-accent" />
                ) : (
                  <span className="text-[10px] font-serif italic text-brand-ink/20 group-hover:text-brand-accent">Curated Selection</span>
                )}
              </div>
            </button>
          ))}
        </div>
        {/* Flavor & Language Toolbar */}
        <div className="max-w-5xl mx-auto px-6 mb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Flavor Slider */}
          <div className="bg-white p-8 rounded-[3rem] border border-brand-faded flex flex-col gap-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-orange-50 rounded-xl">
                  <Flame size={20} className="text-orange-600" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand-ink/60 block">Chef's Palette</span>
                  <span className="text-lg font-serif italic text-brand-accent">Spice & Zing Level</span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-brand-accent uppercase bg-brand-accent/10 px-4 py-1.5 rounded-full border border-brand-accent/10">
                {flavorPreference}
              </span>
            </div>
            <div className="flex bg-brand-cream p-1.5 rounded-[1.5rem] border border-brand-faded gap-1">
              {['Mild', 'Classic', 'Medium', 'Super Spicy', 'Maximum Zing'].map(level => (
                <button 
                  key={level}
                  onClick={() => setFlavorPreference(level)}
                  className={`flex-1 py-3 px-2 rounded-xl text-[9px] font-bold tracking-tight uppercase transition-all duration-300 ${
                    flavorPreference === level 
                      ? 'bg-brand-ink text-white shadow-xl scale-105' 
                      : 'text-brand-ink/30 hover:text-brand-accent hover:bg-white/50'
                  }`}
                >
                  {level.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Language Selector */}
          <div className="bg-white p-8 rounded-[3rem] border border-brand-faded flex flex-col gap-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-blue-50 rounded-xl">
                  <Languages size={20} className="text-blue-600" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand-ink/60 block">Global Kitchen</span>
                  <span className="text-lg font-serif italic text-brand-ink">Recipe Translator</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-blue-600/60 uppercase bg-blue-50 px-4 py-1.5 rounded-full flex items-center gap-2">
                <Sparkles size={12} />
                AI Vision
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['English', 'Hindi', 'Spanish', 'Tamil', 'French', 'Bengali'].map(lang => (
                <button 
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`py-3 rounded-2xl text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                    language === lang 
                      ? 'bg-brand-accent text-white border-brand-accent shadow-xl scale-105' 
                      : 'bg-brand-cream text-brand-ink/40 border-brand-faded hover:border-brand-accent hover:bg-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20 flex flex-wrap justify-center gap-6">
          <button 
            onClick={() => setSelectedCategory('All')}
            className={`px-8 py-4 rounded-full text-[11px] font-bold tracking-[0.4em] uppercase transition-all shadow-md ${
              selectedCategory === 'All' 
              ? 'bg-brand-ink text-white -translate-y-1' 
              : 'bg-white text-brand-ink/40 border border-brand-faded hover:border-brand-accent hover:text-brand-accent hover:bg-brand-cream/80'
            }`}
          >
            Show All
          </button>
          <button 
            onClick={() => setSelectedCategory('Favorites')}
            className={`px-8 py-4 rounded-full text-[11px] font-bold tracking-[0.4em] uppercase transition-all flex items-center gap-3 shadow-md ${
              selectedCategory === 'Favorites' 
              ? 'bg-red-600 text-white -translate-y-1 shadow-red-600/20' 
              : 'bg-white text-brand-ink/40 border border-brand-faded hover:border-red-500 hover:text-red-500 hover:bg-red-50'
            }`}
          >
            <Heart size={14} className={selectedCategory === 'Favorites' ? "fill-white" : "fill-transparent"} />
            Favorites ({favorites.length})
          </button>
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-4 rounded-full text-[11px] font-bold tracking-[0.4em] uppercase transition-all shadow-md ${
                selectedCategory === cat 
                ? 'bg-brand-accent text-white -translate-y-1 shadow-brand-accent/20' 
                : 'bg-white text-brand-ink/40 border border-brand-faded hover:border-brand-accent hover:text-brand-accent hover:bg-brand-cream/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24 lg:px-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredRecipes.map((recipe, i) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                index={i}
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={toggleFavorite}
                onClick={() => setSelectedRecipe(recipe)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredRecipes.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-2xl font-serif italic text-brand-ink/40">No recipes found matching your harvest search...</p>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-brand-olive/10 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <UtensilsCrossed className="text-brand-olive" />
              <span className="text-2xl font-serif tracking-tight">Bite & Bright.</span>
            </div>
            <p className="text-sm text-brand-ink/40 italic leading-relaxed">
              Preserving the authentic culinary heritage of India through digital storytelling and interactive experiences.
            </p>
          </div>
          
          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-olive/40">Regions</span>
              <a href="#" className="text-sm font-serif hover:text-brand-olive transition-colors">North India</a>
              <a href="#" className="text-sm font-serif hover:text-brand-olive transition-colors">South India</a>
              <a href="#" className="text-sm font-serif hover:text-brand-olive transition-colors">East India</a>
              <a href="#" className="text-sm font-serif hover:text-brand-olive transition-colors">West India</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-olive/40">App</span>
              <a href="#" className="text-sm font-serif hover:text-brand-olive transition-colors">About Us</a>
              <a href="#" className="text-sm font-serif hover:text-brand-olive transition-colors">Contributors</a>
              <a href="#" className="text-sm font-serif hover:text-brand-olive transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-brand-olive/5 text-center">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-olive/20">© 2026 Bite & Bright • Made by Geetanjali Nadi • Crafted for Lovers of Spice</span>
        </div>
      </footer>

      {/* Shopping List Modal */}
      <AnimatePresence>
        {showShoppingList && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-brand-ink/60 backdrop-blur-md"
            onClick={() => setShowShoppingList(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-brand-cream w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-[4rem] shadow-2xl flex flex-col relative border border-brand-faded"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowShoppingList(false)}
                className="absolute top-10 right-10 z-10 p-4 bg-white rounded-2xl hover:bg-brand-faded transition-all border border-brand-faded shadow-sm"
              >
                <X size={24} className="text-brand-accent" />
              </button>

              <div className="p-16 overflow-y-auto">
                <div className="mb-16 flex items-center gap-6">
                  <div className="p-5 bg-brand-ink rounded-2xl text-white shadow-lg">
                    <ListChecks size={32} />
                  </div>
                  <div>
                    <h2 className="text-5xl font-serif text-brand-ink">Shopping Bag</h2>
                    <p className="text-sm font-serif italic text-brand-ink/40 mt-1">AI-Powered ingredient aggregation</p>
                  </div>
                </div>

                {shoppingBag.length === 0 ? (
                  <div className="text-center py-24">
                    <ShoppingCart size={64} className="mx-auto text-brand-faded mb-8 opacity-20" />
                    <p className="text-2xl font-serif italic text-brand-ink/30">Your shopping bag is empty.</p>
                    <button 
                      onClick={() => setShowShoppingList(false)}
                      className="mt-8 text-brand-accent font-bold tracking-widest uppercase text-xs hover:underline"
                    >
                      Browse Recipes
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-16 flex flex-wrap gap-3">
                      {shoppingBag.map(r => (
                        <motion.span 
                          layout
                          key={r.id} 
                          className="bg-white border border-brand-faded px-5 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest flex items-center gap-4 shadow-sm"
                        >
                          {r.name}
                          <button 
                            onClick={() => setShoppingBag(prev => prev.filter(p => p.id !== r.id))}
                            className="hover:scale-125 transition-transform"
                          >
                            <X size={14} className="text-red-500" />
                          </button>
                        </motion.span>
                      ))}
                    </div>

                    {isGeneratingList ? (
                      <div className="flex flex-col items-center justify-center py-20 gap-6">
                        <Loader2 className="animate-spin text-brand-accent" size={48} />
                        <p className="text-xs font-bold tracking-[0.4em] uppercase text-brand-accent">AI is organizing your harvest...</p>
                      </div>
                    ) : (
                      <div className="space-y-16">
                        {(Object.entries(groceryData) as [string, string[]][]).map(([category, items]) => (
                          <div key={category}>
                            <h3 className="text-sm font-bold tracking-[0.4em] uppercase text-brand-accent mb-8 flex items-center gap-4">
                              {category}
                              <div className="h-px bg-brand-faded grow" />
                            </h3>
                            <ul className="space-y-6">
                              {items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-5 group cursor-pointer">
                                  <div className="w-6 h-6 border-2 border-brand-faded rounded-lg flex-shrink-0 group-hover:border-brand-accent transition-colors" />
                                  <span className="text-lg text-brand-ink/80 font-serif italic leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-20 flex gap-6">
                      <button className="flex-1 py-6 bg-brand-ink text-white rounded-full font-serif text-xl flex items-center justify-center gap-4 hover:bg-brand-accent shadow-2xl transition-all active:scale-95">
                        <Share2 size={24} /> Export List
                      </button>
                      <button 
                        onClick={() => setShoppingBag([])}
                        className="py-6 px-10 bg-white border border-brand-faded text-brand-ink rounded-[2rem] hover:bg-brand-faded transition-all flex items-center justify-center"
                      >
                        <Trash2 size={24} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selectedRecipe && (
          <RecipeModal 
            recipe={selectedRecipe} 
            flavorPreference={flavorPreference}
            language={language}
            isFavorite={favorites.includes(selectedRecipe.id)}
            onToggleFavorite={toggleFavorite}
            onAddToShoppingList={addToShoppingBag}
            isInShoppingList={!!shoppingBag.find(r => r.id === selectedRecipe.id)}
            onClose={() => setSelectedRecipe(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

