import React from "react";
import Styles from "../Styles/hero.module.css";
import { Carousel } from "react-bootstrap";
export default function Hero() {
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img
            className={"d-block w-100 " + Styles.heroImage}
            src="/hero3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className={Styles.block}>
              <h1>IEEE</h1>
              <h2>Conference</h2>
              <h3>2022</h3>
              <h5>
                Hosted by Indian Institute of Information Technology (IIIT) Sri
                City, India
              </h5>
              <h6>15-17 December 2022</h6>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={"d-block w-100 " + Styles.heroImage}
            src="/hero1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className={Styles.heroCaption}>
          <div className={Styles.block}>
              <h1>IEEE</h1>
              <h2>Conference</h2>
              <h3>2022</h3>
              <h5>
                Hosted by Indian Institute of Information Technology (IIIT) Sri
                City, India
              </h5>
              <h6>15-17 December 2022</h6>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={"d-block w-100 " + Styles.heroImage}
            src="/hero2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className={Styles.heroCaption}>
          <div className={Styles.block}>
              <h1>IEEE</h1>
              <h2>Conference</h2>
              <h3>2022</h3>
              <h5>
                Hosted by Indian Institute of Information Technology (IIIT) Sri
                City, India
              </h5>
              <h6>15-17 December 2022</h6>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
