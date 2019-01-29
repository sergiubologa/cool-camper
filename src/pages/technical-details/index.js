import React from "react";
import LegalLeftNavLayout from "../layouts/legal-left-navigation";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

export default () => (
  <LegalLeftNavLayout>
    <Helmet>
      <title>CoolCamper - Detalii tehnice autorulote</title>
      <meta
        name="description"
        content="Autorulote noastre sunt noi, cu toate dotarile necesare pentru o vacanta reusita. Inchiriaza acum o autorulota de la CoolCamper!"
      />
    </Helmet>
    <h3 className="app__main__title">Detalii tehnice autorulote</h3>
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
    <h4 style={{ marginTop: 0 }}>Fara garantie</h4>

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
    </Link>
  </LegalLeftNavLayout>
);
