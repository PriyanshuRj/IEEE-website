import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import styles from "./ImportantDates.module.css"
export default function ImportantDates() {
    return (
        <>
        <div className={styles.horizontalCutText}>Important Dates</div>
        <Container>
            <Row>
                <Col className="md-12">
                    <div className={styles.YearlyTimeline}>
                        <div className={styles.timeLine}>
                            <a href="/" className={styles.timelineContent}>
                                <div className={styles.timelineIcon}><i className="bi bi-card-heading"></i></div>
                                <h3 className={styles.title}>30th September 2022</h3>
                                <p className={styles.description}>
                                    Special Session/ Workshop Proposal
                                </p>
                            </a>
                        </div>
                        <div className={styles.timeLine}>
                            <a href="/" className={styles.timelineContent}>
                                <div className={styles.timelineIcon}><i className="bi bi-pencil"></i></div>
                                <h3 className={styles.title}>31st October 2022</h3>
                                <p className={styles.description}>
                                    Regular Paper Submission
                                </p>
                            </a>
                        </div>
                        <div className={styles.timeLine}>
                            <a href="/" className={styles.timelineContent}>
                                <div className={styles.timelineIcon}><i className="bi bi-envelope"></i></div>
                                <h3 className={styles.title}>15th Feb. 2023</h3>
                                <p className={styles.description}>
                                    Paper Acceptance Date
                                </p>
                            </a>
                        </div>
                        <div className={styles.timeLine}>
                            <a href="/" className={styles.timelineContent}>
                                <div className={styles.timelineIcon}><i className="bi-camera"></i></div>
                                <h3 className={styles.title}>15th March 2023</h3>
                                <p className={styles.description}>
                                    Camera-Ready Paper Submission
                                </p>
                            </a>
                        </div>
                        <div className={styles.timeLine}>
                            <a href="/" className={styles.timelineContent}>
                                <div className={styles.timelineIcon}><i className="bi bi-pen"></i></div>
                                <h3 className={styles.title}>15th March 2022</h3>
                                <p className={styles.description}>
                                    Early Registration
                                </p>
                            </a>
                        </div>
                        <div className={styles.timeLine}>
                            <a href="/" className={styles.timelineContent}>
                                <div className={styles.timelineIcon}><i className="bi bi-pen-fill"></i></div>
                                <h3 className={styles.title}>1st April 2023</h3>
                                <p className={styles.description}>
                                    Late Registration
                                </p>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
  }