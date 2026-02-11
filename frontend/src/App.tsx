import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login.tsx";
import { ScrollProvider } from "./contexts/ScrollContext.tsx";
import Modal from "./components/Modal.tsx";
import ModalTextArea from "./components/ModalTextArea";
import ModalInput from "./components/ModalInput";
import Button from "./components/Button";
import { suggestionSchema } from "./schemas/suggestionsSchema.ts";
import { submitSuggestion } from "./services/jiraApi.ts";
import Spinner from "./components/Spinner.tsx";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ summary?: string; description?: string }>({});
  const [modalLoading, setModalLoading] = useState(false);


  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    } // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle modal save with validation
  const handleModalSave = async () => {
    setMessage("");
    const result = suggestionSchema.safeParse({ summary, description });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setMessage("❌ Invalid input. Please check the fields.");
    } else {

      try {
        setModalLoading(true);
        await submitSuggestion(summary, description)
          .then(({message: jiraMessage}) => {
            setMessage(`✅ ${jiraMessage}`);
          });
        
      setSummary("");
      setDescription("");
      } catch (error: any) {
        setMessage(`❌ Failed to submit suggestion: ${error.message}`);
      }finally {
        setErrors({});
        setModalLoading(false);
      }
      
    }
  };

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
              label="Suggestion"
              message={errors.summary}
            />
            <ModalTextArea
              value={description}
              onChange={setDescription}
              placeholder="Write Description"
              label="Description"
              row={4}
              message={errors.description}
            />
            <div className="self-end flex gap-4">
              {modalLoading && <Spinner />}
              <p className="self-center">{message}</p>
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
