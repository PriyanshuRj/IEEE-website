import React from "react";
import ProgramList from "../components/Programs";
import SecondaryHero from "../components/SecondaryHero";
import Style from "../Styles/program.module.css";
const ListMap = [{
  index:1,
  professor:'Dr. Siva Kotam Raju',
  track:'Intelligent Sensors & Devices',
  topics:[
    'MEMS',
    'Sensors and Actuators',
    'Nanoelectronics',
    'System on Chip (SoC)',
    'Optical Devices' ,
   ' Wearable Electronics',
    'VLSI',
    'RTL',
    "And other related topics"
  ]

},
{
  index:2,
  professor:'Dr. Anish Chand T',
  track:'Robotics',
  topics:[
    'Wearable robotics',
'Industrial robotics',
'SLAM algorithms and applications',
'Biologically inspired robotics',
'Decision-Theoretic planning',
'Humanoid robots',
'Human-robot interaction',
'Knowledge sharing',
    "And other related topics"
  ]
},
{
  index:3,
  professor:'Dr. Raja Vara Prasad',
  track:'IoT and Networks ',
  topics:['IoT and Networks',
    'Embedded C',
    'IoT Connectivity',
    'Digital Twin',
    'Wireless Conenctivity',
    'Sensor integration',
    'Smart healthcare',
    'Edge Computing',
    'Drones',
    'Autonomlous Vehicle',
    "And other related topics"
  ]
},{
  index:4,
  professor:'Dr. Achintya Kumar',
  track:'Signal processing, ML and Data Analytics for Industry 4.0',
  topics:['Analysis of speech and audio signal',
    'Biomedical signal processing',
    'Signal Processing for Big Data',
    'Machine learning ',
    'Deep Learning',
    'Data Analytics',
    'Multimedia Signal Processing',
    'Applications of Signal Processing',
  "And other related topics"]
}
]
export default function Program() {

  return (
    <div>
      <SecondaryHero />
      <div className={" " + Style.mainDiv}>
    {ListMap.map((list)=>{
      return <ProgramList key={list.index} data={list} />

    })}

      </div>
    </div>
  );
}
