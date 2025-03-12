import facebook from "../../assets/facebook.png";
import Github from "../../assets/Github.png";
import x from "../../assets/x.png";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import linkedln from "../../assets/linkedln.png";
import contact1 from "../../assets/contact1.jpg";
import styles from "./Contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("ugwu");
  return (
    <section id="contact">
      <div className={styles.ContactContainer}>
        <img src={contact1} alt="" />
        <div className={styles.formGroup}>
          <h1>contact us</h1>

          <form action="">
            <input
              type="text"
              id="name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <input type="text" id="name" placeholder="Last Name" />
            <br />

            <input type="email" id="name" placeholder="Email" />
            <br />

            <input type="number" id="name" placeholder="Phone Number" />
            <br />

            <textarea
              name=""
              id=""
              rows={7}
              cols={30}
              placeholder="Comment"
            ></textarea>
            <br />
            <button className={styles.SubmitBtn}>submit</button>
            <p> reach us on the following social media handles.</p>
            <br />
            <div className={styles.socialIcons}>
              <img src={facebook} alt="" />
              <img src={Github} alt="" />
              <img src={x} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedln} alt="" />
              <img src={whatsapp} alt="" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
