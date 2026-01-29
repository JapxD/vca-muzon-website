import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavBarItem from "../components/NavBarItem";
import { useState } from "react";

interface NavBarItemType {
  title: string;
  to: string;
}

interface NavBarProp {
  logo?: string;
  navBarItems?: NavBarItemType[];
}

const NavBar = ({ logo, navBarItems }: NavBarProp) => {
  const [barsOpen, setBarsOpen] = useState(false);

  return (
    <nav
      className="relative w-full h-[98px] top-0 z-50 flex justify-between items-center
            sticky shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white px-[50px] xl:px-[200px]"
    >
      <Link to="/">
        <img src={logo} className="w-30 md:w-50" />
      </Link>

      {/* Sidebard for mobile */}
      <div
        className={`fixed md:hidden top-[98px] right-0 w-60 h-60 bg-white flex flex-col text-small items-start justify-evenly p-5 
            shadow-[-4px_4px_4px_0_rgba(0,0,0,0.25)] z-index-999 transition-all duration-300 
            ${barsOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none "}`}
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

      {/* Navbar Desktop */}
      <div className="hidden md:flex gap-15 lg:gap-25 w-full max-w-220 grow justify-end text-normal">
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
