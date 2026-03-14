import { motion } from "framer-motion";
import { Gift, Copy, Check } from "lucide-react";
import { useState } from "react";

const GiftScene = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("089524252203");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2 }}
        className="max-w-sm w-full"
      >
        <div className="text-center mb-8">
          <Gift className="text-primary mx-auto mb-4" size={32} />
          <h2 className="font-display text-3xl md:text-4xl italic text-primary gold-text-glow">
            Wedding Gift
          </h2>
        </div>

        <div className="bg-gradient-to-br from-secondary to-background border border-primary/20 p-8 rounded-lg gold-glow">
          <div className="text-center space-y-4">
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              DANA
            </p>
            <p className="font-display text-2xl text-primary tracking-wider">
              089524252203
            </p>
            <div className="w-8 h-px bg-primary/30 mx-auto" />
            <p className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
              Atas Nama
            </p>
            <p className="font-display text-xl text-foreground/90">Bahrudin</p>

            <button
              onClick={handleCopy}
              className="mt-4 flex items-center gap-2 mx-auto px-6 py-2.5 border border-primary/30 text-primary font-body text-[10px] tracking-[0.2em] uppercase hover:bg-primary/10 transition-all"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? "Copied!" : "Copy Number"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GiftScene;
