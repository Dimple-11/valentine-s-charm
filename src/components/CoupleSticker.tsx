interface CoupleStickerProps {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-24 h-24",
  md: "w-36 h-36",
  lg: "w-48 h-48",
};

const CoupleSticker = ({ src, alt, className = "", size = "md" }: CoupleStickerProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeMap[size]} object-contain drop-shadow-lg animate-float-sticker select-none pointer-events-none ${className}`}
      draggable={false}
    />
  );
};

export default CoupleSticker;
