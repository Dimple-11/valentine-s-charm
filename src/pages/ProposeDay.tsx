import DayPageLayout from "@/components/DayPageLayout";
import WishCard from "@/components/WishCard";
import CoupleSticker from "@/components/CoupleSticker";
import stickerPropose from "@/assets/sticker-couple-propose.png";
import musicSources from "@/config/musicSources";

const ProposeDay = () => {
  return (
    <DayPageLayout
      title="Propose Day"
      emoji="💍"
      date="February 8, 2025"
      primaryColor="#DB2777"
      musicSrc={musicSources.proposeDay}
    >
      <div className="space-y-8">
        <div className="flex justify-center">
          <CoupleSticker src={stickerPropose} alt="Couple proposing" size="lg" />
        </div>

        <WishCard
          imageSrc="/usss.jpg"
          imageAlt="Romantic sunset scenery"
          title="Now if I were to Propose to youu💍,I'd say thisss"
          message={
              "है तेरी चाहत मेरी ज़रुरत, \n" +
              "सूनी है तुझ बिन दुनियां मेरी,\n" +
              "ना रह सकूंगा मैं दूर इनसे,\n" +
              "है मेरी जन्नत गलियां तेरी,\n\n" +
              "उम्मीद ये सीने में लेके मैं हूँ जी रहा,\n" +
              "कभी तू मिले मुझसे कहे के मैं हूँ तेरा,\n\n" +
             "Toh kya aap mere liyeee apne dil ke darwaze khol doge? <3"}

          delay={0.2}
        />

        <WishCard
          imageSrc="/literal cuties __ (momoayaseembodiment).jpg"
          imageAlt="Nature landscape"
          title="My Heart's Desire"
          message="I've been searching for the right words to say, but my heart speaks louder than words ever could. and it says that *You're Mine* for today, tomorrow, and always.💖"
          delay={0.4}
        />

        <div
          className="valentine-card text-center opacity-0 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="font-cursive text-4xl text-primary mb-4">
            "You are my sun, my moon, and all my stars."
          </p>
          <p className="text-muted-foreground italic"> "I loveeeeee youuuuuuuu so so muchhhhhhhhhh mere jaanaaaaa💖"</p>
        </div>
      </div>
    </DayPageLayout>
  );
};

export default ProposeDay;
