import facebook from "../../assets/facebook.png";
import Github from "../../assets/Github.png";
import x from "../../assets/x.png";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import linkedln from "../../assets/linkedln.png";
import styles from "./Social.module.css";
const Social = () => {
  return (
    <div>
      <div className={styles.socialIcons}>
        <img src={facebook} alt="" />
        <img src={Github} alt="" />
        <img src={x} alt="" />
        <img src={instagram} alt="" />
        <img src={linkedln} alt="" />
        <img src={whatsapp} alt="" />
      </div>
    </div>
  );
};
export default Social;
