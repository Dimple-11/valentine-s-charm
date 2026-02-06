import DayPageLayout from "@/components/DayPageLayout";
import WishCard from "@/components/WishCard";
import CoupleSticker from "@/components/CoupleSticker";
import stickerPromise from "@/assets/sticker-couple-promise.png";
import musicSources from "@/config/musicSources";

const PromiseDay = () => {
  return (
    <DayPageLayout
      title="Promise Day"
      emoji="🤝"
      date="February 11, 2025"
      primaryColor="#7C3AED"
      musicSrc={musicSources.promiseDay}
    >
      <div className="space-y-8">
        <div className="flex justify-center">
          <CoupleSticker src={stickerPromise} alt="Couple making promise" size="lg" />
        </div>

        <WishCard
          imageSrc="/uss1.jpg"
          imageAlt="Couple holding hands"
          title="My Promise to You"
          message="Jaanaaaaa we found each other when we never thought we would but the whole universe and even the lord himself consipered to brought us together and now that we have found each other, I promise to cherish, nuture and loveee youuu with my whole heart and soul for the rest of my life. <3."
          delay={0.2}
        />

        <WishCard
          imageSrc="/download (5).jpg"
          imageAlt="Sunset together"
          title="Forever Yours"
          message="My loveee, just know that no matter what life throws at us, whatever it is we'll face it together and I'm always there for youuuuuu no matter what. Ab aap khiye chahe jameen fatt jaye , aasmaan cheer jaye mai hamesha aapke sath hi rhungiiii and I always am  so so proudddd of youuuu jaanaaaaaa <3"
          delay={0.4}
        />

        <div
          className="valentine-card text-center opacity-0 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="font-cursive text-4xl text-primary mb-4">
            "I promise to love and cherish us forever and ever"
          </p>
          <p className="text-muted-foreground italic">
            "I loveeeeee youuuuuuuu so so muchhhhhhhhhh mere jaanaaaaa💖"
          </p>
        </div>
      </div>
    </DayPageLayout>
  );
};

export default PromiseDay;
