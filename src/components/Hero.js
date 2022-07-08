import React from "react";
import Styles from "../Styles/hero.module.css";
import { Carousel } from "react-bootstrap";
export default function Hero() {
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <div className={Styles.carouseitem}>
            <img
              className={"d-block w-100 " + Styles.heroImage}
              src="/hero3.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className={Styles.block}>
                <h3>
                  11th International Conference on Electronics Systems, Devices
                  and Computing
                </h3>
                <h3>2023</h3>
                <h4>
                  Hosted by Indian Institute of Information Technology (IIIT)
                  Sri City, India
                </h4>
                <h3>
                  Conference Date:{" "}
                  <span>
                    <b>4-6 May 2023</b>
                  </span>
                </h3>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.carouseitem}>
            <img
              className={"d-block w-100 " + Styles.heroImage}
              src="/hero1.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className={Styles.heroCaption}>
              <div className={Styles.block}>
                <h3>
                  11th International Conference on Electronics Systems, devices
                  and computing
                </h3>
                <h3>2023</h3>
                <h4>
                  Hosted by Indian Institute of Information Technology (IIIT)
                  Sri City, India
                </h4>
                <h3>
                  Conference Date:{" "}
                  <span>
                    <b>4-6 May 2023</b>
                  </span>
                </h3>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.carouseitem}>
            <img
              className={"d-block w-100 " + Styles.heroImage}
              src="/hero2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className={Styles.heroCaption}>
              <div className={Styles.block}>
                <h3>
                  11th International Conference on Electronics Systems, devices
                  and computing
                </h3>
                <h3>2023</h3>
                <h4>
                  Hosted by Indian Institute of Information Technology (IIIT)
                  Sri City, India
                </h4>
                <h3>
                  Conference Date:{" "}
                  <span>
                    <b>4-6 May 2023</b>
                  </span>
                </h3>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.carouseitem}>
            <img
              className={"d-block w-100 " + Styles.heroImage}
              src="BannerPhotos/IIIT_Sricity.jpg"
              alt="Fourth slide"
            />

            <Carousel.Caption className={Styles.heroCaption}>
              <div className={Styles.block}>
                <h3>
                  11th International Conference on Electronics Systems, devices
                  and computing
                </h3>
                <h3>2023</h3>
                <h4>
                  Hosted by Indian Institute of Information Technology (IIIT)
                  Sri City, India
                </h4>
                <h3>
                  Conference Date:{" "}
                  <span>
                    <b>4-6 May 2023</b>
                  </span>
                </h3>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.carouseitem}>
            <img
              className={"d-block w-100 " + Styles.heroImage}
              src="BannerPhotos/IIIT_Sricity_2.jpg"
              alt="Fifth slide"
            />

            <Carousel.Caption className={Styles.heroCaption}>
              <div className={Styles.block}>
                <h3>
                  11th International Conference on Electronics Systems, devices
                  and computing
                </h3>
                <h3>2023</h3>
                <h4>
                  Hosted by Indian Institute of Information Technology (IIIT)
                  Sri City, India
                </h4>
                <h3>
                  Conference Date:{" "}
                  <span>
                    <b>4-6 May 2023</b>
                  </span>
                </h3>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.carouseitem}>
            <img
              className={"d-block w-100 " + Styles.heroImage}
              src="BannerPhotos/Sricity_2.jpg"
              alt="Sixth slide"
            />

            <Carousel.Caption className={Styles.heroCaption}>
              <div className={Styles.block}>
                <h3>
                  11th International Conference on Electronics Systems, devices
                  and computing
                </h3>
                <h3>2023</h3>
                <h4>
                  Hosted by Indian Institute of Information Technology (IIIT)
                  Sri City, India
                </h4>
                <h3>
                  Conference Date:{" "}
                  <span>
                    <b>4-6 May 2023</b>
                  </span>
                </h3>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
