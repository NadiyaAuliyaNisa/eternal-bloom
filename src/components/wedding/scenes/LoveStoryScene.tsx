import { motion } from "framer-motion";

const timeline = [
  { year: "2023", text: "Kami pertama kali diperkenalkan oleh sahabat." },
  { year: "September 2025", text: "Kami mulai berkomunikasi dan akhirnya bertemu." },
  { year: "Perjalanan menuju keseriusan", text: "Seiring waktu berjalan kami semakin yakin hingga akhirnya memutuskan untuk melangkah ke jenjang yang lebih serius." },
];

const LoveStoryScene = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 px-6 pb-20 sm:pb-24">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-display text-3xl md:text-4xl italic text-primary gold-text-glow mb-10"
      >
        Our Love Story
      </motion.h2>

      <div className="relative max-w-md w-full">
        {/* Timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent origin-top"
        />

        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-10 pb-8"
          >
            {/* Dot */}
            <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background animate-pulse-gold" />
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-1">
              {item.year}
            </p>
            <p className="font-display text-base md:text-lg text-foreground/80 italic leading-relaxed">
              "{item.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LoveStoryScene;
