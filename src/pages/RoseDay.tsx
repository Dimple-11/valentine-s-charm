import DayPageLayout from "@/components/DayPageLayout";
import WishCard from "@/components/WishCard";
import CoupleSticker from "@/components/CoupleSticker";
import stickerRose from "@/assets/sticker-couple-rose.png";
import musicSources from "@/config/musicSources";

const RoseDay = () => {
  return (
    <DayPageLayout
      title="Lotus Day"
      emoji="🪷"
      date="February 7, 2025"
      primaryColor="#E11D48"
      musicSrc={musicSources.roseDay}>
      <div className="space-y-8">
        <div className="flex justify-center">
          <CoupleSticker src={stickerRose} alt="Couple with rose" size="lg" />
        </div>

        <WishCard
          imageSrc="/rose.jpg"
          imageAlt="Beautiful red Lotus"
          title="A Red Lotus for You"
          message="Yk jaanaaaaa what RED LOTUS Symbolize? It symbolizes unconditoinal love, compassion, passion, and the original state of the heart.JUST Like my love for youuuu <3"
          delay={0.2}
        />

        <WishCard
          imageSrc="/rose1.jpg"
          imageAlt="Garden of flowers"
          title="Forever in Bloom"
          message=" Yk jaanaaaaa babyyy you're like the cherry blossoms, when you bloom..I glow , I shine..I feel like the luckiest person aliveeee and if you're the cherry blossom then I'm the spring that makes you bloom."
          delay={0.4}
        />

        <div
          className="valentine-card text-center opacity-0 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="font-cursive text-4xl text-primary mb-4">
            "You're the most beacutiful flower I've ever seen."
          </p>
          <p className="text-muted-foreground italic">
            "I loveeeeee youuuuuuuu so so muchhhhhhhhhh mere jaanaaaaa💖"
          </p>
        </div>
      </div>
    </DayPageLayout>
  );
};

export default RoseDay;
