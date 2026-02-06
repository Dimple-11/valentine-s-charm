import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import FloatingHearts from "./FloatingHearts";
import MusicToggle from "./MusicToggle";
import useBackgroundMusic from "@/hooks/useBackgroundMusic";

interface DayPageLayoutProps {
  title: string;
  emoji: string;
  date: string;
  primaryColor: string;
  musicSrc: string;
  children: ReactNode;
}

const DayPageLayout = ({
  title,
  emoji,
  date,
  primaryColor,
  musicSrc,
  children,
}: DayPageLayoutProps) => {
  const { isPlaying, toggle } = useBackgroundMusic(musicSrc);

  return (
    <div className="min-h-screen bg-gradient-blush relative overflow-hidden">
      <FloatingHearts />
      <MusicToggle isPlaying={isPlaying} onToggle={toggle} />

      {/* Header */}
      <header className="relative z-10 pt-6 px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Valentine's Week</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        {/* Animated Heading */}
        <div className="text-center mb-12 opacity-0 animate-fade-in-scale">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Heart
              className="w-8 h-8 animate-pulse-heart"
              style={{ color: primaryColor }}
              fill={primaryColor}
            />
            <span className="text-5xl">{emoji}</span>
            <Heart
              className="w-8 h-8 animate-pulse-heart"
              style={{ color: primaryColor, animationDelay: "0.5s" }}
              fill={primaryColor}
            />
          </div>
          <h1
            className="font-cursive text-6xl md:text-7xl lg:text-8xl mb-4"
            style={{ color: primaryColor }}
          >
            Happy {title}
          </h1>
          <p className="text-lg text-muted-foreground font-medium">{date}</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default DayPageLayout;
