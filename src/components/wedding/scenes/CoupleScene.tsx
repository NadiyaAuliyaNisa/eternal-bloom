import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import groomPhoto from "@/assets/groom-photo.png";
import bridePhoto from "@/assets/bride-photo.png";

const CoupleScene = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 pb-20 sm:pb-24">
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
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="w-28 h-36 md:w-36 md:h-48 rounded-t-full border-2 border-primary/40 overflow-hidden relative gold-glow"
            style={{
              boxShadow: "0 0 25px hsla(43, 52%, 56%, 0.3), 0 0 50px hsla(43, 52%, 56%, 0.1)",
            }}
          >
            {/* Dark overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30 z-10" />
            <img
              src={groomPhoto}
              alt="Bahrudin - Groom"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="font-display text-2xl md:text-3xl italic text-primary mt-4 gold-text-glow"
          >
            Bahrudin
          </motion.p>
        </motion.div>

        {/* Heart */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 10px hsla(43, 52%, 56%, 0.3)",
                "0 0 25px hsla(43, 52%, 56%, 0.6)",
                "0 0 10px hsla(43, 52%, 56%, 0.3)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="rounded-full p-1"
          >
            <Heart className="text-primary fill-primary animate-float" size={28} />
          </motion.div>
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="w-28 h-36 md:w-36 md:h-48 rounded-t-full border-2 border-primary/40 overflow-hidden relative gold-glow"
            style={{
              boxShadow: "0 0 25px hsla(43, 52%, 56%, 0.3), 0 0 50px hsla(43, 52%, 56%, 0.1)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30 z-10" />
            <img
              src={bridePhoto}
              alt="Chella - Bride"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="font-display text-2xl md:text-3xl italic text-primary mt-4 gold-text-glow"
          >
            Chella
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="font-display text-3xl md:text-5xl italic text-primary gold-text-glow text-center"
      >
        Bahrudin & Chella
      </motion.div>
    </div>
  );
};

export default CoupleScene;
