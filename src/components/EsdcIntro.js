import React from "react";
import styles from "./EsdcIntro.module.css";

export default function EsdcIntro() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.content}>
            <h1>ESDC 2023</h1>
            <p>
              The next generation of smart manufacturing, typically called
              Industry 4.0 deals with enhancing and upgrading the whole
              manufacturing processes through a combination of state-of-the-art
              electronic systems, devices and computing capabilities. These
              include: wired/wireless connected sensors, actuators, 3D printers,
              renewable energy-based devices, intelligent machines for
              computing, etc. The electronics industry has been going through a
              rapid evolution which in-turn requires integration of
              inter-disciplinary technologies such as electronics systems, new
              portable devices and intelligent computing, together called as
              Electronics Systems, devices and computing (ESDC).
            </p>
            <a href="/" className={styles.btn}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
