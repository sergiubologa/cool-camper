import React from "react";
import ItineraryButton from "./itinerary-header-button";
import itineraries from "./itineraries.conf";

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
          if (this.props.onItineraryClick) {
            this.props.onItineraryClick(itinerary);
          }
        }
      );
    }
  }

  render() {
    const { selectedBtn } = this.state;
    const itinerariesKeys = Object.keys(itineraries);
    return (
      <div className="itinerary__header" id="itinerary-header">
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
