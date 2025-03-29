import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.Home}>
      <section id="home">
        <div className={styles.HeroSection}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <h1>Ngo best catering services</h1>
            <p>
              Your satisfaction is our concern book us now, We offer both indoor
              and outdoor services.
            </p>
            <a href="#contact">
              <button className={styles.ReadBtn}>Book now</button>{" "}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
