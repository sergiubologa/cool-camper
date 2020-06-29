import React from "react";
import Helmet from "react-helmet";
import SimpleLayout from "../layouts/simple-layout";
import "../../styles/covid-19.css";
import IconLabel from "../../components/icon-label";
import { Link } from "react-router-dom";

export default () => (
  <SimpleLayout className="covid-19-navbar">
    <Helmet>
      <title>
        CoolCamper - Ghid de călătorie cu autorulota în timp de SARS-CoV-2
      </title>
      <meta
        name="description"
        content="Ghidul CoolCamper pentru călătoria cu autorulota, pe timp de pandemie!"
      />
    </Helmet>
    <div className="covid-19 container">
      <div className="banner">
        <div className="alert">
          <span role="img" aria-label="virus icon">
            🦠
          </span>{" "}
          &nbsp;&nbsp; Stare de alertă
        </div>
      </div>
      <div className="question">
        <p className="first">Se poate călători</p>
        <p className="second">
          cu <span className="autorulota">autorulota</span>?
        </p>
      </div>
      <div className="answer">
        <div className="yes">DA</div>
        <p className="text">se poate în România și UE</p>
        <p className="quote">
          “deplasarea pentru activităţi recreativ-sportive individuale
          desfăşurate în aer liber (ciclism, drumeţie, alergare, canotaj,
          alpinism, vânătoare, pescuit şi altele) cu participarea a cel mult 3
          persoane„
        </p>
        <p className="source">
          — măsura nr. 17, lit. i, anexa 1, din hotărârea nr. 24/14.05.2020
          <br />
          <a
            href="http://legislatie.just.ro/Public/DetaliiDocument/225602"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://legislatie.just.ro/Public/DetaliiDocument/225602
          </a>
        </p>
      </div>
      <div className="how-to-section">
        <p className="title">Cum să te pregătești tu:</p>
        <IconLabel
          size="normal"
          text={
            <React.Fragment>
              Fă-ți un traseu cu locurile în care vei campa cu ajutorul
              aplicației{" "}
              <a
                href="https://park4night.com/"
                style={{ textDecoration: "underline" }}
              >
                Park4Night
              </a>
            </React.Fragment>
          }
        />
        <IconLabel
          size="normal"
          text={
            <React.Fragment>
              Verifică pe site-ul&nbsp;
              <a
                href="https://reopen.europa.eu/en"
                style={{ textDecoration: "underline" }}
              >
                Reopen EU
              </a>
              &nbsp; măsurile impuse în țările în care vrei să călătorești
            </React.Fragment>
          }
        />
        <IconLabel
          size="normal"
          text="Ia-ți toate măsurile de precauție: măști de protecție, dezinfectant, distanțare socială (minimum 2m)"
        />
      </div>
      <div className="how-to-section">
        <p className="title">Cum ne pregătim noi:</p>
        <IconLabel
          size="normal"
          text="Dezinfectăm și igienizăm autorulota după fiecare preluare"
        />
        <IconLabel
          size="normal"
          text="Lăsăm cel puțin 2 zile libere între rezervări ca să igienizăm și să aerisim autorulota"
        />
        <IconLabel
          size="normal"
          text="Impunem purtarea măștilor de protecție la preluare și la predare, atât nouă cât și clienților noștri"
        />
      </div>
      <div className="cta-section">
        <Link
          className="button button__primary"
          to="/rezervare-autorulota"
          ga-on="click,auxclick,contextmenu"
          ga-event-category="Button"
          ga-event-action="Verifică disponibilitatea"
          ga-event-label="Covid-19 page - bottom"
        >
          Verifică disponibilitatea
        </Link>
      </div>
      <div className="last"></div>
    </div>
  </SimpleLayout>
);
