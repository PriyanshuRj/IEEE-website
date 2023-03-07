import React from "react";
import SecondaryHero from "../components/SecondaryHero";
// import styles from "../Styles/Registration.module.css";
import Styles from "../Styles/Author.module.css";

export default function Registration() {
  return (
    <div>
      <SecondaryHero header={"Registration"} majorHeader={"Main"} />

      {/* <h1 className={styles.Heading}>
                    Registration Fees
            </h1>
            <div className={styles.registerBox}>
                <p className={styles.registerPara}> Conference Registration fee  -  6500 Rs</p>
                <p className={styles.registerPara}>IEEE Member - 6000 Rs</p>
                <p className={styles.registerPara}>Late Registration (for all)  - 8000 Rs</p>
            </div> */}
      <div className={Styles.container}>
        <div className={Styles.heading}>
          Payment of Registration fee for IEEE ESDC 2023{" "}
        </div>
        <div
          data-aos={"fade-right"}
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <p
            className={Styles.normalText}
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            a. One registration is required for every paper accepted for the
            Conference.
          </p>
          <p
            className={Styles.normalText}
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            b. Only papers that are registered and made payment; would be
            allowed to present in the conference and submitted to IEEExplore for
            Conference Proceedings.
          </p>
          <p
            className={Styles.normalText}
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            c. Once registered, one person from the list of authors of the
            accepted paper is allowed to attend the conference.
          </p>
          <p
            className={Styles.normalText}
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            d. If any other author of the same accepted paper wants to attend
            the conference, he/she is allowed to attend by paying the conference
            attendance fee of Rs. 2000. This includes the cost of attending the
            conference and food charges.
          </p>
          <p
            className={Styles.normalText}
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            e. The registration fee for accepted papers of IEEE ESDC 2023 is
            collected through SBI Collect.
          </p>
        </div>
        <div
          data-aos={"fade-left"}
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <div className={Styles.subHeading}>
            The payment amount is as follows:
          </div>
          <ul
            className={Styles.normalText}
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            <li>IEEE Member: 6000 Rs</li>
            <li>Non-IEEE Member: 6500 Rs</li>
            <li>
              Late Registration: 8000 Rs (Registration after 15 th April 2023)
            </li>
            <li>Attending the Conference (without accepted paper) – 2000 Rs</li>
          </ul>
        </div>
        <div
          data-aos={"fade-right"}
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <div className={Styles.subHeading}>
            The steps for making payment through SBI Collect is as follows:
          </div>
          <ul
            className={Styles.normalText}
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            <li>
              Payment through SBI Collect can be made by operating the following
              link
            </li>
            <p className={Styles.Link}>
              <a
                href="https://www.onlinesbi.com/sbicollect/icollecthome.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.onlinesbi.com/sbicollect/icollecthome.htm
              </a>
            </p>
            <p
              className={Styles.normalText}
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              Follow the process for making the payment through SBI Collect:
            </p>
            <ul>
              <li>Click on State Bank Collect/accept terms and conditions</li>
              <li>Select - Andhra Pradesh</li>
              <li>Select - Educational institutions</li>
              <li>
                Select - Indian Institute of Information Technology Chittoor
              </li>
              <li>Select – Other Fee</li>
              <li>
                Enter Name &amp; Paper ID No./Select other details/Click on
                submit/choose Payment
              </li>
              <li>Pay the Fee</li>
              <li>
                Download receipts generated in SBI collect and send it to 
                 <b> fee.receipt@iiits.in</b> and cc <b>11.ieee.esdc@iiits.in</b>
              </li>
            </ul>
          </ul>
        </div>
        <div style={{ paddingBottom: "3.8125rem" }}></div>
      </div>
    </div>
  );
}
