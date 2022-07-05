import React from 'react'
import SecondaryHero from "../components/SecondaryHero";
import Styles from "../Styles/SponsersOppurtunities.module.css";


export default function SponsorsOppurtunities() {
  return (
    <div>
        <SecondaryHero header={"Sponsership Oppurtunities"} />
        <div style={{paddingTop : '3.8125rem'}}>
        <div className="d-flex justify-content-center m-4 ">
        <h2 className={Styles.title }> Will be Updated Soon </h2>
        </div>
      </div><div style = {{paddingBottom: '3.8125rem'}}></div>

    </div>
  )
}
