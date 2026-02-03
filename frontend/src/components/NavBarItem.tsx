import { NavLink } from "react-router-dom";

interface NavBarItemProp {
  title: string;
  to: string;
}

const NavBarItem = ({ title, to }: NavBarItemProp) => {
  return (
    <NavLink
      className={({
        isActive,
      }) => `relative font-semibold uppercase tracking-[0.04em] transition-scale duration-300 hover:-translate-y-1
        after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300
    ${isActive ? "after:w-full after:opacity-100" : "after:w-0 after:opacity-0"}
`}
      to={to}
    >
      {title}
    </NavLink>
  );
};

export default NavBarItem;
