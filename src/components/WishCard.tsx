import { Heart } from "lucide-react";

interface WishCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  message: string;
  delay?: number;
}

const WishCard = ({
  imageSrc,
  imageAlt,
  title,
  message,
  delay = 0,
}: WishCardProps) => {
  return (
    <div
      className="valentine-card opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 aspect-square md:aspect-[4/3] rounded-xl overflow-hidden group">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Heart className="absolute bottom-4 right-4 w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-heart" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="font-cursive text-3xl text-primary mb-4">{title}</h3>
          <p className="text-foreground/80 leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
