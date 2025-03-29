import Social from "../social/Social";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        <p id={styles.footerTxt}>copyright &copy; Ngo best 2025</p>

        <Social />
      </footer>
    </div>
  );
};
export default Footer;
