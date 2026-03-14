import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const RsvpScene = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Terima kasih atas konfirmasi Anda!", {
      style: { background: "hsl(222, 47%, 11%)", color: "hsl(43, 52%, 56%)", border: "1px solid hsla(43, 52%, 56%, 0.2)" },
    });
    setName("");
    setAttendance("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative z-20 px-6 pb-20 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2 }}
        className="max-w-md w-full"
      >
        <h2 className="font-display text-3xl md:text-4xl italic text-primary gold-text-glow text-center mb-8">
          RSVP
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-2">
              Nama Tamu
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-transparent border-b border-primary/30 py-3 text-foreground font-display text-lg focus:border-primary outline-none transition-all"
              placeholder="Nama lengkap"
            />
          </div>

          <div>
            <label className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-2">
              Konfirmasi Kehadiran
            </label>
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              required
              className="w-full bg-transparent border-b border-primary/30 py-3 text-foreground font-display text-lg focus:border-primary outline-none transition-all appearance-none"
            >
              <option value="" className="bg-secondary">Pilih</option>
              <option value="hadir" className="bg-secondary">Hadir</option>
              <option value="tidak" className="bg-secondary">Tidak Hadir</option>
              <option value="mungkin" className="bg-secondary">Mungkin</option>
            </select>
          </div>

          <div>
            <label className="font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mb-2">
              Ucapan untuk Mempelai
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full bg-transparent border-b border-primary/30 py-3 text-foreground font-display text-base focus:border-primary outline-none transition-all resize-none"
              placeholder="Tulis ucapan..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 font-body text-[10px] tracking-[0.2em] uppercase hover:bg-gold-glow transition-all duration-500"
          >
            Kirim
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default RsvpScene;
