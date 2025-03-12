import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <section>
        <header style={styles.header}>
          <nav>
            <div>
              <h3>Ngo best</h3>
            </div>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#About">about</a>
              </li>
              <li>
                <a href="#menu">menu</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    </div>
  );
};
export default Header;
