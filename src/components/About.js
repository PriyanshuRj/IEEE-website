import React from "react";
import styles from "./About.module.css";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <section className={styles.home_about_section}>
      <Container>
        <div className={styles.deadline}>
        <h2>
            <p
              style={{ fontWeight: "400", fontSize: "30px", color: "#ED4848" }}
            >
              <br />
              Last date of submission is over on 7th February.
             
            </p>
          </h2>
          <h2>
            <p
              style={{ fontWeight: "400", fontSize: "35px", color: "#ED4848" }}
            >
              <br />
              The 1st round of paper results will be sent to authors by 16th
              March 2023 and the second round results will be sent to authors
              by 20th March 2023
            </p>
          </h2>
          <h2>
            <p
              style={{ fontWeight: "300", fontSize: "30px", color: "#ED4848" }}
            >
              If you have any questions, please contact Conference Support
              Coordinator, Mr. Mahesh at <b>+91&nbsp;95023 82814</b>
            </p>
          </h2>
        </div>

        <Row>
          <Col lg="6" className="m-auto">
            <div
              className={styles.ha_pic}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
            >
              <img
                src="BannerPhotos/industry4.0.jpeg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </Col>
          <Col lg="6" className="d-flex">
            <div
              className={styles.ha_text}
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
            >
              <h2 style={{ color: "#1D619C" }}>ESDC 2023</h2>
              <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                The next generation of smart manufacturing, typically called
                Industry 4.0 deals with enhancing and upgrading the whole
                manufacturing process through a combination of state-of-the-art
                electronic systems, devices, and computing capabilities. These
                include wired/wireless connected sensors, actuators, 3D
                printers, renewable energy-based devices, intelligent machines
                for computing, etc. The electronics industry has been going
                through a rapid evolution which in turn requires the integration
                of inter-disciplinary technologies such as electronics systems,
                new portable devices, and intelligent computing together called
                Electronics Systems, devices, and computing (ESDC).
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
