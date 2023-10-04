import React from "react";
import "./footer.css";
import Logo from "../../assets/Logo.svg";
import instagram from "../../assets/insta.svg";
import linkedin from "../../assets/linkedin.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>
          <img src={Logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="mailto">
          <a href="mailto:info@livevegas.live">INFO@LIVEVEGAS.LIVE</a>
          <a href="mailto:sales@livevegas.live">SALES@LIVEVEGAS.LIVE</a>
        </div>
        <div className="socials">
          <a href="https://instagram.com/livevegas.live?igshid=OGQ5ZDc2ODk2ZA==">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/company/live-vegas/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
