import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin, Calendar, Clock } from "lucide-react";

const TARGET_DATE = new Date("2026-03-26T10:00:00+07:00").getTime();

const EventScene = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, TARGET_DATE - now);
      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { label: "Hari", value: countdown.days },
    { label: "Jam", value: countdown.hours },
    { label: "Menit", value: countdown.minutes },
    { label: "Detik", value: countdown.seconds },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 px-6 pb-20 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="bg-gradient-to-br from-secondary/80 to-background/80 backdrop-blur-xl border border-primary/20 rounded-lg p-8 md:p-12 max-w-lg w-full gold-glow"
      >
        <div className="text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl italic text-primary gold-text-glow">
            Akad Nikah
          </h2>

          <div className="flex items-center justify-center gap-2 text-foreground/80">
            <Calendar size={14} className="text-primary" />
            <p className="font-body text-sm">Kamis, 26 Maret 2026</p>
          </div>

          <div className="flex items-center justify-center gap-2 text-foreground/80">
            <Clock size={14} className="text-primary" />
            <p className="font-body text-sm">Pukul 10.00 WIB</p>
          </div>

          <div className="w-12 h-px bg-primary/30 mx-auto" />

          <div className="flex items-start justify-center gap-2 text-foreground/70">
            <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" />
            <p className="font-body text-xs leading-relaxed text-center">
              Kediaman Mempelai Wanita<br />
              Jl. Griya Santika 3 Blok B24<br />
              RT 02 RW 03<br />
              Kel. Pengabean, Kec. Dukuhturi<br />
              Kab. Tegal
            </p>
          </div>
        </div>
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex gap-4 md:gap-6 mt-8"
      >
        {countdownItems.map((item) => (
          <div key={item.label} className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-secondary/50 backdrop-blur-md border border-primary/20 flex items-center justify-center animate-pulse-gold">
              <span className="font-display text-2xl md:text-3xl text-primary tabular-nums">
                {String(item.value).padStart(2, "0")}
              </span>
            </div>
            <p className="font-body text-[9px] tracking-[0.15em] uppercase text-muted-foreground mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default EventScene;
