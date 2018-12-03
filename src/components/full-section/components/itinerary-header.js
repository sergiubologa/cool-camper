import React from "react";
import ItineraryButton from "./itinerary-header-button";
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

const itineraries = {
  Nordics: {
    name: "nordics",
    title: "Țările Nordice",
    flags: [Sweden, Danemark, Norway],
    ref: React.createRef()
  },
  Balkans: {
    name: "balkans",
    title: "Balcani",
    flags: [Serbia, Bosnia, Croatia],
    ref: React.createRef()
  },
  WesternEurope: {
    name: "western-europe",
    title: "Europa de Vest",
    flags: [Slovenia, Italy, France, Austria, Hungary],
    ref: React.createRef()
  }
};

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onItineraryClick = this.onItineraryClick.bind(this);
    this.state = {
      selectedBtn: itineraries.Nordics.name
    };
  }

  onItineraryClick(itinerary) {
    const foundItinerary = Object.values(itineraries).find(
      it => it.name === itinerary
    );

    if (foundItinerary) {
      this.setState(
        {
          selectedBtn: foundItinerary.name
        },
        () => {
          foundItinerary.ref.current.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          });
        }
      );
    }
  }

  render() {
    const { selectedBtn } = this.state;
    const itinerariesKeys = Object.keys(itineraries);
    return (
      <div className="itinerary__header">
        {itinerariesKeys.map(it => (
          <ItineraryButton
            key={it}
            ref={itineraries[it].ref}
            onClick={this.onItineraryClick.bind(this, itineraries[it].name)}
            className={selectedBtn === itineraries[it].name ? "selected" : ""}
            flags={itineraries[it].flags}
          >
            {itineraries[it].title}
          </ItineraryButton>
        ))}
      </div>
    );
  }
}
