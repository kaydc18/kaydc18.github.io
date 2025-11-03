import React, { useState } from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button.jsx";

export default function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);

  const SIDEBAR_VARIANTS = {
    open: "fixed inset-y-0 left-0 w-64 translate-x-0",
    closed: "fixed inset-y-0 left-0 w-64 -translate-x-full",
  };

  const navItems = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
  ];

  const renderNavItems = () => {
    return navItems.map((item) => (
      <li key={item.name}>
        <NavLink
          to={item.href}
          onClick={() => handleToggle(false)}
          className="text-gray-900 font-family-serif text-4xl hover:border-b-4 hover:border-salmon-500"
        >
          {item.name}
        </NavLink>
      </li>
    ));
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden fixed top-1 left-1 z-20">
        <Button
          onClick={handleToggle}
          variant="primary"
          buttonIcon={faBars}
          iconLocation="center"
        />
      </div>

      <div
        className={`lg:col-span-2 col-span-12 bg-salmon-900 z-10 p-4 gap-5 flex flex-col lg:items-start lg:justify-start items-start justify-center lg:relative lg:translate-x-0
        ${isOpen ? SIDEBAR_VARIANTS.open : SIDEBAR_VARIANTS.closed} 
        transition-transform duration-300 ease-in-out`}
      >
        <div className="font-family-serif text-2xl mb-4">KDC Portfolio</div>
        <nav>
          <ul className="flex flex-col items-start justify-start gap-3">
            {renderNavItems()}
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-5"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
