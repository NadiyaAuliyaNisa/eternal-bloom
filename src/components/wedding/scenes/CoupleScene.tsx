import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const CoupleScene = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-8"
      >
        The Wedding Of
      </motion.p>

      <div className="flex items-center justify-center gap-4 md:gap-12 mb-8">
        {/* Groom */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="w-28 h-36 md:w-36 md:h-48 rounded-t-full bg-gradient-to-b from-secondary to-background border border-primary/20 flex items-end justify-center overflow-hidden gold-glow">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Suit silhouette */}
              <svg viewBox="0 0 100 120" className="w-20 h-28 md:w-28 md:h-36">
                <circle cx="50" cy="25" r="15" fill="hsl(var(--ivory))" opacity="0.9" />
                <path d="M25 55 Q50 45 75 55 L80 120 L20 120 Z" fill="hsl(var(--navy))" stroke="hsl(var(--gold))" strokeWidth="0.5" />
                <path d="M42 55 L50 75 L58 55" fill="hsl(var(--ivory))" opacity="0.8" />
                <circle cx="50" cy="68" r="1.5" fill="hsl(var(--gold))" />
                <circle cx="50" cy="78" r="1.5" fill="hsl(var(--gold))" />
              </svg>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="font-display text-2xl md:text-3xl italic text-primary mt-4 gold-text-glow"
          >
            Bahrudin
          </motion.p>
        </motion.div>

        {/* Heart */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <Heart className="text-primary fill-primary animate-float" size={28} />
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="w-28 h-36 md:w-36 md:h-48 rounded-t-full bg-gradient-to-b from-secondary to-background border border-primary/20 flex items-end justify-center overflow-hidden gold-glow">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Bride with hijab silhouette */}
              <svg viewBox="0 0 100 120" className="w-20 h-28 md:w-28 md:h-36">
                {/* Hijab */}
                <ellipse cx="50" cy="30" rx="25" ry="28" fill="hsl(var(--ivory))" opacity="0.95" />
                <circle cx="50" cy="24" r="13" fill="hsl(var(--ivory))" opacity="0.9" />
                {/* Face */}
                <ellipse cx="50" cy="25" rx="10" ry="12" fill="hsla(30, 40%, 80%, 0.9)" />
                {/* Dress */}
                <path d="M20 55 Q50 42 80 55 L90 120 L10 120 Z" fill="hsl(var(--ivory))" opacity="0.95" />
                <path d="M20 55 Q50 42 80 55 L90 120 L10 120 Z" fill="none" stroke="hsl(var(--gold))" strokeWidth="0.5" />
                {/* Dress detail */}
                <path d="M35 70 Q50 65 65 70" fill="none" stroke="hsl(var(--gold))" strokeWidth="0.3" opacity="0.6" />
                <path d="M30 85 Q50 80 70 85" fill="none" stroke="hsl(var(--gold))" strokeWidth="0.3" opacity="0.4" />
              </svg>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="font-display text-2xl md:text-3xl italic text-primary mt-4 gold-text-glow"
          >
            Chella
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="font-display text-3xl md:text-5xl italic text-primary gold-text-glow text-center"
      >
        Bahrudin & Chella
      </motion.div>
    </div>
  );
};

export default CoupleScene;
