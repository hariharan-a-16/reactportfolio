import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>

      <ul className="nav-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
