import React from "react";
import { motion } from "framer-motion";
import styles from "./Menu.module.css";
import productMenu from "./Data";

const Menu = () => {
  return (
    <div>
      <section id="menu">
        <div className={styles.menuTitle}>
          <h1>Menu</h1>
        </div>
        <div className={styles.menuContainer}>
          {productMenu.map((item) => (
            <motion.div
              key={item.id}
              className={styles.menuItems}
              initial={{ opacity: 0, y: 30 }} // Start below and invisible
              whileInView={{ opacity: 1, y: 0 }} // Animate to visible and to original position
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: item.id * 0.1, // Add a slight delay for each item
              }}
              viewport={{ once: true }} // Only trigger the animation once when the element comes into view
            >
              <img src={item.Image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
