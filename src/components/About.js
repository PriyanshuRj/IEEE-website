import React from "react";
import styles from "./About.module.css";
import img1 from "../Images/h-about.jpg";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <section className={styles.home_about_section}>
      <Container>
        <Row>
          <Col lg="6">
            <div className={styles.ha_pic}>
              <img src={img1} alt="" />
            </div>
          </Col>
          <Col lg="6">
            <div className={styles.ha_text}>
              <h2>About Conference</h2>
              <p>
                The next generation of smart manufacturing, typically called
                Industry 4.0 deals with enhancing and upgrading the whole
                manufacturing processes through a combination of
                state-of-the-art electronic systems, devices and computing
                capabilities. These include: wired/wireless connected sensors,
                actuators, 3D printers, renewable energy-based devices,
                intelligent machines for computing, etc. The electronics
                industry has been going through a rapid evolution which in-turn
                requires integration of inter-disciplinary technologies such as
                electronics systems, new portable devices and intelligent
                computing, together called as Electronics Systems, devices and
                computing (ESDC).
              </p>
              {/* <ul>
                <li>
                  <span className="icon_check"></span> Write On Your Business Card
                </li>
                <li>
                  <span className="icon_check"></span> Advertising Outdoors
                </li>
                <li>
                  <span className="icon_check"></span> Effective Advertising
                  Pointers
                </li>
                <li>
                  <span className="icon_check"></span> Kook 2 Directory Add Url Free
                </li>
              </ul> */}
              <a href="#" className={styles.ha_btn}>
                Discover Now
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
