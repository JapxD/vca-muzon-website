import { Link, useLocation } from "react-router-dom";

interface NavBarItemProp {
  title: string;
  to: string;
}

const NavBarItem = ({ title, to }: NavBarItemProp) => {
  const location = useLocation(); // get current path
  const isActive = location.pathname === to;

  return (
    <Link
      className={`relative text-neutral-800 font-semibold uppercase tracking-[0.04em] transition-scale duration-300 hover:-translate-y-1
        after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-neutral-800 after:transition-all after:duration-300
    ${isActive ? "after:w-full after:opacity-100" : "after:w-0 after:opacity-0"}
`}
      to={to}
    >
      {title}
    </Link>
  );
};

export default NavBarItem;
