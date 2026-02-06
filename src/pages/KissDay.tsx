import DayPageLayout from "@/components/DayPageLayout";
import WishCard from "@/components/WishCard";
import CoupleSticker from "@/components/CoupleSticker";
import stickerKiss from "@/assets/sticker-couple-kiss.png";
import musicSources from "@/config/musicSources";

const KissDay = () => {
  return (
    <DayPageLayout
      title="Kiss Day"
      emoji="💋"
      date="February 13, 2025"
      primaryColor="#F43F5E"
      musicSrc={musicSources.kissDay}
    >
      <div className="space-y-8">
        <div className="flex justify-center">
          <CoupleSticker src={stickerKiss} alt="Couple kissing" size="lg" />
        </div>

        <WishCard
          imageSrc="/download (7).jpg"
          imageAlt="Romantic moment"
          title="Sealed with a Kiss"
          message="There’s something about the way you kiss meeeee,
                  like you know it’s your place.
                  It feels special, almost chosen,
                  like those kisses were meant to be yours."
          delay={0.2}
        />

        <WishCard
          imageSrc="/download (8).jpg"
          imageAlt="Love and romance"
          title="The Sweetest Expression"
          message="Youuuu & meee all locked in a room, just kissing and loving each other, no one else in the world, just us two and our love. That’s how I want to spend every moment with youuuuuu, just lost in our love and kisses."
          delay={0.4}
        />

        <div
          className="valentine-card text-center opacity-0 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="font-cursive text-4xl text-primary mb-4">
            "Youre the best part of me, with youuuuu I am Complete."
          </p>
          <p className="text-muted-foreground italic">
            "I loveeeeee youuuuuuuu so so muchhhhhhhhhh mere jaanaaaaa💖"
          </p>
        </div>
      </div>
    </DayPageLayout>
  );
};

export default KissDay;
