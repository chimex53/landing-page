import styles from "./Menu.module.css";
import menu1 from "../../assets/menu1.jpg";
import menu2 from "../../assets/menu2.jpg";
import menu3 from "../../assets/menu3.jpeg";
import menu4 from "../../assets/menu4.jpg";
const Menu = () => {
  return (
    <div>
      <section id="menu">
        <div className={styles.title}>
          <h1>Menu</h1>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesItems}>
            <img src={menu1} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              labore expedita a ab alias, consequuntur similique praesentium ex
            </p>
          </div>
          <div className={styles.servicesItems}>
            <img src={menu2} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              labore expedita a ab alias, consequuntur similique praesentium ex
            </p>
          </div>
          <div className={styles.servicesItems}>
            {<img src={menu3} alt="" />}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              labore expedita a ab alias, consequuntur similique praesentium ex
            </p>
          </div>
          <div className={styles.servicesItems}>
            <img src={menu4} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              labore expedita a ab alias, consequuntur similique praesentium ex
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Menu;
