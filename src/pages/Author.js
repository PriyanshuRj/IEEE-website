import React from "react";
import SecondaryHero from "../components/SecondaryHero";
import Table from "../components/UI/Table";
import Styles from "../Styles/Author.module.css";

export default function Author() {
  return (
    <div>
      <SecondaryHero header={"Author"} />
      <div className={Styles.container}>
        <div className={Styles.heading}>PAPER SUBMISSION</div>
        <div
          data-aos={"fade-right"}
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <div className={Styles.subHeading}>Important Dates</div>
          <Table />
        </div>
        <div
          data-aos={"fade-left"}
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <div className={Styles.subHeading}>
            Paper upload through Microsoft CMT Portal
          </div>
          <p className={Styles.Link}>
            <a
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FESDC2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to go the paper submission website
            </a>
          </p>
          <div className={Styles.subHeading}>Where to find paper templates</div>
          <p className={Styles.Link}>
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to download paper templates in word and LaTeX.
            </a>
          </p>
          <div className={Styles.subHeading}>
            To know more about how to create papers for IEEE IES conferences,
            please visit:
          </div>
          <p className={Styles.Link}>
            <a
              href="http://www.ieee-ies.org/conferences/paper-format-for-conferences"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here for more information.
            </a>
          </p>
        </div>
        <div
          data-aos={"fade-right"}
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <div className={Styles.subHeading}>Instructions for Authors</div>
          <p className={Styles.normalText}>
            Prospective authors are invited to electronically submit full
            regular papers of their work. English is the working language of the
            conference. Papers are limited to six (6) pages. Up to two (2)
            additional pages can be accepted, but additional page fees must be
            paid at registration.
          </p>
          <p className={Styles.normalText}>
            Authors must adhere to the IEEE Conference written paper format. The
            author must submit the draft version of the paper for review before
            the due submission deadlines (see dates above). These are submitted
            through the IES Submit system, which is entered from the conference
            website. IEEE is very strict about the requirements for PDF files
            for inclusion in the IEEE Xplore® Digital Library. We strongly
            recommend to use the set of templates in MS Word and LaTeX format
            provided by IEEE. Letter page size is preferred, and A4 can also be
            used. Please use them to create your paper, but don’t modify the
            style or the format under any circumstances
          </p>
          <p className={Styles.normalText}>
            Submit only original work, not previously published or copyrighted.
            Prospective authors are expected to submit only their own original
            works. The Conference will be using the CrossCheck automated
            screening system to help verify originality of papers. Submitted
            works may be compared to over 20 million articles in databases
            worldwide. Papers that violate IEEE’s publication principles may be
            summarily rejected. If the violation is deemed severe, then
            disciplinary actions may also be taken by IEEE.
          </p>
          <p className={Styles.normalText}>
            Accepted and presented papers will be copyrighted to IEEE and
            published in conference proceedings, which will be eligible for
            inclusion in the IEEE Xplore® Digital Library, once it meets the
            requirements of an IEEE quality review. It will then be customarily
            indexed by EI Compendex.
          </p>
          </div>
          <div
           data-aos={"fade-left"}
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out-cubic">

            
          <div className={Styles.subHeading}>
            Final PDF paper submission instructions Preparing final PDF
          </div>
          <p className={Styles.normalText}>
            Authors must adhere to the IEEE Conference written paper format. The
            author must submit the final version of the manuscript(s) and sign
            online the “IEEE Copyright Form” before the final submission
            deadline. This process is done through the same IES Submit system
            used for initial paper submission (link in “Where to Submit” section
            below).
          </p>
          <p className={Styles.normalText}>
            IEEE is very strict about the compliance requirements for PDF files
            for inclusion in the IEEE Xplore® Digital Library. We strongly
            recommend using{" "}
            <a
              href="https://ieee-pdf-express.org/account/login?ReturnUrl=%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              IEEE PDF eXpress® site
            </a>{" "}
            to check your final version of the paper.
          </p>
          <p className={Styles.normalText}>
            Later, the IES PCT system will perform more checks on your final
            version, and authors of wrongly formatted papers will be contacted.
          </p>
        </div>
        <div
          data-aos={"fade-right"}
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <div className={Styles.subHeading}>
            IEEE PDF eXpress® instructions
          </div>
          <p className={Styles.normalText}>
            You can access IEEE PDF eXpress® site by clicking{" "}
            <a
              href="https://ieee-pdf-express.org/account/login?ReturnUrl=%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . Use TBC as the conference code.
          </p>
          </div>
          <div
           data-aos={"fade-left"}
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out-cubic">
            
          <div className={Styles.subHeading}>
            Contacting IEEE PDF eXpress® support
          </div>
          <p className={Styles.normalText}>
            You can access Publications Support Center by clicking{" "}
            <a
              href="https://supportcenter.ieee.org/app/answers/list/p/12"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . If you do not find an answer in the Find Answers tab, go to the
            Ask A Question tab. Your question will be forwarded to IEEE PDF
            Support and answered within 3 business days.
          </p>
        </div>
      </div>
    </div>
  );
}
