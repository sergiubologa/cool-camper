import React from "react";
import Header from "./itinerary-header";
import ImagesSlider from "./itinerary-image-slider";
import itineraries from "./itineraries.conf";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onItineraryClick = this.onItineraryClick.bind(this);
    this.state = {
      selectedItinerary: itineraries.Nordics.name
    };
  }

  onItineraryClick(itineraryName) {
    this.setState({
      selectedItinerary: itineraryName
    });
  }

  render() {
    const { selectedItinerary: itinerary } = this.state;
    const images = Object.values(itineraries).find(it => it.name === itinerary)
      .images;
    return (
      <div className="expanded__media itinerary">
        <Header onItineraryClick={this.onItineraryClick} />
        <ImagesSlider images={images} />
      </div>
    );
  }
}
