import React, { useState } from 'react';
import { HelpCircle, Loader2, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getSubstitution } from '../services/substitutionService';

interface SubstituteButtonProps {
  item: string;
  recipeName: string;
}

export const SubstituteButton: React.FC<SubstituteButtonProps> = ({ item, recipeName }) => {
  const [loading, setLoading] = useState(false);
  const [substitute, setSubstitute] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  const handleSuggest = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (substitute) {
      setShow(true);
      return;
    }
    
    setLoading(true);
    const result = await getSubstitution(item, recipeName);
    setSubstitute(result);
    setLoading(false);
    setShow(true);
  };

  return (
    <div className="relative inline-block ml-2 align-middle">
      <button
        onClick={handleSuggest}
        className="p-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent hover:bg-brand-accent hover:text-white transition-all group flex items-center gap-1.5"
        title="Find a substitute"
      >
        {loading ? (
          <Loader2 size={12} className="animate-spin" />
        ) : (
          <Sparkles size={12} />
        )}
        <span className="text-[8px] font-bold tracking-widest uppercase hidden group-hover:inline">Swap</span>
      </button>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute z-50 bottom-full mb-4 left-0 w-64 bg-brand-ink text-white p-4 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <HelpCircle size={14} className="text-brand-accent" />
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">Smart Swap</span>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setShow(false); }}
                className="hover:bg-white/10 p-1 rounded-full"
              >
                <X size={12} />
              </button>
            </div>
            <p className="text-sm font-serif italic leading-relaxed text-brand-cream">
              {substitute}
            </p>
            <div className="absolute top-full left-4 w-4 h-4 bg-brand-ink rotate-45 -translate-y-2 border-r border-b border-white/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
