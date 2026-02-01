import FullImageHeroSection from "../components/FullImageHeroSection";
import blessedToBless from "../assets/blessed-to-bless.jpg";

const Home = () => {
  return (
    <div className="w-full">
      <FullImageHeroSection image={blessedToBless} />
    </div>
  );
};

export default Home;
