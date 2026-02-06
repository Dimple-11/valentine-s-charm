import {
  Flower2,
  HeartHandshake,
  Candy,
  Cat,
  Handshake,
  Heart,
  Sparkles,
} from "lucide-react";
import ValentineDayCard from "@/components/ValentineDayCard";
import FloatingHearts from "@/components/FloatingHearts";
import CoupleSticker from "@/components/CoupleSticker";
import MusicToggle from "@/components/MusicToggle";
import useBackgroundMusic from "@/hooks/useBackgroundMusic";
import musicSources from "@/config/musicSources";
import stickerHug from "@/assets/sticker-couple-hug.png";
import stickerHands from "@/assets/sticker-couple-hands.png";

const valentineDays = [
  {
    title: "Rose Day",
    date: "February 7",
    icon: Flower2,
    path: "/rose-day",
    color: "#E11D48",
  },
  {
    title: "Propose Day",
    date: "February 8",
    icon: HeartHandshake,
    path: "/propose-day",
    color: "#DB2777",
  },
  {
    title: "Chocolate Day",
    date: "February 9",
    icon: Candy,
    path: "/chocolate-day",
    color: "#92400E",
  },
  {
    title: "Teddy Day",
    date: "February 10",
    icon: Cat,
    path: "/teddy-day",
    color: "#D97706",
  },
  {
    title: "Promise Day",
    date: "February 11",
    icon: Handshake,
    path: "/promise-day",
    color: "#7C3AED",
  },
  {
    title: "Hug Day",
    date: "February 12",
    icon: Heart,
    path: "/hug-day",
    color: "#EC4899",
  },
  {
    title: "Kiss Day",
    date: "February 13",
    icon: Sparkles,
    path: "/kiss-day",
    color: "#F43F5E",
  },
  {
    title: "Valentine's Day",
    date: "February 14",
    icon: Heart,
    path: "/valentines-day",
    color: "#BE123C",
  },
];

const Index = () => {
  const { isPlaying, toggle } = useBackgroundMusic(musicSources.home);

  return (
    <div className="min-h-screen bg-gradient-blush relative overflow-hidden">
      <FloatingHearts />
      <MusicToggle isPlaying={isPlaying} onToggle={toggle} />

      {/* Decorative Stickers */}
      <div className="absolute top-20 left-4 z-10 opacity-80 hidden md:block">
        <CoupleSticker src={stickerHug} alt="Cute couple hugging" size="lg" />
      </div>
      <div className="absolute top-32 right-4 z-10 opacity-80 hidden md:block" style={{ animationDelay: "1s" }}>
        <CoupleSticker src={stickerHands} alt="Cute couple holding hands" size="lg" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-8 px-6 text-center">
        <div className="opacity-0 animate-fade-in-scale">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Heart className="w-10 h-10 text-primary animate-pulse-heart fill-primary/20" />
            <Sparkles className="w-8 h-8 text-rose-light animate-bounce-gentle" />
            <Heart className="w-10 h-10 text-primary animate-pulse-heart fill-primary/20" style={{ animationDelay: "0.3s" }} />
          </div>
          <h1 className="font-cursive text-6xl md:text-7xl lg:text-8xl text-primary mb-4">
            Happy 1st Valentine Together 
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Let's Cherish Every Moment of This Beautiful Journey of Love and Togetherness.
          </p>
          <p className="text-sm text-muted-foreground/70">
            February 7 - February 14
          </p>
        </div>
      </section>

      {/* Mobile Sticker */}
      <div className="flex justify-center md:hidden mb-4">
        <CoupleSticker src={stickerHug} alt="Cute couple hugging" size="md" />
      </div>

      {/* Cards Grid */}
      <section className="relative z-10 container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valentineDays.map((day, index) => (
            <ValentineDayCard
              key={day.path}
              {...day}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-border/50">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-heart" /> For My Mister Aarav Pandey
        </p>
      </footer>
    </div>
  );
};

export default Index;
