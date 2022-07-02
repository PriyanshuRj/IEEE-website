import React from 'react'
import SecondaryHero from "../components/SecondaryHero";
import SpeakerCard from "../components/UI/SpeakerCard";
import Styles from "../Styles/organizer.module.css";

const Tut1=[
  {
    name: "Dr. Hrishikesh Venkataraman",
    post: "IIIT Sricity",
    img: "OrganizersCommittee/generalCo-chair2.png",
  },
  {
    name: "Dr. Ranjeet Deshmukh",
    post: "Road Bounce",
    img: "RanjeetDeshmukh.jpg",
  },
]
const Tut2=[
  {
    name: "Dr. Ramesh Kumar V",
    post: "IIIT Sricity",
    img: "OtherCommittee/Public3.jpg",
  },
]
const Tut3=[
  {
    name: "Dr. Sreeja SR",
    post: "IIIT Sricity",
    img: "Sreeja.png",
  },
]
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
        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {Tut1.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} index={index}/>;
          })}
        </div>
        <h1>Nano-electronics</h1>
        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {Tut2.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} index={index}/>;
          })}
        </div>
        <h1>Analytics</h1>
        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {Tut3.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} index={index}/>;
          })}
        </div>

      </div>
    </div>
  )
}
