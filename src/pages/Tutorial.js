import React from "react";
import SecondaryHero from "../components/SecondaryHero";
import SpeakerCard from "../components/UI/SpeakerCard";
import Styles from "../Styles/organizer.module.css";

const Tut1 = [
  {
    designation:"Chair",
    name: "Dr.Hrishikesh Venkataraman",
    post: "IIIT Sricity",
    img: "OrganizersCommittee/generalCo-chair2.png",
  },
  {
    designation:"Co-Chair",
    name: "Mr. Ranjeet Deshmukh",
    post: "Road Bounce",
    img: "RanjeetDeshmukh.jpg",
  },
];
const Tut2 = [
  {
    designation:"Chair",
    name: "Dr. Ramesh Kumar V",
    post: "IIIT Sricity",
    img: "OtherCommittee/Public3.jpg",
  },
  {
    designation:"Co-Chair",
    name: "TBD",
    post:"TBD",
    img: "dummyImage.jpeg",
  },
];
const Tut3 = [
  {
    designation:"Chair",
    name: "Dr. Sreeja SR",
    post: "IIIT Sricity",
    img: "Sreeja.png",
  },
  {
    designation:"Co-Chair",
    name: "TBD",
    post:"TBD",
    img: "dummyImage.jpeg",
  },
];
export default function Tutorial() {
  return (
    <div>
      <SecondaryHero header={"Tutorial"} />
      <div
        className={
          "d-flex flex-column justify-content-center text-center " +
          Styles.mainSection
        }
      >
        <h1>Smart Transportation</h1>
        <h5
          className={"mx-5"}
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          Smart Transportation involve an amalgamation of transportation
          systems, traffic control systems, traffic safety systems and other
          automated applications related to transportation technology. The
          tutorial would present the different challenges in the Indian scenario
          and emphasize on how different technologies such as IoT / Sensors for
          ADAS, Co-operative Autonomy, Computer Vision, Machine Learning / Deep
          Learning, etc could be used to solve the challenges.
        </h5>
        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {Tut1.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} index={index} />;
          })}
        </div>
        <h1>Nano-electronics</h1>
        <h5
          className={"mx-5"}
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          The tutorial would present how data analytics would form the basis for
          recommender systems and prediction framework that would enable smart
          manufacturing and industry 4.0
        </h5>
        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          
          {Tut2.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} index={index} />;
          })}
        </div>
        <h1>Data Analytics</h1>
        <h5
          className={"mx-5"}
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          This tutorial would talk about the diverse set of devices and
          materials, with the common characteristic being that such that
          inter-atomic interactions and quantum mechanical properties need to be
          studied extensively. The tutorial would cover how nano-electronics
          would define the next generation of embedded systems and electronic
          devices
        </h5>
        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {Tut3.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
