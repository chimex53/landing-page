import styles from "./Contact.module.css";
import contact1 from "../../assets/contact1.jpg";
import { useState } from "react";
import Social from "../social/Social";

const initialFormValues = {
  email: "",
  lastName: "",
  firstName: "",
  message: "",
};
const Contact = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value })); // for retaining state previous data
  };

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formValues);
    setFormValues(initialFormValues); // Optionally reset the form
  };

  return (
    <section id="contact">
      <div className={styles.ContactContainer}>
        <img src={contact1} alt="" />
        <div className={styles.formGroup}>
          <h1>contact us</h1>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              id="Fname"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleChange}
              name="firstName"
              required
            />
            <br />
            <input
              type="text"
              id="Lname"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
              name="lastName"
              required
            />
            <br />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              name="email"
              required
            />
            <br />
            <textarea
              name="message"
              id="message"
              rows={7}
              cols={30}
              placeholder="message"
              value={formValues.message}
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <button className={styles.SubmitBtn}>send message</button>
            <p> reach us on the following social media handles.</p>
            <br />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
