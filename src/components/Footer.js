import React from "react";
import styles from "./Footer.module.css";

import sricity from "../Images/IIITSricity.jpg";
import london from "../Images/London.jpg";

import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
    <section className={styles.footer_section}>
      <Container>
        <Row>
          <Col lg="12">
          
            <div className={styles.footer_text}>
            {/* <div className={styles.horizontalCutText}>Jointly Organized by </div> */}
            <div className="col-lg-12">
            <div className={styles.logo_area}>
              <Row>
              <div className="col-xs-6 col-md-3 col-sm-1">
                  <div className={styles.ft_logo + " mb-10" + {display : "right"}}>
                    <a href="#" className={styles.footer_logo}>
                    
                    </a>
                  </div>
                </div>
                <div className="col-xs-6 col-md-3 col-sm-1">
                  <div className={styles.ft_logo + " mb-10" + {display : "right"}}>
                    <a href="#" className={styles.footer_logo}>
                    <img src={sricity} alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xs-6 col-md-3 col-sm-1">
                  <div className={styles.ft_logo + " mb-10" + {display : "left"}}>
                  <a href="#" className={styles.footer_logo}>
                    <img src={london} alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xs-6 col-md-3 col-sm-1">
                  <div className={styles.ft_logo + " mb-10" + {display : "right"}}>
                    <a href="#" className={styles.footer_logo}>
                    
                    </a>
                  </div>
                </div>
              </Row>
            </div>
          </div>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/author">Authors</a>
                </li>
                <li>
                  <a href="/callforpapers">Call For Papers</a>
                </li>
                <li>
                  <a href="/gettinghere">Getting Here</a>
                </li>
                <li>
                  <a href="/registration">Registration</a>
                </li>
              </ul>
              {/* <div className={styles.ft_social}>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
}
