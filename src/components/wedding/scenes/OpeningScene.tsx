import { motion } from "framer-motion";

interface OpeningSceneProps {
  onOpen: () => void;
}

const OpeningScene = ({ onOpen }: OpeningSceneProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-8"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground"
        >
          Kepada Yth.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="font-display text-2xl md:text-4xl italic text-primary gold-text-glow leading-relaxed"
        >
          Bapak / Ibu / Saudara / i
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="font-body text-xs md:text-sm text-foreground/70 leading-relaxed max-w-xs mx-auto"
        >
          Tanpa mengurangi rasa hormat,
          <br />
          kami mengundang Bapak/Ibu/Saudara/i
          <br />
          untuk hadir pada acara pernikahan kami.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          onClick={onOpen}
          className="mt-6 px-10 py-3 bg-primary text-primary-foreground font-body text-[10px] tracking-[0.25em] uppercase hover:bg-gold-glow transition-all duration-500 gold-glow"
        >
          Buka Undangan
        </motion.button>
      </motion.div>
    </div>
  );
};

export default OpeningScene;
