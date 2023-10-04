import React from "react";
import "./contactUs.css";
import contactusImage from "../../assets/Contact.png";
import Button from "../../components/button/Button";

function ContactUs() {
  return (
    <div className="contact-main" id="contact-us">
      <img src={contactusImage} alt="contact us" className="contactus-img" />
      <h1 className="mobile-title">CONTACT US</h1>
      <div className="contact-content">
        <form className="contacts-form">
          <div className="additinal-border">
            <span className="bottom-border">
              <input type="text" id="name" name="name" placeholder="Name" />
            </span>
          </div>
          <div className="additinal-border">
            <span className="bottom-border">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
            </span>
          </div>
          <div className="additinal-border">
            <span className="bottom-border">
              <input type="tel" id="phone" name="phone" placeholder="Phone" />
            </span>
          </div>
          <div className="additinal-border">
            <span className="bottom-border-area">
              <textarea id="note" name="note" placeholder="Leave a Note" />
            </span>
          </div>
          <div className="submit-btn">
            <Button text="SUBMIT" className="filled-button" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
