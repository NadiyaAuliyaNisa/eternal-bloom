import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FinalScene = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 px-6 pb-20 sm:pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center space-y-8 max-w-md"
      >
        <Heart className="text-primary fill-primary mx-auto animate-float" size={36} />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="font-display text-base md:text-lg italic text-foreground/80 leading-relaxed"
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami
          apabila Bapak/Ibu/Saudara/i
          berkenan hadir untuk memberikan doa restu.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="font-display text-base md:text-lg italic text-foreground/70 leading-relaxed"
        >
          Atas kehadiran dan doa restunya
          <br />
          kami ucapkan terima kasih.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="font-arabic text-lg md:text-xl text-primary/80"
        >
          Wassalamu'alaikum Warahmatullahi Wabarakatuh
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="space-y-2"
        >
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            With Love
          </p>
          <p className="font-display text-2xl md:text-3xl italic text-primary gold-text-glow">
            Bahrudin & Chella
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FinalScene;
