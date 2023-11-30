import React from "react";
import "./contactUs.css";
import Button from "../../components/button/Button";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();
  return (
    <div className="contact-main" id="contact-us">
      <div className="contact-title global-titles-green">
        <h1>{t("contactUS")}</h1>
      </div>
      <div className="contact-content">
        <form className="contacts-form">
          <div >
            <span className="bottom-border">
              <input type="text" id="name" name="name" placeholder="Name" />
            </span>
          </div>
          <div >
            <span className="bottom-border">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
            </span>
          </div>
          <div >
            <span className="bottom-border">
              <input type="tel" id="phone" name="phone" placeholder="Phone" />
            </span>
          </div>
          <div >
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
