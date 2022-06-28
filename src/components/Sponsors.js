import React from 'react';
import styles from './Sponsors.module.css'
import { Container, Row, Col } from "react-bootstrap";
import ieee from '../Images/ieee-logo.png';
import sricity from '../Images/sricity-logo.png';

export default function Sponsors() {
    return (
        <section className={styles.work_company}>
        <Container>
            <Row style={{alignItems: 'center'}}>
                <div className="col-lg-5 col-md-8">
                    <div className={styles.section_tittle + " mb-50"}>
                        <h2>Conference Sponsors</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia possimus voluptas sequi odio aliquam maxime quo, doloribus iure perspiciatis illum ratione nam, incidunt est. Ab quas nam sit eos expedita!</p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className={styles.logo_area}>
                        <Row>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className={styles.single_logo + " mb-30"}>
                                    <img src={ieee} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className={styles.single_logo + " mb-30"}>
                                    <img src={sricity} alt="" />
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            </Row>
        </Container>
    </section>
    )
}