import FullImageHeroSection from "../components/FullImageHeroSection";
import blessedToBless from "../assets/blessed-to-bless.jpg";
import blaze from "../assets/blaze.jpg";

const Home = () => {
  const paragraph =
    "We’re a church family that loves God and loves people. Wherever you are in life, you’re welcome here. Come worship with us and find a place to belong.";
  const cta = "Get Directions";

  return (
    <div className="w-full">
      <FullImageHeroSection image={blessedToBless} />
    </div>
  );
};

export default Home;
