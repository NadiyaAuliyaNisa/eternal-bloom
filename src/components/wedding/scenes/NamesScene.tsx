import { motion } from "framer-motion";

const NamesScene = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 px-6 pb-20 sm:pb-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20 max-w-4xl">
        {/* Groom */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center flex-1"
        >
          <h2 className="font-display text-3xl md:text-4xl italic text-primary gold-text-glow mb-4">
            M. Bahrudin
          </h2>
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Putra pertama dari
          </p>
          <p className="font-display text-lg text-foreground/80">
            Bapak Sukarno <span className="text-muted-foreground text-sm">(Alm)</span>
          </p>
          <p className="font-display text-lg text-foreground/60">&</p>
          <p className="font-display text-lg text-foreground/80">Ibu Mahmudah</p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden md:block w-px h-40 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="md:hidden font-display text-2xl text-primary"
        >
          &
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center flex-1"
        >
          <h2 className="font-display text-3xl md:text-4xl italic text-primary gold-text-glow mb-4">
            Tri Marsella Putri Chaniago
          </h2>
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Putri ketiga dari
          </p>
          <p className="font-display text-lg text-foreground/80">
            Bapak Samri Maharesi Chaniago <span className="text-muted-foreground text-sm">(Alm)</span>
          </p>
          <p className="font-display text-lg text-foreground/60">&</p>
          <p className="font-display text-lg text-foreground/80">Ibu N. M. Surtini</p>
        </motion.div>
      </div>
    </div>
  );
};

export default NamesScene;
