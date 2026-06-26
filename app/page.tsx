import Header from "./Header";
import HeroSlider from "./HeroSlider";
import styles from "./page.module.css";

const features = [
  {
    title: "Culture",
    text: "We preserve and share Khmer traditions through dance, festivals, workshops, and community storytelling.",
  },
  {
    title: "Food",
    text: "Cooking classes and food gatherings bring people together around Cambodian flavors, hospitality, and family recipes.",
  },
  {
    title: "Tourism",
    text: "We introduce Cambodia as a destination of history, nature, temples, and warm connections between people.",
  },
];

const programs = [
  "Khmer traditional dance training and performances",
  "Cambodian cooking classes for families, friends, and partners",
  "Czech language support for integration and everyday life",
];

const actions = ["Volunteer", "Partner", "Donate"];

export default function Home() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroGrid} id="top">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>CAMBODIAN ASSOCIATION, Z.S.</p>
            <h1>Cambodian Association in the Czech Republic</h1>
            <p className={styles.heroText}>
              We connect Cambodian and Czech communities through culture, food,
              tourism, education, and practical support for people building a
              life in Prague and beyond.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#cta">
                Get involved
              </a>
              <a className={styles.secondaryButton} href="#programs">
                Explore programs
              </a>
            </div>
          </div>

          <div className={styles.heroCard} aria-label="Association photo highlights">
            <HeroSlider />
          </div>
        </div>
      </section>

      <section className={styles.mission} aria-labelledby="mission-title">
        <p className={styles.sectionKicker}>Our mission</p>
        <h2 id="mission-title">
          Building bridges through Cambodian culture, food, tourism, and
          community connection.
        </h2>
        <p>
          The Cambodian Association, z. s. supports community life in Prague,
          celebrates Khmer heritage, and creates opportunities for Czech and
          Cambodian people to meet, learn, and work together.
        </p>
      </section>

      <section className={styles.features} aria-label="Association focus areas">
        {features.map((feature, index) => (
          <article className={styles.featureCard} key={feature.title}>
            <div className={styles.featureVisual} aria-hidden="true" />
            <span className={styles.cardNumber}>0{index + 1}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.programs} id="programs">
        <div>
          <p className={styles.sectionKicker}>Current programs</p>
          <h2>Practical support and living traditions</h2>
        </div>
        <div className={styles.programList}>
          {programs.map((program) => (
            <article className={styles.programItem} key={program}>
              <span aria-hidden="true" />
              <p>{program}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.events} id="events">
        <div className={styles.eventsText}>
          <p className={styles.sectionKicker}>Events highlight</p>
          <h2>Embassy Festival and cultural gatherings</h2>
          <p>
            We represent Cambodian culture at public events, embassy and city
            gatherings, community celebrations, dance performances, cooking
            workshops, and informal meetups across Prague.
          </p>
        </div>
        <div className={styles.eventBadge}>
          <span>Next focus</span>
          <strong>Share Cambodia with Czechia</strong>
        </div>
      </section>

      <section className={styles.cta} id="cta">
        <p className={styles.sectionKicker}>How you can help</p>
        <h2>Join us in building bridges between Cambodian and Czech communities.</h2>
        <div className={styles.actionGrid}>
          {actions.map((action) => (
            <a href="#contact" key={action}>
              {action}
            </a>
          ))}
        </div>
      </section>

      <footer className={styles.footer} id="contact">
        <div>
          <p className={styles.footerBrand}>Cambodian Association, z. s.</p>
          <p>Pod strani 2161/21, Strasnice, Praha 10, 100 00, Czech Republic</p>
        </div>
        <address>
          <a href="tel:+420730176456">+420 730 176 456</a>
          <a href="mailto:cambodianspolek@gmail.com">cambodianspolek@gmail.com</a>
        </address>
      </footer>
    </main>
  );
}
