import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ValentineDayCardProps {
  title: string;
  date: string;
  icon: LucideIcon;
  path: string;
  color: string;
  delay: number;
}

const ValentineDayCard = ({
  title,
  date,
  icon: Icon,
  path,
  color,
  delay,
}: ValentineDayCardProps) => {
  return (
    <Link
      to={path}
      className={`valentine-card group cursor-pointer opacity-0 animate-slide-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div
          className="p-4 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon
            className="w-10 h-10 transition-all duration-300 group-hover:animate-bounce-gentle"
            style={{ color }}
          />
        </div>
        <div>
          <h3 className="font-cursive text-3xl text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground font-medium">{date}</p>
        </div>
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300" />
      </div>
    </Link>
  );
};

export default ValentineDayCard;
