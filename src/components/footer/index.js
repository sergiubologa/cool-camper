import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="footer footer--dark">
    <div className="container">
      <div className="footer__inner">
        <div className="footer__logo">
          <Link to="/" className="footer__textLogo">
            CoolCamper
          </Link>
          <small>
            Site-ul nostru foloseste cookies pentru a imbunatati experienta de
            navigare. Continuarea navigarii implica acceptarea{" "}
            <Link to="politica-de-confidentialitate" className="footer__link">
              Politicii de Confidentialitate
            </Link>{" "}
            a CoolCamper.ro.
          </small>{" "}
          <br />
          <small>Toate drepturile rezervate ©2018. CoolCamper.ro</small>
        </div>

        <div className="footer__data">
          <div className="footer__data__item">
            <div className="footer__row">
              <Link to="contact" className="footer__link">
                Contact
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
          <div className="footer__data__item">Lorem ipsum</div>
          <div className="footer__data__item">
            <div className="footer__row">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Facebook
              </a>
            </div>
            <div className="footer__row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Instagram
              </a>
            </div>
            <div className="footer__row">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
