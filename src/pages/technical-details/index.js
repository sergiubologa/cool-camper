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
import "../../styles/our-cars.css";
import SimpleLayout from "../layouts/simple-layout";
import MainAsset from "./components/main-asset";
import OtherAsset from "./components/other-asset";

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
      <header>
        <div className="details">
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
        <div className="title">Dotari</div>
        <div className="info">
          <IconLabel text="ABS" icon={CheckmarkIcon} iconWidth={16} />
          <IconLabel text="Full CASCO" icon={CheckmarkIcon} iconWidth={16} />
        </div>
      </section>

      {/* <h3 className="app__main__title">Detalii tehnice autorulote</h3>
      <h3 className="app__main__title">Benimar Tessoro 495</h3>
      <ul>
        <li>Locuri pe scaun: 5</li>
        <li>Locuri de dormit: 5</li>
        <li>Transmisie Manuala</li>
        <li>Nr. viteze 6</li>
        <li>Combustibil Diesel</li>
        <li>Consum 11 l/100 km</li>
        <li>Lungime 699 cm</li>
        <li>Latime 230 cm</li>
        <li>Inaltime 289 cm</li>
        <li>Putere motor (cp) 170 cp</li>
      </ul>

      <h4 style={{ marginBottom: 0 }}>Siguranta si specificatii tehnice</h4>
      <ul>
        <li>Camera video marsarier</li>
        <li>Sistem ABS de franare</li>
        <li>Inchidere centralizata</li>
        <li>Sistem cruise control (controlul vitezei de deplasare)</li>
        <li>Servodirectie</li>
        <li>Sistem de control electronic al stabilitatii</li>
        <li>Senzori de parcare</li>
      </ul>

      <h4 style={{ marginBottom: 0 }}>In cabina soferului</h4>
      <ul>
        <li>Radio</li>
        <li>USB</li>
        <li>Bluetooth</li>
      </ul>

      <h4 style={{ marginBottom: 0 }}>Incalzire, Apa, Electricitate</h4>
      <ul>
        <li>Apa calda si caldura</li>
        <li>Panouri solare 140 W</li>
        <li>Cablu de alimentare 220W</li>
        <li>Rezervor de apa reziduala (100l)</li>
        <li>Rezervor apa curata (120l)</li>
        <li>Sistem de conectare la retea electrica</li>
        <li>Aer conditionat</li>
        <li>Acumulator stationar</li>
        <li>Furtun de apa</li>
      </ul>

      <h4 style={{ marginBottom: 0 }}>Bucatarie</h4>
      <ul>
        <li>Blat de lucru</li>
        <li>Aragaz</li>
        <li>Chiuveta</li>
        <li>Frigider</li>
        <li>Congelator</li>
        <li>Zona generoasa de living cu masa</li>
        <li>Masa extensibila</li>
      </ul>

      <h4 style={{ marginBottom: 0 }}> Baie</h4>
      <ul>
        <li>Dus</li>
        <li>Chiuveta</li>
        <li>WC</li>
      </ul>

      <h4 style={{ marginBottom: 0 }}>Altele</h4>
      <ul>
        <li>Spatiu depozitare si transport biciclete</li>
        <li>Veranda Fiamma extensibila (3m)</li>
        <li>Spatiu depozitare generos</li>
        <li>Cale de echilibrare</li>
        <li>TV LCD+DVD + antena DVB</li>
      </ul>

      <h4 style={{ marginBottom: 0 }}>Tarifele includ</h4>
      <ul>
        <li>Asigurare full CASCO</li>
        <li>Rovignetă</li>
        <li>Număr nelimitat de km</li>
        <li>Suport de biciclete</li>
        <li>Masă și scaune de camping</li>
        <li>Așternuturi, perne și lenjerii de pat</li>
        <li>Prosoape de baie</li>
        <li>
          Consumabile (hartie igienica solubila, substante chimice pentru WC-ul
          ecologic)
        </li>
        <li>Veselă, oale și tigăi pentru gătit</li>
        <li>Anularea rezervării este gratuită, oricând</li>
      </ul>

      <h4 style={{ marginBottom: 0 }}>Tarifele nu includ</h4>
      <ul>
        <li>Vignete sau alte taxe in afara Romaniei</li>
      </ul>

      <h4 style={{ marginBottom: 0 }}>Conditii de inchiriere</h4>
      <ul>
        <li>Permis de conducere categoria B cu cel putin 5 ani vechime</li>
        <li>Varsta minima: 25 ani</li>
      </ul>

      <h4>Fara taxa de igienizare si consumabile</h4>
      <h4 style={{ marginTop: 0 }}>
        Garantie returnabila de {pricesData.deposit} de euro
      </h4>

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
