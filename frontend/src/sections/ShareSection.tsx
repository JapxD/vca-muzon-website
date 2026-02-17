import LatestSermon from "../components/LatestSermon";
import Socials from "../components/Socials";

const ShareSection = () => {
  return (
    <section className="w-full h-fit md:h-110 md:h-100 xl:h-150 flex flex-col sm:flex-row gap-10 overflow-visible xl:px-15 bg-[var(--color-primary)] text-white py-10 md:py-0   ">
      {/* Left Image */}
      <div className="hidden w-full lg:flex justify-center self-center md:h-[50%] 2xl:h-[70%]">
        <LatestSermon />
      </div>

      <div className="w-full flex flex-col justify-center items-end px-10">
        <h1 className="text-4xl xl:text-7xl border border-[var(--color-accent)] bg-[var(--color-accent)] p-3 uppercase rounded-lg text-[var(--color-primary)]">
          Share
        </h1>
        <p className="py-2 xl:text-2xl">Our social media posts!</p>
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold py-2 xl:py-4 text-right">
          Follow us on Facebook, <br /> Instagram and Youtube!
        </h2>
        <div className="text-sm xl:text-xl hover:">
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default ShareSection;
