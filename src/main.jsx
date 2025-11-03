import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<div>Contact Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
