import type { NextPage } from "next";
import styles from "./index.module.css";

const Myportfolio: NextPage = () => {
  return (
    <div className={styles.myportfolio}>
      <div className={styles.about}>ABOUT</div>
      <div className={styles.michaelBBaariaContainer}>
        <p className={styles.michaelBBaaria}>MICHAEL B. BAÑARIA</p>
        <p className={styles.softwareDeveloper}>Software Developer/ICT Teacher</p>
      </div>
      <div className={styles.project}>PROJECT</div>
      <div className={styles.contact}>CONTACT</div>
      <div className={styles.experience}>EXPERIENCE</div>
      <img className={styles.icons} alt="" src="/icons.svg" />
      <img className={styles.mypictureIcon} alt="" src="/m1ch93l.jpg" />
      <div className={styles.main} />
      <div className={styles.phpDeveloperContainer}>
        <p className={styles.michaelBBaaria}>
          <span className={styles.php}>
            <span className={styles.php1}>PHP</span>
            <span className={styles.span}>{` `}</span>
          </span>
          <span>
            <span>Developer</span>
          </span>
        </p>
        <p className={styles.ictInstructor}>
          <span>
            <span className={styles.span1}>{` `}</span>
          </span>
          <span>
            <span className={styles.span1}>{`/ `}</span>
            <span className={styles.ict}>ICT</span>
            <span> Instructor</span>
          </span>
        </p>
      </div>
      <div className={styles.a26YearsContainer}>
        <span>{`A 26 years old `}</span>
        <b>developer</b>
        <span> since batch 2022</span>
      </div>
      <div className={styles.button}>
        <img className={styles.buttonChild} alt="" src="/rectangle-5.svg" />
        <div className={styles.setUpA}>SET UP A MEETING</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.myportfolioChild} />
      <div className={styles.myportfolioItem} />
      <div className={styles.myportfolioInner} />
    </div>
  );
};

export default Myportfolio;
