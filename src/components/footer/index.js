import React from "react";
import { Link } from "react-router-dom";
import TimeAwareLogo from "../svg/logo/time-aware";

export default () => (
  <div className="footer footer--dark">
    <div className="container">
      <div className="footer__inner">
        <div className="footer__logo">
          <Link to="/" className="footer__textLogo">
            <TimeAwareLogo />
          </Link>
          <span>
            CoolCamper este un serviciu de{" "}
            <strong>închiriere autorulote</strong> din România, cu punct de
            lucru în Cluj-Napoca. Autorulotele noastre se pot închiria pe tot
            parcursul anului, din județele Cluj și Mureș, dar se pot închiria și
            de către persoane din județele limitrofe: Sibiu, Bistrița, Alba,
            Bihor, Zalău.
          </span>
        </div>

        <div className="footer__data">
          <div className="footer__data__item footer__pages">
            <div className="footer__row">
              <Link to="detalii-tehnice-autorulota" className="footer__link">
                Date tehnice autorulote
              </Link>
            </div>
            <div className="footer__row">
              <Link to="anulare-rezervare" className="footer__link">
                Politica de anulare rezervare
              </Link>
            </div>
            <div className="footer__row">
              <Link to="termeni-si-conditii" className="footer__link">
                Termeni si Conditii
              </Link>
            </div>
            <div className="footer__row">
              <Link to="politica-de-confidentialitate" className="footer__link">
                Politica de Confidentialitate
              </Link>
            </div>
          </div>
          <div className="footer__data__item footer__social">
            <div className="footer__row">
              <a
                href="https://www.facebook.com/CoolCamperCluj"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                ga-on="click,auxclick,contextmenu"
                ga-hit-type="social"
                ga-social-network="Facebook"
                ga-social-action="Go to Facebook Page"
                ga-social-target="https://www.facebook.com/CoolCamperCluj"
                ga-event-label="footer"
              >
                Facebook
              </a>
            </div>
            <div className="footer__row">
              <a
                href="https://www.instagram.com/coolcampercluj"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                ga-on="click,auxclick,contextmenu"
                ga-hit-type="social"
                ga-social-network="Instagram"
                ga-social-action="Go to Insta page"
                ga-social-target="https://www.instagram.com/coolcampercluj"
                ga-event-label="footer"
              >
                Instagram
              </a>
            </div>
            <div className="footer__row">
              <a
                href="https://twitter.com/CoolCamperCluj"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
                ga-on="click,auxclick,contextmenu"
                ga-hit-type="social"
                ga-social-network="Twitter"
                ga-social-action="Go to Twitter page"
                ga-social-target="https://twitter.com/CoolCamperCluj"
                ga-event-label="footer"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="footer__data__item footer__copyright">
            <div className="footer__row">
              <small>
                Site-ul nostru folosește cookies pentru a îmbunătăți experiența
                de navigare. Continuarea navigării implică acceptarea{" "}
                <Link
                  to="politica-de-confidentialitate"
                  className="footer__link"
                >
                  Politicii de Confidențialitate
                </Link>{" "}
                și a{" "}
                <Link to="politica-de-cookies" className="footer__link">
                  Cookie-urilor
                </Link>{" "}
                CoolCamper.ro.
              </small>{" "}
              <br />
              <br />
              <small>
                Toate drepturile rezervate CoolCamper.ro ©
                {new Date().getFullYear()}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
