interface NavBarProp {
  children: React.ReactNode;
  padding?: number;
}

const NavBar = ({ children, padding }: NavBarProp) => {
  return (
    <>
      <nav
        className={`w-full h-[98px] top-0 z-50 flex justify-between items-center
            sticky shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white px-${padding ? padding : 0}`}
      >
        {children}
      </nav>
    </>
  );
};

export default NavBar;
