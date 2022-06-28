import React from 'react';
import styles from './Footer.module.css';
import img from "../Images/ieee-logo.png";
import {Container, Row, Col} from "react-bootstrap";

export default function Footer() {
  return (
    <section className={styles.footer_section}>
        <Container>
            <Row>
                <Col lg="12">
                    <div className={styles.footer_text}>
                        <div className={styles.ft_logo}>
                            <a href="#" className={styles.footer_logo}><img src={img} alt="" / ></a>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Authors</a></li>
                            <li><a href="#">Sponsors</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className={styles.ft_social}>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
