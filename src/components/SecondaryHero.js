import React from "react";
import Styles from "../Styles/secondhero.module.css";
export default function Hero({ header }) {
  return (
    <section
      className={
        Styles.textOverlay +
        " " +
        Styles.bannerTwo +
        " " +
        Styles.bgBannerTwo +
        " " +
        Styles.overlayWhiteSlant
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{ zIndex: "100" }}>
            <div className={Styles.block}>
              <h1>ESDC</h1>
              <h2>Conference</h2>
              <h3>2023</h3>
              <h2>{header}</h2>
              {/* <h6>15-17 December 2022</h6> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
