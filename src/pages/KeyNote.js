import React from 'react'
import SecondaryHero from "../components/SecondaryHero";
import Card from "../components/UI/SpeakerCard";
import Styles from "../Styles/keynote.module.css";
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
export default function KeyNote() {
  return (
    <div>
      <SecondaryHero header={"KeyNotes"} />
      <div className="d-flex justify-content-center m-4 ">
        <h2 className={Styles.title }> Our Speakers </h2>
      </div>
      <div className=" mx-4 d-flex justify-content-around flex-wrap" style={{marginBottom : "21px"}}>
        {SpeakersList.map((speaker, index) => {
          return <Card speaker={speaker} key={index} />;
        })}
      </div>
    </div>
  )
}
