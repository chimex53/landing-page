import stew from "../../assets/stew.jpg";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.Home}>
      <section id="home">
        <div className={styles.HeroSection}>
          <div className={styles.left}>
            <img src={stew} alt="" />
          </div>
          <div className={styles.right}>
            <h1>Ngo best catering services</h1>
            <p>
              Your satisfaction is our concern book us now, We offer both indoor
              and outdoor services.
            </p>
            <button className={styles.ReadBtn}>Book now</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
