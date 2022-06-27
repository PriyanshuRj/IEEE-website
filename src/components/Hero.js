import React from 'react'
import Styles from "../Styles/hero.module.css"
export default function Hero() {
  return (
    <section className={Styles.textOverlay + " " + Styles.bannerTwo + " " + Styles.bgBannerTwo+ " " + Styles.overlayWhiteSlant }>
	<div className="container">
		<div className="row">
			<div className="col-md-6" style={{zIndex:"100"}}>
				
				<div className={Styles.block} >
					<h1>IEE</h1>
					<h2>Conference</h2>
					<h3>2022</h3>
					<h5>
					Hosted by

Indian Institute of Information Technology (IIIT) Sri City, India 
					</h5>
					<h6>15-17 December 2022</h6>
					

					
				
				</div>
			</div>
		</div>
	</div>
</section>
  )
}
