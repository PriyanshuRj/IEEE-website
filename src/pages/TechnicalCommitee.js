import React from 'react'
import SecondaryHero from "../components/SecondaryHero";
import SpeakerCard from "../components/UI/SpeakerCard";
import Styles from "../Styles/organizer.module.css";
const Technical =[
  {
    name: " Prof. Zheng-Hua Tan",
    post: "Aalborg University, Denmark",
    img: "TechinalCommittee/Technical1.jpg",
  },
  {
    name: "Prof. Bhiksha Raj",
    post: "Carnegie Mellon University, USA",
    img: "TechinalCommittee/Technical2.jpg",
  },
  {
    name: "Dr. Jai Gopal Pandey",
    post: "CSIR CEERI Pilani",
    img: "TechinalCommittee/Technical3.jpg",
  },
  {
    name: "Dr. Amit Banerjee",
    post: "National University of Singapore",
    img: "TechinalCommittee/Technical4.jpg",
  },
  {
    name: "Dr. Shiva Kumar Malapaka",
    post: "IIIT Bangalore",
    img: "TechinalCommittee/Technical5.jpg",
  },
  {
    name: "Dr. Gopal Kamath",
    post: "BITS Hyderabad",
    img: "TechinalCommittee/Technical6.jpg",
  },
  {
    name: "Dr. Matloob Khushi",
    post: "Univ. of Sydney, Australisa",
    img: "TechinalCommittee/Technical7.jpg",
  },
  {
    name: "Mr. Vijay Subramanian",
    post: "Alstom",
    img: "TechinalCommittee/Technical8.jpg",
  },
  {
    name: "Dr. Karthik Seemakurthy",
    post: "Lincoln, UK",
    img: "TechinalCommittee/Technical9.jpg",
  },
  {
    name: "Mr. G Surender",
    post: "Xilinx",
    img: "TechinalCommittee/Technical10.jpg",
  },
  {
    name: "Dr. Akshdeep Sarma",
    post: "CMET, Hyderabad",
    img: "TechinalCommittee/Technical11.jpg",
  },
  {
    name: "Dr. Balakrishna Gokaraju",
    post: "NCATU, USA",
    img: "TechinalCommittee/Technical12.jpg",
  },
]

export default function TechnicalCommitee() {
  return (
    <div>
      <SecondaryHero header={"Organizers"} />
      <div
        className={
          "d-flex flex-column justify-content-center text-center " +
          Styles.mainSection
        }
      >
        <h1>Technical Program Co-Chairs</h1>

        <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {Technical.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
