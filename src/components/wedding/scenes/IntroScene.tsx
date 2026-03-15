import { motion } from "framer-motion";

const IntroScene = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 px-6 pb-20 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-6 max-w-sm"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="font-display text-lg md:text-xl italic text-foreground/80 leading-relaxed"
        >
          Dengan memohon rahmat dan ridho dari Allah SWT,
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1.5 }}
          className="font-display text-lg md:text-xl italic text-foreground/80 leading-relaxed"
        >
          kami bermaksud menyelenggarakan acara pernikahan kami
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default IntroScene;
