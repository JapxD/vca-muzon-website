import { Link } from "react-router-dom";

interface HeroSectionProp {
  heading?: string;
  paragraph?: string;
  cta?: string;
  image?: string;
  onClick?: () => void;
}

const HeroSection = ({
  heading,
  paragraph,
  cta,
  image,
  onClick,
}: HeroSectionProp) => {
  return (
    <section className="w-full h-fit md:h-110 lg:h-150 flex flex-col sm:flex-row gap-10 overflow-visible py-3">
      <div className="w-fit flex flex-col items-start gap-5 md:gap-6 xl:gap-11">
        {/* Manually add heading */}
        <h1 className="font-bold uppercase tracking-[0.06em] text-5xl leading-14 md:text-6xl md:leading-17 lg:text-7xl lg:leading-20 xl:text-8xl xl:leading-27">
          Welcome to <br /> <span className="text-red-500">Our</span> Church
        </h1>

        {/* Manually add paragraph */}
        <p className="font-normal w-[30ch] md:w-[35ch] lg:w-[50ch] xl:w-[50ch] xl:text-2xl">
          {paragraph}
        </p>

        <Link
          to="https://maps.app.goo.gl/eL4TYX7HdofhKEkE7"
          target="_blank"
          className="font-semibold w-fit p-3 xl:px-8 xl:py-5 rounded-xl border border-1 shadow-[0_4px_4px_0_rgba(0,0,0,.30)] xl:text-2xl hover:cursor-pointer
          transition-all duration-150 hover:-translate-y-2 hover:shadow-[0_10px_15px_0_rgba(0,0,0,.30)]"
        >
          {cta}
        </Link>
      </div>

      {/* Right Image */}
      <div className="w-full flex relative overflow-visible">
        {image && (
          <img
            src={image}
            alt="Hero"
            className="w-[130%] max-w-none h-full object-cover -mr-[20%] rounded-xl shadow-[-4px_4px_4px_0_rgba(0,0,0,.25)]"
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
