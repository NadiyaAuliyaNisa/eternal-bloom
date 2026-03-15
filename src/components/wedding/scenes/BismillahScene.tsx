import { motion } from "framer-motion";

const BismillahScene = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="font-arabic text-3xl md:text-5xl text-primary gold-text-glow leading-relaxed"
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 1.2 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground"
        >
          Dengan Nama Allah Yang Maha Pengasih Lagi Maha Penyayang
        </motion.p>
      </motion.div>
    </div>
  );
};

export default BismillahScene;
