import React from 'react'
import SecondaryHero from "../components/SecondaryHero";
import SpeakerCard from "../components/UI/SpeakerCard";
import Styles from "../Styles/organizer.module.css";
const Public = [
  {
    name: "Dr. Kuan-Ting Lai",
    post: "NTUT, Taiwan",
    img: "OtherCommittee/Public1.jpg",
  },
  {
    name: "Prof. Joarder Kamruzzaman",
    post: "Federation University Australia",
    img: "OtherCommittee/Public2.jpg",
  },
  {
    name: "Dr. Ramesh Kumar V",
    post: "IIIT Sricity",
    img: "OtherCommittee/Public3.jpg",
  },
]
const Local=[
  {
    name: "Dr. Divyabramham K",
    post: "IIIT Sricity",
    img: "OtherCommittee/Local1.jpg",
  },
  {
    name: "Dr. Paul Brainerd",
    post: "IIIT Sricity",
    img: "OtherCommittee/Local2.jpg",
  },
]
export default function OterComitee() {
  return (
    <div>
      <SecondaryHero header={"Organizers"} />
      <div
        className={
          "d-flex flex-column justify-content-center text-center " +
          Styles.mainSection
        }
      >
        <h1>Publicity Committee Co-Chairs</h1>

        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {Public.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} index={index}/>;
          })}
        </div>
        <h1>Local Organizing Committee</h1>

        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {Local.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} index={index}/>;
          })}
        </div>
      </div>
    </div>
  );
}
