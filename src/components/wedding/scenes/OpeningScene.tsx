import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OpeningSceneProps {
  onOpen: () => void;
}

const OpeningScene = ({ onOpen }: OpeningSceneProps) => {
  const [phase, setPhase] = useState<"bismillah" | "envelope">("bismillah");

  // Auto transition from bismillah to envelope
  useState(() => {
    const timer = setTimeout(() => setPhase("envelope"), 3500);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20">
      <AnimatePresence mode="wait">
        {phase === "bismillah" && (
          <motion.div
            key="bismillah"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="text-center"
          >
            <p className="font-arabic text-3xl md:text-5xl text-primary gold-text-glow leading-relaxed">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </p>
          </motion.div>
        )}

        {phase === "envelope" && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-body text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground"
            >
              You Are Invited To Our Wedding
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="font-display text-4xl md:text-6xl italic text-primary gold-text-glow"
            >
              Bahrudin & Chella
            </motion.h1>

            {/* Envelope */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="relative mt-4"
            >
              <div className="w-48 h-32 md:w-64 md:h-44 relative" style={{ perspective: "800px" }}>
                {/* Envelope body */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background border border-primary/20 rounded-md gold-glow" />
                {/* Envelope flap */}
                <div
                  className="absolute top-0 left-0 right-0 h-1/2 origin-top border-l border-r border-t border-primary/20 rounded-t-md"
                  style={{
                    background: "linear-gradient(to bottom, hsl(var(--navy)), hsl(var(--secondary)))",
                    clipPath: "polygon(0 0, 50% 70%, 100% 0)",
                  }}
                />
                {/* Gold seal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/80 animate-pulse-gold flex items-center justify-center">
                  <span className="font-display text-primary-foreground text-xs">B&C</span>
                </div>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              onClick={onOpen}
              className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-body text-[10px] tracking-[0.2em] uppercase hover:bg-gold-glow transition-all duration-500 gold-glow"
            >
              Open Invitation
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OpeningScene;
