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

export default {
  Nordics: {
    name: "nordics",
    title: "Țările Nordice",
    flags: [Sweden, Danemark, Norway],
    ref: React.createRef(),
    images: [
      {
        src: "http://placekitten.com/873/600"
      },
      {
        src: "http://placekitten.com/g/873/600"
      },
      {
        src: "http://placekitten.com/g/873/600"
      },
      {
        src: "http://placekitten.com/g/873/600"
      }
    ]
  },
  Balkans: {
    name: "balkans",
    title: "Balcani",
    flags: [Serbia, Bosnia, Croatia],
    ref: React.createRef(),
    images: [
      {
        src: "http://placekitten.com/g/800/600"
      },
      {
        src: "http://placekitten.com/800/600"
      },
      {
        src: "http://placekitten.com/g/800/600"
      }
    ]
  },
  WesternEurope: {
    name: "western-europe",
    title: "Europa de Vest",
    flags: [Slovenia, Italy, France, Austria, Hungary],
    ref: React.createRef(),
    images: [
      {
        src: "http://placekitten.com/800/600"
      },
      {
        src: "http://placekitten.com/g/800/600"
      }
    ]
  }
};
