import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import NavBarItem from "../components/NavBarItem";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrolContext } from "../contexts/ScrollContext";

import vcaLogo from "../assets/vca-logo.png";
import vcaLogoWhite from "../assets/vca-logo-white.png";

interface NavBarItemType {
  title: string;
  to: string;
}

interface NavBarProp {
  logo?: string;
  navBarItems?: NavBarItemType[];
}

const NavBar = ({ navBarItems }: NavBarProp) => {
  const [barsOpen, setBarsOpen] = useState(false);
  const { heroVisible } = useScrolContext();

  return (
    <nav
      className={`fixed w-full h-[98px] top-0 z-50 flex justify-between items-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] px-[50px] xl:px-[150px] ${heroVisible ? "bg-transparent text-white" : "bg-white text-[var(--color-text-primary)]"}`}
    >
      <Link to="/">
        <img
          src={heroVisible ? vcaLogoWhite : vcaLogo}
          className="w-30 md:w-50"
        />
      </Link>

      {/* Sidebard for mobile */}
      <div
        className={`fixed md:hidden top-0 right-0 w-50 h-full flex flex-col text-small items-start justify-start bg-white text- gap-10 px-8 py-15
            z-999 transition-all duration-300 text-[var(--color-text-primary)] [&>a::after]:bg-[var(--color-text-primary)]
            ${barsOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none "}`}
      >
        <button onClick={() => setBarsOpen(!barsOpen)}>
          <FontAwesomeIcon
            className="absolute top-5 right-5 cursor-pointer text-[var(--color-text-primary)] hover:scale-110 transition duration-200"
            icon={faXmark}
          />
        </button>
        {navBarItems &&
          navBarItems.map((navBarItem) => (
            <NavBarItem
              key={navBarItem.title}
              title={navBarItem.title}
              to={navBarItem.to}
            />
          ))}
      </div>

      {/* Navbar Desktop */}
      <div
        className={`hidden md:flex gap-15 lg:gap-25 w-full max-w-220 grow justify-end text-normal ${heroVisible ? "[&>a::after]:bg-white" : "[&>a::after]:bg-[var(--color-text-primary)]"}`}
      >
        {navBarItems &&
          navBarItems.map((navBarItem) => (
            <NavBarItem
              key={navBarItem.title}
              title={navBarItem.title}
              to={navBarItem.to}
            />
          ))}
      </div>

      {/* Navbard Mobile */}
      <div className="w-fit flex md:hidden justify-end">
        <button onClick={() => setBarsOpen(!barsOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
