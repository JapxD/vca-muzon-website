import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <BrowserRouter basename="/vca-muzon-website"> Needed only when deploying to github pages  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
