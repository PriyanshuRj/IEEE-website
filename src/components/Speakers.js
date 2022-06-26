import React from 'react'
import SpeakerCard from "./UI/SpeakerCard";
const SpeakersList = [
    {
        name:"Prof. SWARUP BHUNIA",
        post:"The University of Florida, USA ",
        img:"/swarupbhunia.png"
    },
    {
        name:"Dr. Priyadarsan Patra",
        post:"Intel Corp. USA",
        img:"/swarupbhunia.png"
    },{
        name:"Dr. Chittaranjan Mandal",
        post:"IIT Kharagpur, India",
        img:"/swarupbhunia.png"
    }
]
export default function Speakers() {
  return (
    <div className=" mx-4 d-flex justify-content-around flex-wrap" >
        {SpeakersList.map((speaker,index)=>{
            return <SpeakerCard speaker={speaker} key={index} />
        })}
    </div>
  )
}
