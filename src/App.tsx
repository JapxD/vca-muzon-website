import NavBar from "./components/NavBar";
import NavBarItem from "./components/NavBarItem";
import vcaLogo from "./assets/vca-logo.png";

function App() {
  const wholePadding = 24;
  const navBarItems = [
    {
      title: "Home",
      to: "/",
    },
    { title: "Who we are", to: "/who-we-are" },
    { title: "Online", to: "/online" },
    { title: "Give", to: "/give" },
  ];

  return (
    <>
      <NavBar padding={wholePadding}>
        <img src={vcaLogo} className="w-50" />
        <div className="w-fit flex justify-end gap-25">
          {navBarItems.map((navBarItem) => (
            <NavBarItem
              key={navBarItem.title}
              title={navBarItem.title}
              to={navBarItem.to}
            />
          ))}
        </div>
      </NavBar>
      <div className={`w-full px-${wholePadding} z-1`}></div>
    </>
  );
}

export default App;
