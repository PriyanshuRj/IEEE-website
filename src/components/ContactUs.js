
import React from "react";
import styles from "./ContactUs.module.css";
// import { FaHeart} from 'react-icons/fa';
export default function ContactUs() {
  return (
    <div className={" py-4 " +  styles.contactBG}>
    <div className=" my-4">
        <div className="row justify justify-content-center  ">
            <div className="col-11 col-md-8 col-lg-6 col-xl-5">
                <form className="">
                    <div className={"card  p-4 " + styles.ContactFormBg}>
                        <div className="row mt-2">
                            <div className="col-md-12 ">
                                <h4 className="">Contact Us</h4>
                                <p>Send Your mesage to Us !</p>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <div className="col-md-12 mb-0">
                                <label className="mb-2 ml-2" htmlFor="email">Email</label> <input name="email" id="email" type="text" placeholder="Enter your email"  style={{background:"rgba(97, 96, 96, 0.18)"}} className="form-control input-box rm-border" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12 mb-2 ml-2">
                                <label className="mb-2" htmlFor="message">Message</label> <textarea id="message" type="text" placeholder="Enter your message" name="message" style={{background:"rgba(97, 96, 96, 0.18)"}} className="form-control input-box rm-border"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-center mb-0">
                            <div className=" col-md-12 px-3"> <input type="submit" value="Submit" className={styles.sendBtn + " btn btn-block btn-purple rm-border"} /> </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  );
}


