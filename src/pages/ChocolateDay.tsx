import DayPageLayout from "@/components/DayPageLayout";
import WishCard from "@/components/WishCard";
import CoupleSticker from "@/components/CoupleSticker";
import stickerChocolate from "@/assets/sticker-couple-chocolate.png";
import musicSources from "@/config/musicSources";

const ChocolateDay = () => {
  return (
    <DayPageLayout
      title="Chocolate Day"
      emoji="🍫"
      date="February 9, 2025"
      primaryColor="#92400E"
      musicSrc={musicSources.chocolateDay}
    >
      <div className="space-y-8">
        <div className="flex justify-center">
          <CoupleSticker src={stickerChocolate} alt="Couple sharing chocolate" size="lg" />
        </div>

        <WishCard
          imageSrc="/jj.jpg"
          imageAlt="Delicious chocolates"
          title="Mineeee deserttt"
          message="Well..Well..Well jaanaaaaa yk you're a whole desert for meeeeeeeeeee and I justt can't wait to blend your sweetness with mineeee and melting into one perfect delicious desserttt together. <3"
          delay={0.2}
        />

        <WishCard
          imageSrc="/R.jpg"
          imageAlt="Chocolate treats"
          title="A Sweet Treat for My Sweetheart"
          message="You're my favorite break jaanaaaaa so would you like to take a break from the world and share KitKat with meeee and may I remind you that once you go chocolate, you can never go back! <3"
          delay={0.4}
        />

        <div
          className="valentine-card text-center opacity-0 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="font-cursive text-4xl text-primary mb-4">
            "You get me so highhhhhh though you ain't a drugggg, you're my chocolateeeeee."
          </p>
          <p className="text-muted-foreground italic">
            "I loveeeeee youuuuuuuu so so muchhhhhhhhhh mere jaanaaaaa💖"
          </p>
        </div>
      </div>
    </DayPageLayout>
  );
};

export default ChocolateDay;
