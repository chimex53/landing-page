import about from "../../assets/about.jpg";
import styles from "./About.module.css";
const About = () => {
  return (
    <div>
      <section id="About">
        <div className={styles.About}>
          <div className={styles.AboutContent}>
            <h1>about us</h1>
            <p id={styles.AboutText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              doloribus blanditiis perferendis consectetur, cupiditate tenetur
              saepe dolores quae! Numquam reprehenderit possimus reiciendis
              error praesentium harum sed nam, assumenda repellat molestias!
              Amet veniam expedita recusandae sint consequuntur quasi soluta.
              Sapiente rem alias, modi, quidem quis ea laborum deleniti, natus
              repudiandae eaque iusto illo neque vitae ratione iure aperiam
              numquam et sint!
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
