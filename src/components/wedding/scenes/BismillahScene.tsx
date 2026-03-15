import { motion } from "framer-motion";

const BismillahScene = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 px-6 pb-20 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="text-center space-y-8 max-w-md"
      >
        {/* Bismillah */}
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

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="font-display text-base md:text-lg italic text-foreground/80 leading-relaxed"
        >
          Dengan memohon rahmat dan ridho dari Allah SWT,
          <br />
          kami bermaksud menyelenggarakan acara pernikahan kami:
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto"
        />

        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1.2 }}
          className="space-y-1"
        >
          <h2 className="font-display text-2xl md:text-3xl italic text-primary gold-text-glow">
            M. Bahrudin
          </h2>
          <p className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            Putra Anak Pertama dari
          </p>
          <p className="font-display text-sm text-foreground/70">
            Bapak Sukarno <span className="text-muted-foreground text-xs">(Alm)</span> & Ibu Mahmudah
          </p>
        </motion.div>

        {/* Ampersand */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.8, duration: 0.8 }}
          className="font-display text-2xl text-primary"
        >
          &
        </motion.p>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.2, duration: 1.2 }}
          className="space-y-1"
        >
          <h2 className="font-display text-2xl md:text-3xl italic text-primary gold-text-glow">
            Tri Marsella Putri Chaniago
          </h2>
          <p className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            Putri Anak Ketiga dari
          </p>
          <p className="font-display text-sm text-foreground/70">
            Bapak Samri Maharesi Chaniago <span className="text-muted-foreground text-xs">(Alm)</span> & Ibu N.M Surtini
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BismillahScene;
