import React from "react";
import SecondaryHero from "../components/SecondaryHero";
import map from "../Images/gettinghereimages/map-1.png";
import road from "../Images/gettinghereimages/road.png";
import bus from "../Images/gettinghereimages/bus.png";
import styles from "../Styles/Gettinghere.module.css";
import train from "../Images/gettinghereimages/by-train_normal.png";
import air from "../Images/gettinghereimages/by-air_normal.png";
import { Container, Row, Col } from "react-bootstrap";
export default function Gettinghere() {
  return (
    //
    <div>
      <SecondaryHero header={"Getting here"} majorHeader={"Main"} />
      <section className={styles.home_about_section}>
        <Container>
          <Row>
            <Col lg="6" className="d-flex">
              <div
                className={styles.ha_text}
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                {/* <h2 style={{ color: "#1D619C" }}>ESDC 2023</h2> */}
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontSize: "25px",
                    lineHeight: "1.5",
                    Color: "black",
                  }}
                >
                  Sri City is very conveniently located on the National
                  Highway–16 and just 55 km north of the bustling metropolis of
                  Chennai, located on the Tamil Nadu – Andhra Pradesh border.
                  The city is about an hour’s drive from Chennai and there are
                  many options to choose from to get here.
                </p>
              </div>
            </Col>
            <Col lg="6" className="m-auto">
              <div
                className={styles.ha_pic}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                <img src={map} alt="" style={{ width: "100%" }} />
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ padding: "10px" }}></div>
        <Container>
          <Row>
            <Col lg="6" className="d-flex">
              <div
                className={styles.ha_text}
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                <h2 style={{ color: "#1D619C" }}>By Road</h2>
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontSize: "20px",
                    lineHeight: "1.5",
                    Color: "black",
                  }}
                >
                  Both from either Chennai or Tirupathi, one can hire a taxi
                  from a number of taxi aggregators to reach Sri City. The drive
                  is a pleasant one that lasts only about a couple of hours.
                </p>
              </div>
            </Col>
            <Col lg="6" className="m-auto">
              <div
                className={styles.ha_pic}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                <img src={road} alt="" style={{ width: "100%" }} />
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ padding: "10px" }}></div>
        <Container>
          <Row>
            <Col lg="6" className="m-auto">
              <div
                className={styles.ha_pic}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                <img src={bus} alt="" style={{ width: "100%" }} />
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
                {/* <h2 style={{ color: "#1D619C" }}>By Road</h2> */}
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontSize: "20px",
                    lineHeight: "1.5",
                    Color: "black",
                  }}
                >
                  Regular buses ply between Chennai and Tada with the bus stand
                  just opposite to the entrance of Sri City.
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontSize: "20px",
                    lineHeight: "1.5",
                    Color: "black",
                  }}
                >
                  The main bus terminus is in Sullurpeta and only 25 kms from
                  Sri City. Besides services by numerous private operators,
                  APSRTC also plies regular services from Chennai, Tirupathi,
                  Vijaywada, Ponneri, Sullurupeta, Thiruvallur, etc.
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontSize: "25px",
                    lineHeight: "1.5",
                    Color: "black",
                  }}
                >
                  <a
                    href="https://www.apsrtconline.in/oprs-web/guest/home.do?h=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    To book tickets, click here.
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ padding: "10px" }}></div>
        <Container>
          <Row>
            <Col lg="6" className="d-flex">
              <div
                className={styles.ha_text}
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                <h2 style={{ color: "#1D619C" }}>By Train</h2>
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontSize: "20px",
                    lineHeight: "1.3",
                    Color: "black",
                  }}
                >
                  The railhead at Tada is just 11 km from the Sri City Business
                  center. Regular trains to Chennai can be caught from here.
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontSize: "20px",
                    lineHeight: "1.3",
                    Color: "black",
                  }}
                >
                  About train services from Tada railway station.
                  <a
                    href="https://indiarailinfo.com/departures/tada-tada/6646"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click&nbsp;here.
                  </a>
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontSize: "20px",
                    lineHeight: "1.3",
                    Color: "black",
                  }}
                >
                  Express trains connecting Chennai, Bangalore, Hyderabad,
                  Kolkata and Delhi stop at Sullurpeta which is 12 km north of
                  Sri City. Trains from Mumbai halts at Renigunta, a major rail
                  junction west of Sri City.
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontSize: "20px",
                    lineHeight: "1.3",
                    Color: "black",
                  }}
                >
                  About train services from Tada railway station.
                  <a
                    href="https://www.irctc.co.in/nget/train-search"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click&nbsp;here.
                  </a>
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontSize: "20px",
                    lineHeight: "1.3",
                    Color: "black",
                  }}
                >
                  Below is a reference listing of trains that stop at Sullurpeta
                  Junction, however, for a detailed up-to-date listing.
                  <a
                    href="https://sricity.org/train-timings/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click&nbsp;here.
                  </a>
                </p>
              </div>
            </Col>
            <Col lg="6" className="m-auto">
              <div
                className={styles.ha_pic}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                <img src={train} alt="" style={{ width: "100%" }} />
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ padding: "10px" }}></div>
        <Container>
          <Row>
            <Col lg="6" className="m-auto">
              <div
                className={styles.ha_pic}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              >
                <img src={air} alt="" style={{ width: "100%" }} />
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
                <h2 style={{ color: "#1D619C" }}>By Air</h2>
                <p
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    fontSize: "20px",
                    lineHeight: "1.3",
                    Color: "black",
                  }}
                >
                  Two International airports are at an equidistance of 75 km and
                  thereby provide world-wide air connectivity. Post alighting,
                  you can hire a taxi and get to Sri City.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
