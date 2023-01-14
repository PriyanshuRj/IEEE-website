import React from 'react'
import SecondaryHero from "../components/SecondaryHero";
import styles from '../Styles/Callforpapers.module.css';

export default function callforpapers() {
  return (
    <div>
        <SecondaryHero header={"Call for Papers"} majorHeader={"Programs"}/>

       <div style = {{textAlign: "center"}} className={styles.posterDiv}>
       <img src="/11th_IEEE_ESDC_2023.jpg"  className = {styles.poster} alt=""/>
       </div>
    </div>
  )
}
