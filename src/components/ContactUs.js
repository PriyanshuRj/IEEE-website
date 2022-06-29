
import React from "react";
import styles from "./ContactUs.module.css";
// import { FaHeart} from 'react-icons/fa';
export default function ContactUs() {
  return (
    <div className = {styles.outerBody}>
      <div className={styles.blurredBg}></div>
	<div className={styles.contactUs}>
		<form className={styles.contactForm}>
			<div className={styles.title}>Contact Us</div>
			<div className={styles.field} tabindex="1">
				<label htmlFor="username" className={styles.contactLabel}>
					<i className="fa fa-user"></i>Your Name
				</label>
				<input name="username" type="text" placeholder="e.g. john doe" className={styles.contactInput} required/>
			</div>
			<div className={styles.field} tabindex="2">
				<label htmlFor="email" className={styles.contactLabel}>
					<i className="fa fa-envelope"></i>Your Email
				</label>
				<input name="email" type="text" placeholder="email@domain.com" className={styles.contactInput} required/>
			</div>
			<div className={styles.field} tabindex="3">
				<label htmlFor="message" className={styles.contactLabel}>
        <i className="fa fa-edit"></i>Your Message
				</label>
				<textarea name="message" placeholder="type here" className={styles.contactTextarea}required></textarea>
			</div>
			<button type="reset">Send</button>
			
		</form>
	</div>
    </div>
  );
}


