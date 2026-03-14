import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const MapScene = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 px-6 pb-20 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2 }}
        className="max-w-lg w-full"
      >
        <h2 className="font-display text-3xl md:text-4xl italic text-primary gold-text-glow text-center mb-2">
          Lokasi
        </h2>
        <p className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground text-center mb-6">
          Kediaman Mempelai Wanita
        </p>

        <div className="rounded-lg overflow-hidden border border-primary/20 gold-glow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5!2d109.14!3d-6.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTInMTIuMCJTIDEwOcKwMDgnMjQuMCJF!5e0!3m2!1sen!2sid!4v1"
            width="100%"
            height="250"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Location"
          />
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <MapPin size={14} className="text-primary" />
          <p className="font-body text-xs text-muted-foreground">
            Jl. Griya Santika 3 Blok B24, Pengabean, Dukuhturi, Tegal
          </p>
        </div>

        <a
          href="https://maps.google.com/?q=Griya+Santika+3+Blok+B24+Pengabean+Dukuhturi+Tegal"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-center px-6 py-3 border border-primary/30 text-primary font-body text-[10px] tracking-[0.2em] uppercase hover:bg-primary/10 transition-all"
        >
          Buka di Google Maps
        </a>
      </motion.div>
    </div>
  );
};

export default MapScene;
