import { Link, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { ScrollProvider } from "./contexts/ScrollContext.tsx";

function App() {
  const navBarItems = [
    {
      title: "Home",
      to: "/",
    },
    { title: "Who we are", to: "/who-we-are" },
    { title: "Online", to: "/online" },
    { title: "Give", to: "/give" },
  ];

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/who-we-are" },
    { path: "/online" },
    { path: "/give" },
  ];

  return (
    <>
      <ScrollProvider>
        <NavBar navBarItems={navBarItems} />

        {/* Routes */}
        <div className={`w-full z-1 overflow-hidden`}>
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}
            <Route
              path="*"
              element={
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                  <h2>Page not found</h2>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => window.history.back()}
                  >
                    Go Back
                  </button>
                </div>
              }
            />
          </Routes>
        </div>
        <Link
          to=""
          target="_blank"
          className="fixed bottom-10 text-sm right-10 p-3 rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,.30)] hover:cursor-pointer
          transition-all duration-150 hover:-translate-y-2 hover:shadow-[0_10px_15px_0_rgba(0,0,0,.30)]"
        >
          Help us improve this site →
        </Link>
      </ScrollProvider>
    </>
  );
}

export default App;
