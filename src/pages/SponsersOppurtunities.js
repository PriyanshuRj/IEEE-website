import React from 'react'
import SecondaryHero from "../components/SecondaryHero";
import Styles from "../Styles/SponsersOppurtunities.module.css";


export default function SponsorsOppurtunities() {
  return (
    <div>
        <SecondaryHero header={"Sponsership Oppurtunities"} majorHeader={"Sponsers"}/>
        <div style={{paddingTop : '3.8125rem'}}>
        <div className={Styles.container}>
        <h2 className={Styles.normalText}>  Organizations/Institutions in contributing or participating in this exciting conference are encouraged to contact the General co chair at <a href = "mailto:  hvraman@iiits.in"> hvraman@iiits.in</a> or <a href = "mailto:  11.ieee.esdc@iiits.in"> 11.ieee.esdc@iiits.in</a>. </h2>
        </div>
      </div><div style = {{paddingBottom: '3.8125rem'}}></div>

    </div>
  )
}
