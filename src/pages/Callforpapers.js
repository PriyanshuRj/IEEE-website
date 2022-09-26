import React from 'react'
import SecondaryHero from "../components/SecondaryHero";
import styles from '../Styles/Callforpapers.module.css';

export default function callforpapers() {
  return (
    <div>
        <SecondaryHero header={"Call for Papers"} majorHeader={"Programs"}/>

       <div style = {{textAlign: "center"}} className={styles.posterDiv}>
       <img src="/finalESDCPoster.png"  className = {styles.poster} alt=""/>
       </div>
    </div>
  )
}
