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
              src="BannerPhotos/IIIT_SriCity.jpg"
              alt="First slide"
            />
            <Carousel.Caption styles={{ paddingBottom: "0" }}>
              <div className={Styles.block}>
              <h3>11th International Conference on ESDC </h3>
                <h4>(Technically co-sponsored by IEEE) </h4>
                <h4>
                  <b>
                    Jointly Organized by IIIT Sri City and London Digital Twin
                    Research Centre (UK)
                  </b>
                </h4>

                <h3>
                  Conference Date:{" "}
                  <span>
                    <b>4-6 May 2023</b>
                  </span>
                </h3>
                <h4>Theme : Cyber Physical System (Industry 4.0)</h4>

                <h4>
                  Hosted by Indian Institute of Information Technology (IIIT)
                  Sri City, India
                </h4>
                <h4>
                  <b>
                    <span>Final Deadline is 7th February</span>
                  </b>
                </h4>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className={Styles.carouseitem}>
            <img
              className={"d-block w-100 " + Styles.heroImage}
              src="/hero3.jpg"
              alt="Fourth slide"
            />

            <Carousel.Caption className={Styles.heroCaption}>
              <div className={Styles.block}>
              <h3>11th International Conference on ESDC </h3>
                <h4>(Technically co-sponsored by IEEE) </h4>
                <h4>
                  <b>
                    Jointly Organized by IIIT Sri City and London Digital Twin
                    Research Centre (UK)
                  </b>
                </h4>
                <h3>
                  Conference Date:{" "}
                  <span>
                    <b>4-6 May 2023</b>
                  </span>
                </h3>
                <h3>Theme : Cyber Physical System (Industry 4.0)</h3>


                <h4>
                  Hosted by Indian Institute of Information Technology (IIIT)
                  Sri City, India
                </h4>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.carouseitem}>
            <img
              className={"d-block w-100 " + Styles.heroImage}
              src="BannerPhotos/IIIT_SriCity_2.jpg"
              alt="Fifth slide"
            />

            <Carousel.Caption className={Styles.heroCaption}>
              <div className={Styles.block}>
              <h3>11th International Conference on ESDC </h3>
                <h4>(Technically co-sponsored by IEEE) </h4>
                <h4>
                  <b>
                    Jointly Organized by IIIT Sri City and London Digital Twin
                    Research Centre (UK)
                  </b>
                </h4>
                <h3>
                  Conference Date:{" "}
                  <span>
                    <b>4-6 May 2023</b>
                  </span>
                </h3>
                <h4>Theme : Cyber Physical System (Industry 4.0)</h4>

                <h4>
                  Hosted by Indian Institute of Information Technology (IIIT)
                  Sri City, India
                </h4>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={Styles.carouseitem}>
            <img
              className={"d-block w-100 " + Styles.heroImage}
              src="BannerPhotos/SriCity_2.jpg"
              alt="Sixth slide"
            />

            <Carousel.Caption className={Styles.heroCaption}>
              <div className={Styles.block}>
              <h3>11th International Conference on ESDC </h3>
                <h4>(Technically co-sponsored by IEEE) </h4>
                <h4>
                  <b>
                    Jointly Organized by IIIT Sri City and London Digital Twin
                    Research Centre (UK)
                  </b>
                </h4>
                <h3>
                  Conference Date:{" "}
                  <span>
                    <b>4-6 May 2023</b>
                  </span>
                </h3>
                <h3>Theme : Cyber Physical System (Industry 4.0)</h3>

                <h4>
                  Hosted by Indian Institute of Information Technology (IIIT)
                  Sri City, India
                </h4>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
