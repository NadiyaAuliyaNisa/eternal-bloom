import { useEffect, useRef, useState, useCallback } from "react";

interface MusicControlProps {
  shouldPlay: boolean;
}

const MusicControl = ({ shouldPlay }: MusicControlProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const barsRef = useRef<number[]>([0.4, 0.7, 0.5, 0.8]);
  const [bars, setBars] = useState([0.4, 0.7, 0.5, 0.8]);

  useEffect(() => {
    // 🎵 CUSTOM MUSIC: Replace the URL below with your own MP3 file
    // e.g. a romantic instrumental inspired by "The Way You Look At Me" – Nyoman Paul
    // You can upload your own MP3 and paste the URL here.
    const MUSIC_URL =
      "https://cdn.pixabay.com/audio/2024/11/28/audio_3a4f12bd8a.mp3";

    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.25;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    if (shouldPlay && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [shouldPlay]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const newBars = barsRef.current.map(() => 0.2 + Math.random() * 0.8);
      barsRef.current = newBars;
      setBars([...newBars]);
    }, 300);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isPlaying]);

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 flex items-end gap-[3px] h-8 p-2 rounded-full bg-secondary/50 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-primary transition-all duration-300"
          style={{
            height: isPlaying ? `${h * 16}px` : "4px",
          }}
        />
      ))}
    </button>
  );
};

export default MusicControl;
