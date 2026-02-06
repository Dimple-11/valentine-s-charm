import DayPageLayout from "@/components/DayPageLayout";
import WishCard from "@/components/WishCard";
import CoupleSticker from "@/components/CoupleSticker";
import stickerHug from "@/assets/sticker-couple-hug.png";
import musicSources from "@/config/musicSources";

const HugDay = () => {
  return (
    <DayPageLayout
      title="Hug Day"
      emoji="🤗"
      date="February 12, 2025"
      primaryColor="#EC4899"
      musicSrc={musicSources.hugDay}
    >
      <div className="space-y-8">
        <div className="flex justify-center">
          <CoupleSticker src={stickerHug} alt="Couple hugging" size="lg" />
        </div>

        <WishCard
          imageSrc="/Naruhina.jpg"
          imageAlt="Warm embrace"
          title="Wrapped in Love"
          message="Time will comeee jaanaaaa when I'll be able to hug you in person and hold you close, but until then, I send you virtual hugs filled with all my love and warmth. May these hugs wrap around you like a cozy blanket and remind you that I'm always here for youuuuuu <3"
          delay={0.2}
        />

        <WishCard
          imageSrc="/download (6).jpg"
          imageAlt="Cozy moment"
          title="The Perfect Comfort"
          message="Mujhe apna gharr tum mein khi mil jata h , jaaanaaaaa, with youuuu i'm at peace at home at at everywhere because youuuu are my  home. Even Your virtual hugs are the perfect comfort that makes everything better. I can't wait to hug you in person and never let go."
          delay={0.4}
        />

        <div
          className="valentine-card text-center opacity-0 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="font-cursive text-4xl text-primary mb-4">
            "I wish I could show you, when you are lonely or in darkness, the astonishing light of your own being."
          </p>
          <p className="text-muted-foreground italic">
            "I loveeeeee youuuuuuuu so so muchhhhhhhhhh mere jaanaaaaa💖"
          </p>
        </div>
      </div>
    </DayPageLayout>
  );
};

export default HugDay;
