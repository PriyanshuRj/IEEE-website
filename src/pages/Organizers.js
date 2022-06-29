import React from "react";
import SecondaryHero from "../components/SecondaryHero";
import SpeakerCard from "../components/UI/SpeakerCard";
import Styles from "../Styles/organizer.module.css";
const OrganizerList = [
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
export default function Organizers() {
  return (
    <div>
      <SecondaryHero header={"Organizers"} />
      <div
        className={
          "d-flex flex-column justify-content-center text-center " +
          Styles.mainSection
        }
      >
        <h1>Chief Patron</h1>

        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {OrganizerList.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} />;
          })}
        </div>

        <h1>General Co-Chair</h1>

        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {OrganizerList.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} />;
          })}
        </div>

        <h1>Technical Program Co-Chair</h1>

        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {OrganizerList.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} />;
          })}
        </div>

        <h1>Track Co-Chair</h1>

        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {OrganizerList.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} />;
          })}
        </div>
        <h1>Technical Program Committee</h1>

        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {OrganizerList.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
