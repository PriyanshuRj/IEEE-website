import React from "react";
import SpeakerCard from "./UI/SpeakerCard";
import styles from "./Speakers.module.css";
import { Link } from "react-router-dom";
const SpeakersList = [
  {
    name: "Prof. SWARUP BHUNIA",
    post: "The University of Florida, USA ",
    img: "/keynoteSpeaker1.jpeg",
  },
  {
    name: "Dr. Priyadarsan Patra",
    post: "Intel Corp. USA",
    img: "/keynoteSpeaker2.jpeg",
  },
  {
    name: "Dr. Chittaranjan Mandal",
    post: "IIT Kharagpur, India",
    img: "/keynoteSpeaker3.jpeg",
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
      <Link to ="/keynote">


      <a href="#" className={styles.btn}>
        Meet all speakers
      </a>
      </Link>
    </div>
  );
}
