import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useState, useEffect } from "react";

interface NavigationHUDProps {
  onPrev: () => void;
  onNext: () => void;
  onTogglePause: () => void;
  isPaused: boolean;
  currentScene: number;
  totalScenes: number;
}

const NavigationHUD = ({ onPrev, onNext, onTogglePause, isPaused, currentScene, totalScenes }: NavigationHUDProps) => {
  const [isIdle, setIsIdle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      setIsIdle(false);
      return;
    }
    const timer = setTimeout(() => setIsIdle(true), 4000);
    return () => clearTimeout(timer);
  }, [currentScene, isPaused, isHovered]);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 sm:gap-5 rounded-full px-4 py-2.5 sm:px-6 sm:py-3 border transition-all duration-700 ${
        isIdle && !isPaused
          ? "opacity-30 border-primary/5 bg-background/5"
          : "opacity-100 border-primary/25 bg-background/10"
      } backdrop-blur-md safe-area-bottom`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => { setIsHovered(true); setIsIdle(false); }}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 3000)}
    >
      <button
        onClick={onPrev}
        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-primary/20 text-primary/70 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_12px_hsla(43,52%,56%,0.2)] transition-all duration-300 bg-transparent"
        aria-label="Previous"
      >
        <ChevronLeft size={14} className="sm:w-4 sm:h-4" />
      </button>

      <button
        onClick={onTogglePause}
        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-primary/25 text-primary/70 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_12px_hsla(43,52%,56%,0.2)] transition-all duration-300 bg-transparent"
        aria-label={isPaused ? "Play" : "Pause"}
      >
        {isPaused ? <Play size={12} className="sm:w-3.5 sm:h-3.5 ml-0.5" /> : <Pause size={12} className="sm:w-3.5 sm:h-3.5" />}
      </button>

      <button
        onClick={onNext}
        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-primary/20 text-primary/70 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_12px_hsla(43,52%,56%,0.2)] transition-all duration-300 bg-transparent"
        aria-label="Next"
      >
        <ChevronRight size={14} className="sm:w-4 sm:h-4" />
      </button>

      <div className="flex gap-1 ml-1.5">
        {Array.from({ length: totalScenes }, (_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentScene ? "bg-primary w-3.5" : "bg-primary/15 w-1"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationHUD;
