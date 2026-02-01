interface FullImageHeroSectionProp {
  image: string;
}

const FullImageHeroSection = ({ image }: FullImageHeroSectionProp) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Church worship"
      />

      <div className="absolute inset-0 bg-[var(--color-primary-dark)]/80"></div>

      <div className="relative text-center px-6 max-w-3xl">
        <h1 className="font-bold text-white uppercase tracking-[0.06em] text-6xl lg:text-7xl xl:text-8xl">
          Welcome to <br />{" "}
          <span className="text-[var(--color-accent)]">Our</span> Church
        </h1>

        <p className="text-gray-200 mt-6 text-lg">
          Join us every Sunday as we worship God <br />
          and grow together in faith.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-accent text-primaryDark px-8 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition"
          >
            Join Us Sunday
          </a>

          <a
            href="#"
            className="border border-white text-white px-8 py-3 rounded-xl text-sm font-semibold hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
          >
            Watch Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default FullImageHeroSection;
