import React from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <div className="contactUs">
        <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.screen}>
          <div className={styles.screen_body}>
            <div className={styles.screen_body_item}>
              <div className={styles.app_title}>
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className={styles.app_contact}>CONTACT INFO : +62 81 314 928 595</div>
            </div>
            <div className={styles.screen_body_item}>
              <div className={styles.app_form}>
                <div className={styles.app_form_group}>
                  <input
                    className={styles.app_form_control}
                    placeholder="NAME"
                  />
                </div>
                <div className={styles.app_form_group}>
                  <input className={styles.app_form_control} placeholder="EMAIL" />
                </div>
                <div className={styles.app_form_group}>
                  <input className={styles.app_form_control} placeholder="CONTACT NO" />
                </div>
                <div className={styles.message}>
                  <input className={styles.app_form_control} placeholder="MESSAGE" />
                </div>
                <div className={styles.buttons}>
                  <button className={styles.app_form_button}>CANCEL</button>
                  <button className={styles.app_form_button}>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
