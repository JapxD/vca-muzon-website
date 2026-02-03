import FullImageHeroSection from "../sections/FullImageHeroSection";
import blessedToBless from "../assets/blessed-to-bless.jpg";
import InviteSection from "../sections/InviteSection";
import ShareSection from "../sections/ShareSection";

const Home = () => {
  return (
    <div className="w-full">
      <FullImageHeroSection image={blessedToBless} />
      <InviteSection />
      <ShareSection />
    </div>
  );
};

export default Home;
