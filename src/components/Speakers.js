import React from "react";
import SpeakerCard from "./UI/SpeakerCard";
import styles from "./Speakers.module.css";
const SpeakersList = [
  {
    name: "Prof. SWARUP BHUNIA",
    post: "The University of Florida, USA ",
    img: "../swarupbhunia.png",
  },
  {
    name: "Dr. Priyadarsan Patra",
    post: "Intel Corp. USA",
    img: "/swarupbhunia.png",
  },
  {
    name: "Dr. Chittaranjan Mandal",
    post: "IIT Kharagpur, India",
    img: "/swarupbhunia.png",
  },
];
export default function Speakers() {
  return (
    <div className={styles.speakers}>
      <div className={styles.speakers_heading}>
        <h2> Our Speakers </h2>
      </div>
      <div className=" mx-4 d-flex justify-content-around flex-wrap" style={{marginBottom : "21px"}}>
        {SpeakersList.map((speaker, index) => {
          return <SpeakerCard speaker={speaker} key={index} />;
        })}
      </div>
      <a href="#" className={styles.btn}>
        Meet all speakers
      </a>
    </div>
  );
}
