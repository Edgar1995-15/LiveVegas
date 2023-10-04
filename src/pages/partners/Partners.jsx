import React from "react";
import "./partners.css";
import becomePartners from "../../assets/becomepartner.png";
import xbet from "../../assets/xbet.png";
import betconstruct from '../../assets/betconstruct.png';
import pokerdom from '../../assets/pokerdom.png';
import uk from '../../assets/unitedkingdom.png';
import russia from '../../assets/russia.png';
import turkey from '../../assets/turkey.png';
import emirates from '../../assets/emirates.png';

function Partners() {
  return (
    <div className="partners-main">
      <div className="partners-title">
        <img src={becomePartners} alt="become a partner" />
      </div>
      <div className="our-info">
        <ul>
          <li>
            <p className="info-numbers">5+</p>
            <p className="info-titles">PARTNERS</p>
          </li>
          <li>
            <p className="info-numbers">20+</p>
            <p className="info-titles">TABLES</p>
          </li>
          <li>
            <p className="info-numbers">4</p>
            <p className="info-titles">LANGUAGES</p>
          </li>
          <li>
            <p className="info-numbers">20+</p>
            <p className="info-titles">GAMES</p>
          </li>
        </ul>
      </div>
      <div className="partners-logos">
        <div>
            <img src={xbet} alt="1xbet" />
        </div>
        <div>
            <img src={betconstruct} alt="1xbet" />
        </div>
        <div>
            <img src={pokerdom} alt="1xbet" />
        </div>
      </div>
      <div className="flags">
        <div>
            <img src={uk} alt="united kingdom" />
        </div>
        <div>
            <img src={russia} alt="russia" />
        </div>
        <div>
            <img src={turkey} alt="turkey" />
        </div>
        <div>
            <img src={emirates} alt="arabian emirates" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
