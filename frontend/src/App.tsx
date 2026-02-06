import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login.tsx";
import { ScrollProvider } from "./contexts/ScrollContext.tsx";
import Modal from "./components/Modal.tsx";
import ModalTextArea from "./components/ModalTextArea";
import ModalInput from "./components/ModalInput";
import Button from "./components/Button";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");

  // handlers
  const handleModalSave = async () => {};
  const handleLogin = () => {};

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

        {/* Add Suggestions Button */}
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Suggest improvements!"
        >
          <div className="flex flex-col w-full justify-left gap-5 py-2">
            <ModalInput
              value={summary}
              onChange={setSummary}
              placeholder="Write Suggestions"
              label="Summary Suggestion"
            />
            <ModalTextArea
              value={description}
              onChange={setDescription}
              placeholder="Write Task Description"
              label="Task Description"
              row={4}
            />

            <div className="self-end flex gap-4">
              <Button title="Save" handleClick={handleModalSave}></Button>
            </div>
          </div>
        </Modal>

        <Button
          className="fixed bottom-10 text-sm right-10 p-3 bg-white/50 rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,.30)] hover:cursor-pointer
          transition-all duration-150 hover:-translate-y-2 hover:shadow-[0_10px_15px_0_rgba(0,0,0,.30)"
          title="Help us improve this site →"
          handleClick={() => setIsOpen(true)}
        />
      </ScrollProvider>
    </>
  );
}

export default App;
