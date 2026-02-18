import ConfirmLogOutNavLink from "./ConfirmLogOutNavLink";
import NavBarItem from "./NavBarItem";

const SideBar = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-50 h-full flex flex-col text-small items-start justify-start bg-white text- gap-10 px-8 py-15
            z-999 transition-all duration-300 text-[var(--color-text-primary)] [&>a::after]:bg-[var(--color-text-primary)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
      >
        <ConfirmLogOutNavLink to="/login"></ConfirmLogOutNavLink>
      </div>
    </>
  );
};

export default SideBar;
