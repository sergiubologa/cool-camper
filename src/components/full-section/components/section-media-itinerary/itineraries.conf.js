import React from "react";
import Sweden from "flag-icon-css/flags/4x3/se.svg";
import Danemark from "flag-icon-css/flags/4x3/dk.svg";
import Norway from "flag-icon-css/flags/4x3/no.svg";
import Serbia from "flag-icon-css/flags/4x3/rs.svg";
import Bosnia from "flag-icon-css/flags/4x3/ba.svg";
import Croatia from "flag-icon-css/flags/4x3/hr.svg";
import Slovenia from "flag-icon-css/flags/4x3/si.svg";
import Italy from "flag-icon-css/flags/4x3/it.svg";
import France from "flag-icon-css/flags/4x3/fr.svg";
import Austria from "flag-icon-css/flags/4x3/at.svg";
import Hungary from "flag-icon-css/flags/4x3/hu.svg";

import Nordics3 from "../../../../assets/img/itineraries/nordics/Alesund_Norway_1.jpg";
import Nordics1 from "../../../../assets/img/itineraries/nordics/Atlantic_Road_Bergen_Norway_2.jpg";
import Nordics2 from "../../../../assets/img/itineraries/nordics/Atlantic_Road_Bergen_Norway_4.jpg";
import Nordics4 from "../../../../assets/img/itineraries/nordics/Copenhaga_Denmark_2.jpg";
import Nordics5 from "../../../../assets/img/itineraries/nordics/Geirengerfjord_Norway_2.jpg";
import Nordics6 from "../../../../assets/img/itineraries/nordics/Skansen_Sweden_4.jpg";
import Nordics7 from "../../../../assets/img/itineraries/nordics/Stockholm_Sweden_6.jpg";
import Nordics8 from "../../../../assets/img/itineraries/nordics/Stockholm_Sweden_7.jpg";

import Balkans5 from "../../../../assets/img/itineraries/balkans/Dubrovnik_Crotia_2.jpg";
import Balkans2 from "../../../../assets/img/itineraries/balkans/Dubrovnik_Crotia_3.jpg";
import Balkans3 from "../../../../assets/img/itineraries/balkans/Dubrovnik_Crotia_5.jpg";
import Balkans4 from "../../../../assets/img/itineraries/balkans/Dubrovnik_Crotia_6.jpg";
import Balkans1 from "../../../../assets/img/itineraries/balkans/Kotor_Muntenegru_1.jpg";
import Balkans6 from "../../../../assets/img/itineraries/balkans/Kotor_Muntenegru_5.jpg";
import Balkans7 from "../../../../assets/img/itineraries/balkans/PlitviceLakes_Croatia_1.jpg";
import Balkans8 from "../../../../assets/img/itineraries/balkans/PlitviceLakes_Croatia_2.jpg";
import Balkans9 from "../../../../assets/img/itineraries/balkans/PlitviceLakes_Croatia_5.jpg";
import Balkans10 from "../../../../assets/img/itineraries/balkans/Split_Croatia_1.jpg";

import West2 from "../../../../assets/img/itineraries/west/Italy_scooter.jpg";
import West1 from "../../../../assets/img/itineraries/west/Italy_mountains.jpg";
import West3 from "../../../../assets/img/itineraries/west/hallstatt-3609863_1920.jpg";
import West4 from "../../../../assets/img/itineraries/west/budapest_1.jpg";
import West5 from "../../../../assets/img/itineraries/west/paris_1.jpg";
import West6 from "../../../../assets/img/itineraries/west/paris_3.jpg";
import West7 from "../../../../assets/img/itineraries/west/salzburg_1.jpg";
import West8 from "../../../../assets/img/itineraries/west/strasbourg.jpg";

export default {
  Nordics: {
    name: "nordics",
    title: "Țările Nordice",
    flags: [Sweden, Danemark, Norway],
    ref: React.createRef(),
    images: [
      { src: Nordics1, alt: "Itinerariu Tarile Nordice" },
      { src: Nordics2, alt: "Itinerariu Tarile Nordice" },
      { src: Nordics3, alt: "Itinerariu Tarile Nordice" },
      { src: Nordics4, alt: "Itinerariu Tarile Nordice" },
      { src: Nordics5, alt: "Itinerariu Tarile Nordice" },
      { src: Nordics6, alt: "Itinerariu Tarile Nordice" },
      { src: Nordics7, alt: "Itinerariu Tarile Nordice" },
      { src: Nordics8, alt: "Itinerariu Tarile Nordice" }
    ]
  },
  Balkans: {
    name: "balkans",
    title: "Balcani",
    flags: [Serbia, Bosnia, Croatia],
    ref: React.createRef(),
    images: [
      { src: Balkans1, alt: "Itinerariu Balcani" },
      { src: Balkans2, alt: "Itinerariu Balcani" },
      { src: Balkans3, alt: "Itinerariu Balcani" },
      { src: Balkans4, alt: "Itinerariu Balcani" },
      { src: Balkans5, alt: "Itinerariu Balcani" },
      { src: Balkans6, alt: "Itinerariu Balcani" },
      { src: Balkans7, alt: "Itinerariu Balcani" },
      { src: Balkans8, alt: "Itinerariu Balcani" },
      { src: Balkans9, alt: "Itinerariu Balcani" },
      { src: Balkans10, alt: "Itinerariu Balcani" }
    ]
  },
  WesternEurope: {
    name: "western-europe",
    title: "Europa de Vest",
    flags: [Slovenia, Italy, France, Austria, Hungary],
    ref: React.createRef(),
    images: [
      { src: West1, alt: "Itinerariu Vestul Europei" },
      { src: West2, alt: "Itinerariu Vestul Europei" },
      { src: West3, alt: "Itinerariu Vestul Europei" },
      { src: West4, alt: "Itinerariu Vestul Europei" },
      { src: West5, alt: "Itinerariu Vestul Europei" },
      { src: West6, alt: "Itinerariu Vestul Europei" },
      { src: West7, alt: "Itinerariu Vestul Europei" },
      { src: West8, alt: "Itinerariu Vestul Europei" }
    ]
  }
};
