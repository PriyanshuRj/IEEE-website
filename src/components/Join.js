import React from "react";
import styles from "../components/Join.module.css";
export default function Join() {
    return (
<div className={styles.cardBox}>
  <h1 className={styles.heading}>Why You Should Participate?</h1>
  <ul className={styles.ulCards}>
    <li className={styles.liClass}>
      <div className={styles.icon}><i className="fa-solid fa-microphone"></i></div>
      <div className={styles.title}>Distinguished Speakers</div>
      <div className={styles.content}>Well-accomplished speakers from Industry and Academia, across all continents (Asia, America, Australia, Europe)</div>
    </li>
    <li className={styles.liClass}>
      <div className={styles.icon}><i className="fa-solid fa-users"></i></div>
      <div className={styles.title}>Theme of Industry 4.0</div>
      <div className={styles.content}>Inter-disciplinary and industry relevant theme comprising of devices, embedded, communication and computing</div>
    </li>
    <li className={styles.liClass}>
      <div className={styles.icon}><i className="fa-solid fa-bullhorn"></i></div>
      <div className={styles.title}>Global Event</div>
      <div className={styles.content}>An IEEE International Conference in India catering to Industry 4.0 and how it can shape-up next generation Indian manufacturing</div>
    </li>
    <li className={styles.liClass}>
      <div className={styles.icon}><i className="fa-solid fa-heart"></i></div>
      <div className={styles.title}>Get Inspired</div>
      <div className={styles.content}>Visit manufacturing plants in industries, develop insight of pain points & get inspired to bring in automation.</div>
    </li>
    <li className={styles.liClass}>
      <div className={styles.icon}><i className="fa-solid fa-network-wired"></i></div>
      <div className={styles.title}>Networking Session</div>
      <div className={styles.content}>Bringing together practitioners, applied researchers, faculties and students into one platform

    </div>
    </li>
    <li className={styles.liClass}>
      <div className={styles.icon}><i className="fa-solid fa-photo-film"></i></div>
      <div className={styles.title}>Meet New Faces</div>
      <div className={styles.content}>Opportunity to meet and Network with CXO's from 180+ Sricity Industries</div>
    </li>
    
  </ul>
</div>
    );
}