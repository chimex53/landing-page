import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the state on hamburger click
  };

  return (
    <header className={styles.header}>
      <nav aria-label="Main Navigation">
        <div>
          <h3>Ngo Best</h3>
        </div>
        {/* Hamburger Icon for mobile */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        {/* Menu Links */}
        <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
