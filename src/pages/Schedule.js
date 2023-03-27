import React from 'react'
import SecondaryHero from "../components/SecondaryHero";
import Styles from "../Styles/Schedule.module.css"

export default function Schedule() {
  return (
    <div>
        <SecondaryHero header={"Tentative Conference Schedule"} majorHeader={"Programs"}></SecondaryHero>
    <div style={{textAlign: 'center', marginTop: ''}}>
    <div className={Styles.heading}>Conference Schedule</div>
       
       
      <iframe style={{margin: "auto"}} title = 'schedule' src="https://drive.google.com/file/d/1klKzyM6txuvkgGj1qKfGdVN5U1KR-H7T/preview" width="750" height="750" allow="autoplay"></iframe>
        {/* </div> */}
    </div>
    <div style={{ paddingBottom: "3.8125rem" }}></div>
    </div>
  )
}
