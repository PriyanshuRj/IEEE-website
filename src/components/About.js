import React from "react";
import styles from "./About.module.css";
import img1 from "../Images/h-about.jpg";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <section className={styles.home_about_section}
    

    >
      <Container>
        <Row>
          <Col lg="6" className="m-auto">
            <div className={styles.ha_pic}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
            >
              <img src={img1} alt="" style={{width:"100%"}}/>
            </div>
          </Col>
          <Col lg="6" className="d-flex">
            <div className={styles.ha_text}
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
            >
              <h2>ESDC 2023</h2>
              <p>
              The next generation of smart manufacturing, typically called Industry 4.0 deals with enhancing and upgrading the whole manufacturing processes through a combination of state-of-the-art electronic systems, devices and computing capabilities. These include: wired/wireless connected sensors, actuators, 3D printers, renewable energy-based devices, intelligent machines for computing, etc. The electronics industry has been going through a rapid evolution which in-turn requires integration of inter-disciplinary technologies such as electronics systems, new portable devices and intelligent computing, together called as Electronics Systems, devices and computing (ESDC).
              </p>
              <p>In the rapidly evolving area of industry 4.0 and electronic systems enabled smart manufacturing, the next generation of conferences not only need presentations by technologists, but also by practitioners that would create a seamless blend between academic and industrial technological activities. Through such blended conferences, the industries would be able to underpin the trends that will impact the business in the next five to ten years. This would eventually result in academia working towards developing such prototypes and solutions with increasing technology readiness level (TRL) which can be easily absorbed by the industries. 
 
 It is envisioned that the next decade would see a much higher penetration of academic activities by the industries and absorbing their requirements. Through this conference, IIIT Sri City aims to create a benchmark for industry-based research and technology conferences in India. The participants would not only involve traditional researchers and academic faculties, but also industry-based developers, technical architects, analysts and techno-managers so that they have the opportunity to interact, participate and set the tone for conference presentations and interactions. 
 
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
