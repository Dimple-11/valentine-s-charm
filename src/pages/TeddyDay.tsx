import DayPageLayout from "@/components/DayPageLayout";
import WishCard from "@/components/WishCard";
import CoupleSticker from "@/components/CoupleSticker";
import stickerTeddy from "@/assets/sticker-couple-teddy.png";
import musicSources from "@/config/musicSources";

const TeddyDay = () => {
  return (
    <DayPageLayout
      title="Teddy Day"
      emoji="🧸"
      date="February 10, 2025"
      primaryColor="#D97706"
      musicSrc={musicSources.teddyDay}
    >
      <div className="space-y-8">
        <div className="flex justify-center">
          <CoupleSticker src={stickerTeddy} alt="Couple with teddy bear" size="lg" />
        </div>

        <WishCard
          imageSrc="/dimp1.jpg"
          imageAlt="Cute teddy bear"
          title="A Cuddly Companion"
          message="Yk babyyy zi, When you came into relationship with meeee , you got yourself a soft, cuddly, and loyal companion who will always be there to comfort you, make you smile, and fill your life with warmth and love. Just like a teddy bear, I'll be your constant source of comfort and joy."
          delay={0.2}
        />

        <WishCard
          imageSrc="/download (4).jpg"
          imageAlt="Soft plush toy"
          title="Soft and Sweet"
          message="Like a teddy bear that never lets go, my love for you is constant and unwavering. May this soft companion remind you that you are always loved, always cherished, and never alone."
          delay={0.4}
        />

        <div
          className="valentine-card text-center opacity-0 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="font-cursive text-4xl text-primary mb-4">
            "Your Soft TeddyBear,Your loveeeeeee"
          </p>
          <p className="text-muted-foreground italic">
            "I loveeeeee youuuuuuuu so so muchhhhhhhhhh mere jaanaaaaa💖"
          </p>
        </div>
      </div>
    </DayPageLayout>
  );
};

export default TeddyDay;
