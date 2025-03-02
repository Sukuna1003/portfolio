"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/closed
  };

  return (
    <header className="header">
      <div className="terminal-bar">
        <span className="terminal-buttons">
          <span className="terminal-button close"></span>
          <span className="terminal-button minimize"></span>
          <span className="terminal-button maximize"></span>
        </span>
        <span className="terminal-title">Portfolio.exe - C++ Edition</span>
      </div>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <Link href="#hero" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</Link>
        <Link href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>
      <button className="burger-button" onClick={toggleMenu} aria-label="Toggle Menu">
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>
    </header>
  );
}