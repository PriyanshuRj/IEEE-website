import React from "react";
import ProgramList from "../components/Programs";
import SecondaryHero from "../components/SecondaryHero";
import Style from "../Styles/program.module.css";
import SpeakerCard from "../components/UI/SpeakerCard";


const Track1 = [{
  designation:"Chair",
    name: "Dr. Siva Kotam Raju",
    post: "IIIT Sricity",
    img: "Dr.-Sivaprasad-Kotamraju-img3.jpg",
}]
const Track2 = [{
  designation:"Chair",
    name: "Dr. Anish Chand T",
    post: "IIIT Sricity",
    img: "Anish-Chand-Turlapaty.jpg",
}]
const Track3 = [{
  designation:"Chair",
    name: "Dr. Raja Vara Prasad",
    post: "IIIT Sricity",
    img: "02-Raja-Vara-Prasad.jpg",
}]
const Track4 = [{
  designation:"Chair",
    name: "Dr.Achintya Sarkar",
    post: "IIIT Sricity",
    img: "achintya.jpg",
}]
const ListMap1 = [{
  index:1,
  
  track:'Track 1 - Intelligent Sensors & Devices',
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

}]
const ListMap2=[{
  index:2,
  
  track:'Track 2 - Robotics',
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
}]

const ListMap3 = [{
  index:3,
  track:'Track 3 - IoT and Networks ',
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
}]
const ListMap4 = [{
  index:4,
  track:'Track 4 - Signal processing, ML and Data Analytics for Industry 4.0',
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
      <SecondaryHero header="Track Based Conference"/>
      <h1 className={Style.mainTitle} style={{textAlign: 'center',padding: '82px 0 10px 0',fontSize: '40px',fontWeight: 'bold'}}>4 Tracks pertaining to Industry 4.0 theme</h1>
      <div className={Style.Text}>
      The 1st track is on Devices where the focus would be on sensors, actuators, system on chip, nano-electronics, etc. Significantly, this track would also cover wearable electronics and other devices pertaining to industry 4.0.The 2nd track is on Robotics to showcase the latest developments in cross-disciplinary areas of robotics including (but not limited to) human robot interaction, AI for robotics, robotics based industrial systems design and cobots. The application areas can include industrial automation, healthcare, rehabilitation, home services and search and rescue. The 3rd track is on IoT and networks, the backbone of industry 4.0. The topics of interest include: Embedded systems, Digital Twin, Industrial IoT.Finally, the 4th track is on signal processing, machine learning. The main goal of this track is to share the innovation ideas, methodology, development, and applications of signal processing, data analytics, Big data, and machine learning among the researchers and industry experts around the world.
      </div>
      <div className={Style.mainDiv}>
      <div className="d-flex justify-content-center">

      <h1 className={Style.title}>Track 1 - Intelligent Sensors and Devices</h1>
      
      </div>
      </div>
      
      <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {Track1.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} index={index} />;
          })}
        </div>
      <div className={" " + Style.mainDiv}>
    {ListMap1.map((list)=>{
      return <ProgramList key={list.index} data={list} />

    })}

      </div>
      <div className={Style.mainDiv}>
      <div className="d-flex justify-content-center">

      <h1 className={Style.title}>Track 2 - Robotics</h1>
      
      </div>
      </div>
      
      <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {Track2.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} index={index} />;
          })}
        </div>
      <div className={" " + Style.mainDiv}>
    {ListMap2.map((list)=>{
      return <ProgramList key={list.index} data={list} />

    })}

      </div>
      <div className={Style.mainDiv}>
      <div className="d-flex justify-content-center">

      <h1 className={Style.title}>Track 3 - IoT and Networks</h1>
      
      </div>
      </div>
      
      <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {Track3.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} index={index} />;
          })}
        </div>
      <div className={" " + Style.mainDiv}>
    {ListMap3.map((list)=>{
      return <ProgramList key={list.index} data={list} />

    })}

      </div>
      <div className={Style.mainDiv}>
      <div className="d-flex justify-content-center">

      <h1 className={Style.title}>Track 4 - Signal processing, ML and Data Analytics for Industry 4.0</h1>
      
      </div>
      </div>
      
      <div
          className=" mx-4 d-flex justify-content-around flex-wrap"
          style={{ marginBottom: "21px" }}
        >
          {Track4.map((speaker, index) => {
            return <SpeakerCard speaker={speaker} key={index} index={index} />;
          })}
        </div>
      <div className={" " + Style.mainDiv}>
    {ListMap4.map((list)=>{
      return <ProgramList key={list.index} data={list} />

    })}

      </div>
      <div style = {{paddingBottom: '3.8125rem'}}></div>
    </div>
  );
}
