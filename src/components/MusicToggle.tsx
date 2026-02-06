import { Volume2, VolumeX } from "lucide-react";

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicToggle = ({ isPlaying, onToggle }: MusicToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:scale-110 group"
      aria-label={isPlaying ? "Mute music" : "Play music"}
      title={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-primary animate-pulse-heart" />
      ) : (
        <VolumeX className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
      )}
    </button>
  );
};

export default MusicToggle;
