import { useMemo } from "react";
import { Heart } from "lucide-react";

const FloatingHearts = ({ count = 8 }: { count?: number }) => {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: 10 + Math.random() * 80,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 4,
        size: 10 + Math.random() * 14,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute bottom-0"
          style={{
            left: `${h.left}%`,
            animation: `heart-float ${h.duration}s ease-out ${h.delay}s infinite`,
            opacity: h.opacity,
          }}
        >
          <Heart size={h.size} className="text-primary fill-primary" />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
