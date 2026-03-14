import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface NavigationHUDProps {
  onPrev: () => void;
  onNext: () => void;
  onTogglePause: () => void;
  isPaused: boolean;
  currentScene: number;
  totalScenes: number;
}

const NavigationHUD = ({ onPrev, onNext, onTogglePause, isPaused, currentScene, totalScenes }: NavigationHUDProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-secondary/30 backdrop-blur-md border border-primary/10 rounded-full px-6 py-3">
      <button
        onClick={onPrev}
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={onTogglePause}
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label={isPaused ? "Play" : "Pause"}
      >
        {isPaused ? <Play size={16} /> : <Pause size={16} />}
      </button>

      <button
        onClick={onNext}
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={18} />
      </button>

      <div className="flex gap-1 ml-2">
        {Array.from({ length: totalScenes }, (_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              i === currentScene ? "bg-primary w-4" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationHUD;
