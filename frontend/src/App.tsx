import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login.tsx";
import { ScrollProvider } from "./contexts/ScrollContext.tsx";
import Suggestions from "./components/Suggestions.tsx";


function App() {

  const navBarItems = [
    {
      title: "Home",
      to: "/",
    },
    { title: "Who we are", to: "/who-we-are" },
    { title: "Online", to: "/online" },
    { title: "Give", to: "/give" },
    { title: "Login", to: "/login" },
  ];

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/who-we-are" },
    { path: "/online" },
    { path: "/give" },
    { path: "/login", element: <Login /> },
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
      </ScrollProvider>
    </>
  );
}

export default App;
