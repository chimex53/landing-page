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
            <div key={item.id} className={styles.menuItems}>
              {" "}
              <img src={item.Image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
