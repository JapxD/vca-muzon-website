import FullImageHeroSection from "../sections/FullImageHeroSection";
import InviteSection from "../sections/InviteSection";
import JoinSection from "../sections/JoinSection";
import ShareSection from "../sections/ShareSection";

const Home = () => {
  return (
    <div className="w-full">
      <FullImageHeroSection />
      <InviteSection />
      <ShareSection />
      <JoinSection />
    </div>
  );
};

export default Home;
