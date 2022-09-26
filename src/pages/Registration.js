import React from "react";
import SecondaryHero from "../components/SecondaryHero";
import styles from "../Styles/Registration.module.css";


export default function Registration() {
    return(
        <div>
            <SecondaryHero header={"Registration"} majorHeader={"Main"}/>
           
            <h1 className={styles.Heading}>
                    Registration Fees
            </h1>
            <div className={styles.registerBox}>
                <p className={styles.registerPara}> Conference Registration fee  -  6500 Rs</p>
                <p className={styles.registerPara}>IEEE Member - 6000 Rs</p>
                <p className={styles.registerPara}>Late Registration (for all)  - 8000 Rs</p>
            </div>
            
        </div>
    )
}