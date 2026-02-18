import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login.tsx";
import { ScrollProvider } from "./contexts/ScrollContext.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Dashboard from "./pages/Dashboard.tsx";

function App() {
  const routes = [
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
    },
    {
      path: "/who-we-are",
      element: (
        <>
          <NavBar />
          <div>Who we are</div>
        </>
      ),
    },
    {
      path: "/online",
      element: (
        <>
          <NavBar />
          <div>Online</div>
        </>
      ),
    },
    {
      path: "/give",
      element: (
        <>
          <NavBar />
          <div>Give</div>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavBar />
          <Login />
        </>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
  ];

  return (
    <>
      <ScrollProvider>
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
