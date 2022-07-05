import React from 'react'
import styles from '../Styles/CurrentSponsers.module.css'
import SecondaryHero from "../components/SecondaryHero";
export default function CurrentSponsers() {
  return (
    <div>
         <SecondaryHero header={"Sponsers"} />
    
    <figure className="text-center">
    <h1 className={styles.SponsersText}><strong>Thank you to our sponsers for their support!</strong></h1>

    </figure>
    <div class="text-center">
  <img src="BannerPhotos/ieee-logo.png" class="rounded" alt="IEEE-logo"/>
    
</div>
<div class="text-center">
  <img src="BannerPhotos/sricity-logo.png" class="rounded" alt="Sricity-logo"/>
</div>
    
    </div>
  )
}
