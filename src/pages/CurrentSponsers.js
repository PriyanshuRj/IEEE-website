import React from "react";
import styles from "../Styles/CurrentSponsers.module.css";
import SecondaryHero from "../components/SecondaryHero";
export default function CurrentSponsers() {
  return (
    <div>
      <SecondaryHero header={"Current Sponsers"} majorHeader={"Sponsers"} />

      <figure className="text-center">
        <h1 className={styles.SponsersText}>
          <strong>Thank you to our sponsers for their support!</strong>
        </h1>
      </figure>
      <div class="text-center">
        <p className={styles.SponsersHeaderText}>
          British Council (Exploratory Scheme)
        </p>
        <img
          src="BannerPhotos/british-council.png"
          class="rounded"
          alt="British-council-logo"
        />
      </div>
      <div class="text-center">
        <img src="BannerPhotos/ieee-logo.png" class="rounded" alt="IEEE-logo" />
      </div>
      <div class="text-center">
        <img
          src="BannerPhotos/sricity-logo.png"
          class="rounded"
          alt="Sricity-logo"
        />
      </div>
      <div style={{ paddingBottom: "3.8125rem" }}></div>
    </div>
  );
}
