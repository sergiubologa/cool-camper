import React, { useState } from "react";
import ItineraryButton from "./itinerary-header-button";
import itineraries from "./itineraries.conf";

export default props => {
  const [selectedBtn, setSelectedButton] = useState(itineraries.Nordics.name);
  const itinerariesKeys = Object.keys(itineraries);

  const onItineraryClick = itinerary => {
    const foundItinerary = Object.values(itineraries).find(
      it => it.name === itinerary
    );

    if (foundItinerary) {
      setSelectedButton(foundItinerary.name);
      foundItinerary.ref.current.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      });
      if (props.onItineraryClick) {
        props.onItineraryClick(itinerary);
      }
    }
  };

  return (
    <div className="itinerary__header" id="itinerary-header">
      {itinerariesKeys.map(it => (
        <ItineraryButton
          key={it}
          ref={itineraries[it].ref}
          onClick={onItineraryClick.bind(this, itineraries[it].name)}
          className={selectedBtn === itineraries[it].name ? "selected" : ""}
          flags={itineraries[it].flags}
        >
          {itineraries[it].title}
        </ItineraryButton>
      ))}
    </div>
  );
};
