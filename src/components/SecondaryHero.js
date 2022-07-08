import React from "react";
import Styles from "../Styles/secondhero.module.css";
export default function Hero({ majorHeader,header }) {
  return (
    <section
      className={Styles.bgBanner }
    >
      <div >
        <h1 className={Styles.secondaryHeader}>
        {majorHeader} / <span className={Styles.secondaryHeaderMain}>{header} </span>
        </h1>

      </div>



    </section>
  );
}
