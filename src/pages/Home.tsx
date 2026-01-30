import HeroSection from "../components/HeroSection";
import womenHappy from "../assets/women-happy.jpg";

const Home = () => {
  const paragraph =
    "We’re a church family that loves God and cares about people. No matter where you are in life, you’re welcome here. Come worship with us, meet new friends, and feel at home from your very first visit.";
  const cta = "Get Directions";

  return (
    <div className="w-full mt-10">
      <HeroSection paragraph={paragraph} image={womenHappy} cta={cta} />
    </div>
  );
};

export default Home;
