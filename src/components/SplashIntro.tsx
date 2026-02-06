import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import coupleIntro from "@/assets/couple-intro.png";

interface SplashIntroProps {
  onComplete: () => void;
}

const SplashIntro = ({ onComplete }: SplashIntroProps) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "burst" | "done">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("burst"), 2400);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${
        phase === "burst" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "linear-gradient(135deg, hsl(350 60% 95%), hsl(350 80% 90%), hsl(30 100% 97%))" }}
    >
      {/* Burst hearts */}
      {phase === "burst" &&
        Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * 360;
          const rad = (angle * Math.PI) / 180;
          const dist = 300 + Math.random() * 200;
          const tx = Math.cos(rad) * dist;
          const ty = Math.sin(rad) * dist;
          const size = 16 + Math.random() * 24;
          return (
            <Heart
              key={i}
              className="absolute text-primary fill-primary"
              style={{
                width: size,
                height: size,
                animation: `burstHeart 1s ease-out forwards`,
                animationDelay: `${i * 30}ms`,
                ["--tx" as string]: `${tx}px`,
                ["--ty" as string]: `${ty}px`,
              }}
            />
          );
        })}

      {/* Center content */}
      <div
        className={`flex flex-col items-center gap-6 transition-all duration-700 ${
          phase === "enter"
            ? "scale-50 opacity-0"
            : phase === "hold"
            ? "scale-100 opacity-100"
            : "scale-150 opacity-0"
        }`}
      >
        {/* Glowing ring */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-primary/20 animate-pulse-heart" />
          <div className="absolute -inset-8 rounded-full bg-primary/10 animate-pulse-heart [animation-delay:0.3s]" />
          <img
            src={coupleIntro}
            alt="Cute couple"
            className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full border-4 border-primary/30 shadow-hover relative z-10 bg-card"
          />
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="font-cursive text-4xl md:text-5xl text-primary animate-pulse-heart">
            Made with Love
          </p>
          <div className="flex justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-5 h-5 text-primary fill-primary animate-pulse-heart"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashIntro;
