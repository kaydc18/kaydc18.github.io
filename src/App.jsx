import React from "react";
import "./App.css";
import SidebarNav from "./components/SidebarNav.jsx";
import Button from "./components/Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      <SidebarNav />
      <main className="lg:col-span-10 col-span-12 bg-salmon-100 overflow-y-auto">
        <div className="mx-auto max-w-5xl h-6 lg:mb-14 mb-1 flex justify-end items-center gap-4 p-2">
          <Button
            variant="secondary"
            buttonText="click here for github profile"
            buttonIcon={faGithub}
            iconLocation="center"
            onClick={() => window.open("https://github.com/kaydc18", "_blank")}
          />
          <Button
            variant="secondary"
            buttonText="click here for linkedin profile"
            buttonIcon={faLinkedin}
            iconLocation="center"
            onClick={() =>
              window.open("https://www.linkedin.com/in/kdiciaccio/", "_blank")
            }
          />
          <Button
            variant="secondary"
            buttonText="download resume"
            buttonIcon={faFileArrowDown}
            iconLocation="center"
            onClick={() =>
              window.open("/Kaylyn_DiCiaccio_Resume_2025.pdf", "_blank")
            }
          />
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
