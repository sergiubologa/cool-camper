import React, { useState } from "react";
import Header from "./itinerary-header";
import SectionMediaSlider from "../section-media-slider";
import itineraries from "./itineraries.conf";

export default () => {
  const [itinerary, setItinerary] = useState(itineraries.Nordics.name);
  const images = Object.values(itineraries).find(it => it.name === itinerary)
    .images;

  return (
    <SectionMediaSlider
      images={images}
      header={<Header onItineraryClick={name => setItinerary(name)} />}
    />
  );
};
