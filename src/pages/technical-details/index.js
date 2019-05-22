import React from "react";
import Helmet from "react-helmet";
import FordIcon from "../../assets/img/ford.svg";
import PremiumBadge from "../../assets/img/premium-badge.png";
import IconLabel from "../../components/icon-label";
import BedIcon from "../../components/svg/bed";
import CarOilIcon from "../../components/svg/car-oil";
import CarSeatIcon from "../../components/svg/car-seat";
import CheckmarkIcon from "../../components/svg/checkmark";
import EngineIcon from "../../components/svg/engine";
import IconDashboard from "../../components/svg/icon-dashboard";
import IconStar from "../../components/svg/icon-star";
import IconRec from "../../components/svg/rec";
import "../../styles/our-cars.css";
import SimpleLayout from "../layouts/simple-layout";
import MainAsset from "./components/main-asset";
import OtherAsset from "./components/other-asset";
import { pricesData } from "coolcamper-common";

const getVideoUrl = () => {
  const videoId = "8X-hB3X2Db0";
  const videoBaseUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
  const params = {
    controls: 1,
    hl: "ro",
    iv_load_policy: 3,
    loop: 1,
    // playlist: videoId,
    modestbranding: 1,
    origin: "https://coolcamper.ro"
  };
  const paramsAsString = Object.keys(params).reduce((urlParams, key, index) => {
    const prefix = index === 0 ? "?" : "&";
    const value = params[key];
    return urlParams + `${prefix}${key}=${value}`;
  }, "");

  return `${videoBaseUrl}${paramsAsString}`;
};

export default () => (
  <SimpleLayout>
    <Helmet>
      <title>CoolCamper - Detalii tehnice autorulote</title>
      <meta
        name="description"
        content="Autorulote noastre sunt noi, cu toate dotarile necesare pentru o vacanta reusita. Inchiriaza acum o autorulota de la CoolCamper!"
      />
    </Helmet>
    <div className="our-cars container">
      <div className="title">
        <h2>Benimar Tessoro 495</h2>
        <img
          src={PremiumBadge}
          alt="Autorulota Premium"
          className="premium-badge"
        />
        <div className="model">
          <IconStar width="24" palette="green" /> model 2019
        </div>
      </div>
      <header>
        <div className="details">
          <h3>Principalele caracteristici</h3>
          <div className="main-assets">
            <MainAsset
              icon={CarSeatIcon}
              palette="purple"
              text="5 locuri pe scaune"
            />
            <MainAsset
              icon={BedIcon}
              palette="purple"
              text="5 locuri de dormit"
            />
            <MainAsset
              icon={CarOilIcon}
              palette="purple"
              text="alimentare diesel"
            />
            <MainAsset
              icon={IconDashboard}
              palette="purple"
              text="Consum: 9-10l / 100km"
            />
            <MainAsset
              icon={EngineIcon}
              iconWidth="70px"
              palette="purple"
              text="170 de cai putere"
            />
            <MainAsset
              icon={() => <img src={FordIcon} alt="Ford" />}
              iconWidth="50px"
              palette="purple"
              text="Sasiu Ford"
            />
          </div>
          <div className="other-assets">
            <OtherAsset title="Lungime" text="6,99m" />
            <OtherAsset title="Latime" text="2,30m" />
            <OtherAsset title="Inaltime" text="2,89m" />
            <OtherAsset title="Viteze" text="6" />
          </div>
        </div>
        <div className="media">
          <div className="video-wrapper">
            <iframe
              title="Benimar Tessoro 495"
              width="560"
              height="315"
              src={getVideoUrl()}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </header>

      <section>
        <div className="title">Siguranta</div>
        <div className="info">
          <IconLabel
            text="Camera video marsarier"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Sistem ABS de franare"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Senzori de parcare"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Inchidere centralizata"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Sistem cruise control (controlul vitezei de deplasare)"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Sistem de control electronic al stabilitatii"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Servodirectie"
            icon={CheckmarkIcon}
            className="label"
          />
        </div>
      </section>

      <section>
        <div className="title">Utilitati</div>
        <div className="info">
          <IconLabel
            text="Apa calda si caldura"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Panouri solare 140 W"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Cablu de alimentare 220W"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Rezervor de apa reziduala (100l)"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Rezervor apa curata (120l)"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Sistem de conectare la retea electrica"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Aer conditionat"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Acumulator stationar"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Furtun de apa"
            icon={CheckmarkIcon}
            className="label"
          />
        </div>
      </section>

      <section>
        <div className="title">Bucatarie</div>
        <div className="info two-cols">
          <IconLabel
            text="Blat de lucru"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel text="Aragaz" icon={CheckmarkIcon} className="label" />
          <IconLabel text="Chiuveta" icon={CheckmarkIcon} className="label" />
          <IconLabel text="Frigider" icon={CheckmarkIcon} className="label" />
          <IconLabel text="Congelator" icon={CheckmarkIcon} className="label" />
          <IconLabel
            text="Masa extensibila"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Zona generoasa de luat masa"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Veselă, oale și tigăi pentru gătit"
            icon={CheckmarkIcon}
            className="label"
          />
        </div>
      </section>

      <section>
        <div className="title">Baie</div>
        <div className="info two-cols">
          <IconLabel text="Dus" icon={CheckmarkIcon} className="label" />
          <IconLabel text="Chiuveta" icon={CheckmarkIcon} className="label" />
          <IconLabel text="WC" icon={CheckmarkIcon} className="label" />
          <IconLabel text="Prosoape" icon={CheckmarkIcon} className="label" />
        </div>
      </section>

      <section>
        <div className="title">Altele</div>
        <div className="info">
          <IconLabel
            text="Veranda Fiamma extensibila (3m)"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Suport de 4 biciclete"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Cale de echilibrare"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Masă și scaune de camping"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Spatiu de depozitare generos"
            icon={CheckmarkIcon}
            className="label"
          />
        </div>
      </section>

      <section>
        <div className="title">Beneficii incluse in pret</div>
        <div className="info">
          <IconLabel
            text="Asigurare full CASCO (fransiza de 250euro / eveniment)"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Asistenta rutiera Ford 24/24"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel text="Rovigneta" icon={CheckmarkIcon} className="label" />
          <IconLabel
            text="Numar nelimitat de km"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Consumabile (hartie igienica solubila, substante chimice pentru WC-ul
          ecologic)"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Nu percepem taxa de igienizare si consumabile"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Anularea rezervarii este gratuita, oricand"
            icon={CheckmarkIcon}
            className="label"
          />
        </div>
      </section>

      <section>
        <div className="title">NU sunt incluse in pret</div>
        <div className="info">
          <IconLabel
            text="Combustibilul"
            icon={IconRec}
            palette="red"
            className="label"
          />
          <IconLabel
            text="Taxele de drum in afara tarii"
            icon={IconRec}
            palette="red"
            className="label"
          />
          <IconLabel
            text="Taxele de camping"
            icon={IconRec}
            palette="red"
            className="label"
          />
        </div>
      </section>

      <section>
        <div className="title">Conditii de inchiriere</div>
        <div className="info">
          <IconLabel
            text="Permis de conducere categoria B cu cel putin 5 ani vechime"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text="Varsta minima: 25 ani"
            icon={CheckmarkIcon}
            className="label"
          />
          <IconLabel
            text={`Percepem o garantie de ${pricesData.deposit} de euro`}
            icon={CheckmarkIcon}
            className="label"
          />
        </div>
      </section>

      {/* 
        <li>Transmisie Manuala</li>

      <h4 style={{ marginBottom: 0 }}>In cabina soferului</h4>
      <ul>
        <li>Radio</li>
        <li>USB</li>
        <li>Bluetooth</li>
      </ul>

      <br />
      <Link
        className="button button__primary"
        to="/rezervare-autorulota"
        ga-on="click,auxclick,contextmenu"
        ga-event-category="Button"
        ga-event-action="Închiriază acum o autorulotă"
        ga-event-label="technical details page"
      >
        Închiriază acum o autorulotă
      </Link> */}
    </div>
  </SimpleLayout>
);
