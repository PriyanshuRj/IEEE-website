import React from "react";
import SecondaryHero from "../components/SecondaryHero";
import SpeakerCard from "../components/UI/SpeakerCard";
import Styles from "../Styles/organizer.module.css";
const ChiefPatron =[
  {
    name: "Prof. G Kannabiran",
    post: "Director of IIIT Sricity",
    img: "../swarupbhunia.png",
  }
]
const GeneralCoChair1 = [
  {
    name: "Prof. Swarup Bhunia",
    post: "The University of Florida, USA ",
    img: "../swarupbhunia.png",
  },
  {
    name: "Dr. Hrishikesh Venkatraman",
    post: "IIIT Sricity",
    img: "/swarupbhunia.png",
  },
  
];
const GeneralCoChair2 = [
  {
    name: "Dr. Priyanka Dwivedi",
    post: "IIIT Sricity",
    img: "../swarupbhunia.png",
  },
  {
    name: "Prof. Jimson Mathew",
    post: "IIT Patna",
    img: "/swarupbhunia.png",
  },
  
];
const TechnicalChair1 =[
  {
    name: "Prof. Rita Singh",
    post: "Carnegie Mellon University, USA",
    img: "../swarupbhunia.png",
  },
  {
    name: "Prof. Justin Dauwels",
    post: "NTU Singapore",
    img: "/swarupbhunia.png",
  },
]
const TechnicalChair2=[
  {
    name: "Dr. Swades De",
    post: "IIT Delhi",
    img: "../swarupbhunia.png",
  },
  {
    name: "Prof. Devendra Jalihal",
    post: "IIT Madras",
    img: "/swarupbhunia.png",
  },
  {
    name: "Dr. Rakesh Kumar Sanodiya",
    post: "IIIT Sri City",
    img: "/swarupbhunia.png",
  },
]

const TrackCochair=[
  {
    name: "Dr. Ram Bilas Pachori",
    post: "IIT Indore",
    img: "/swarupbhunia.png",
  },
  {
    name: "Dr. Anish Chand T",
    post: "IIIT Sri City",
    img: "/swarupbhunia.png",
  },
]
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
          {ChiefPatron.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} />;
          })}
        </div>
        

        <h1>General Co-Chairs</h1>

        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {GeneralCoChair1.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} />;
          })}
        </div>
        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {GeneralCoChair2.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} />;
          })}
        </div>

        <h1>Technical Program Co-Chairs</h1>

        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {TechnicalChair1.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} />;
          })}
        </div>
        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {TechnicalChair2.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} />;
          })}
        </div>

        <h1>Track Co-Chair</h1>

        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {TrackCochair.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} />;
          })}
        </div>

      </div>
    </div>
  );
}
