import DayPageLayout from "@/components/DayPageLayout";
import WishCard from "@/components/WishCard";
import CoupleSticker from "@/components/CoupleSticker";
import { Heart, Sparkles } from "lucide-react";
import stickerKiss from "@/assets/sticker-couple-kiss.png";
import stickerHug from "@/assets/sticker-couple-hug.png";
import musicSources from "@/config/musicSources";

const ValentinesDay = () => {
  return (
    <DayPageLayout
      title="Valentine's Day"
      emoji="❤️"
      date="February 14, 2025"
      primaryColor="#BE123C"
      musicSrc={musicSources.valentinesDay}
    >
      <div className="space-y-8">
        {/* Sticker pair */}
        <div className="flex justify-center gap-8">
          <CoupleSticker src={stickerKiss} alt="Couple kissing" size="md" />
          <CoupleSticker src={stickerHug} alt="Couple hugging" size="md" className="[animation-delay:1s]" />
        </div>

        {/* Special Hero Card */}
        <div
          className="valentine-card text-center opacity-0 animate-slide-up relative overflow-hidden"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="absolute top-4 left-4">
            <Sparkles className="w-6 h-6 text-gold animate-sparkle" />
          </div>
          <div className="absolute top-4 right-4">
            <Sparkles
              className="w-6 h-6 text-gold animate-sparkle"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <div className="py-8">
            <div className="flex justify-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-heart" />
              <Heart
                className="w-10 h-10 text-primary fill-primary animate-pulse-heart"
                style={{ animationDelay: "0.2s" }}
              />
              <Heart
                className="w-8 h-8 text-primary fill-primary animate-pulse-heart"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
            <h2 className="font-cursive text-5xl md:text-6xl text-primary mb-4">
              Happy Valentine's Day
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The First Valentine's Day of Our Beautiful Journey Together, Mere Jaanaaaaa💖
              You know I'll adore youuuu till Eternity so buckle up for a lifetime of love, laughter, and endless adventures together. I love youuuuuuuu so so muchhhhhhhhhh mere jaanaaaaa💖
            </p>
          </div>
        </div>

        <WishCard
          imageSrc="/usssssssssssss.png"
          imageAlt="Valentine's Day celebration"
          title="To My Forever Valentine"
          message=" just know one thing for sure jaanaaaa and that is : In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine. if tum mere sath ho toh iss sansar se tarr jauuu. "
          delay={0.3}
        />

        <WishCard
          imageSrc="/11.jpg"
          imageAlt="Love and happiness"
          title="My Heart Belongs to You"
          message="I want you to know that you are the love of my life. Every moment with you is a treasure, every memory a masterpiece. Thank you for making my life beautiful beyond words and I hopee I can make you feel the same way."
          delay={0.5}
        />

        <div
          className="valentine-card text-center opacity-0 animate-slide-up"
          style={{ animationDelay: "0.7s" }}
        >
          <p className="font-cursive text-4xl text-primary mb-4">
            "I just want to be with you, in this moment and every moment after that."
          </p>
          <p className="text-muted-foreground italic mb-6">
            "I loveeeeeee youuuuuuuu so so muchhhhhhhhhh mere jaanaaaaa💖"
          </p>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-6 h-6 text-primary fill-primary animate-pulse-heart"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </DayPageLayout>
  );
};

export default ValentinesDay;
