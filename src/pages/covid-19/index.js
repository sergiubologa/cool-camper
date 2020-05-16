import React from "react";
import Helmet from "react-helmet";
import SimpleLayout from "../layouts/simple-layout";
import "../../styles/covid-19.css";
import IconLabel from "../../components/icon-label";

export default () => (
  <SimpleLayout className="covid-19-navbar">
    <Helmet>
      <title>
        CoolCamper - Ghid calatorie cu autorulota in timp de SARS-Covid-19
      </title>
      <meta
        name="description"
        content="Ghidul CoolCamper pentru calatoria cu autorulota, pe timp de pandemie!"
      />
    </Helmet>
    <div className="covid-19 container">
      <div className="banner">
        <div className="alert">🦠 &nbsp;&nbsp; Stare de alerta</div>
      </div>
      <div className="question">
        <p className="first">Se poate calatori</p>
        <p className="second">
          cu <span className="autorulota">autorulota</span>?
        </p>
      </div>
      <div className="answer">
        <div className="yes">DA</div>
        <p className="text">se poate pe teritoriul Romaniei</p>
        <p className="quote">
          “deplasarea pentru activităţi recreativ-sportive individuale
          desfăşurate în aer liber (ciclism, drumeţie, alergare, canotaj,
          alpinism, vânătoare, pescuit şi altele) cu participarea a cel mult 3
          persoane„
        </p>
        <p className="source">
          — masura nr. 17, lit. i, anexa 1, din hotararea nr. 24/14.05.2020
          <br />
          sursa:{" "}
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
        <p className="title">Cum sa te pregatesti tu:</p>
        <IconLabel
          size="normal"
          text="Fa-ti un traseu prin tara cu locurile in care vei campa"
        />
        <IconLabel
          size="normal"
          text="Bifeaza cifra 8 in declaratia pe propria raspundere"
        />
        <IconLabel
          size="normal"
          text="Ia-ti toate masurile de precautie: masti de protectie, dezinfectant, distantare sociala (minimum 2m)"
        />
      </div>
      <div className="how-to-section">
        <p className="title">Cum ne pregatim noi:</p>
        <IconLabel
          size="normal"
          text="Lasam 2 zile libere intre rezervari ca sa igienizam si sa aerisim autorulota"
        />
        <IconLabel size="normal" text="..." />
        <IconLabel size="normal" text="..." />
      </div>
      <div className="last"></div>
    </div>
  </SimpleLayout>
);
