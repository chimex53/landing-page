import about from "../../assets/about.jpg";
import styles from "./About.module.css";
const About = () => {
  return (
    <div>
      <section id="about">
        <div className={styles.About}>
          <div className={styles.AboutContent}>
            <h1>about us</h1>
            <p id={styles.AboutText}>
              Welcome to Ngo Best Catering! We specialize in creating memorable
              dining experiences with delicious, customized menus for any
              occasion. Whether it's a wedding, corporate event, or intimate
              gathering, our talented chefs use only the freshest ingredients to
              deliver exceptional food, while our dedicated team ensures
              top-notch service. At Ngo Best Catering, we believe food should be
              an experience, and we’re here to make yours unforgettable.
            </p>
          </div>
          <div className={styles.AboutImage}>
            <img src={about} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
