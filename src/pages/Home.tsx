import FullImageHeroSection from "../sections/FullImageHeroSection";
import blessedToBless from "../assets/blessed-to-bless.jpg";
import InviteSection from "../sections/InviteSection";

const Home = () => {
  return (
    <div className="w-full">
      <FullImageHeroSection image={blessedToBless} />
      <InviteSection />
    </div>
  );
};

export default Home;
