import { Link } from "react-router-dom";
import churchStage from "../assets/church-stage.jpg";

const InviteSection = () => {
  return (
    <section className="w-full h-fit md:h-110 xl:h-200 flex flex-col sm:flex-row gap-10 overflow-visible py-20 xl:px-15">
      <div className="w-full flex flex-col justify-center items-start px-10">
        <h1 className="text-4xl xl:text-7xl bg-[var(--color-primary)] p-3 uppercase text-white rounded-lg">
          Invite
        </h1>
        <p className="py-2 xl:text-2xl">Your loved ones to church!</p>
        <h2 className="text-4xl xl:text-6xl font-bold py-2 xl:py-4">
          Sunday Service <br /> 9AM | 1PM (Youth) | 4PM
        </h2>
        <Link
          className="text-[var(--color-primary)] py-2 xl:py-4 xl:text-2xl"
          to="https://maps.app.goo.gl/nDP8xDbypsQCcG9w9"
          target="_blank"
        >
          2/F(Above Savemore), Muzon Central Terminal, <br />
          540 M. Villarica Rd, SJDM, 3023 Bulacan
        </Link>
        <p className="xl:text-2xl xl:py-4">
          Join us at VCA Muzon and experience worship, <br />
          community, and God’s love every Sunday.
        </p>
        <Link
          to="https://maps.app.goo.gl/nDP8xDbypsQCcG9w9"
          target="_blank"
          className="text-[var(--color-primary)] font-bold my-5 py-2 px-5 border border-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary)] hover:text-white"
        >
          Get Directions
        </Link>
      </div>
      {/* Right Image */}
      <div className="hidden lg:w-full lg:flex relative overflow-visible">
        <img
          src={churchStage}
          alt="church-stage"
          className="w-[130%] max-w-none h-full object-cover -mr-[20%] rounded-xl"
        />
      </div>
    </section>
  );
};

export default InviteSection;
