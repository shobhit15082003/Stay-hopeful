import React from "react";
import ThemeToggle from "../Theme/ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>SQL Query Editor</h1>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
