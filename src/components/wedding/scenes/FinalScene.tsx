import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FinalScene = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 px-6 pb-20 sm:pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center space-y-8"
      >
        <Heart className="text-primary fill-primary mx-auto animate-float" size={36} />

        <h2 className="font-display text-3xl md:text-5xl italic text-primary gold-text-glow leading-snug">
          Terima Kasih<br />Atas Doa & Kehadiran Anda
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-arabic text-xl text-primary/80"
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
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
