import styles from "./Services.module.css";

const Services = () => {
  return (
    <section id="services">
      <div className={styles.servicesTitle}>
        <h1>OUR CATERING SERVICES</h1>
      </div>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesItems}>
          <h3>Event Catering</h3>
          <p>
            Whether it's a birthday party, a corporate gathering, or a holiday
            celebration, we offer tailored event catering services that meet
            your needs. Our team will ensure that your guests enjoy delicious,
            fresh, and beautifully presented food.
          </p>
        </div>
        <div className={styles.servicesItems}>
          <h3>Wedding Catering</h3>
          <p>
            Make your big day even more memorable with our exquisite wedding
            catering. We provide a wide variety of dishes to suit your tastes,
            with elegant setups and impeccable service to make your wedding day
            perfect.
          </p>
        </div>
        <div className={styles.servicesItems}>
          <h3>Corporate Catering</h3>
          <p>
            From team lunches to large corporate events, we specialize in
            providing efficient and delicious corporate catering. Our
            customizable menu options are designed to impress your clients and
            employees, ensuring your event runs smoothly.
          </p>
        </div>
        <div className={styles.servicesItems}>
          <h3>Private Parties Catering</h3>
          <p>
            Whether it's a small intimate dinner or a large private celebration,
            we offer bespoke catering services that add a touch of luxury to
            your event. Our chefs will craft a menu that fits the style and
            theme of your party.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
