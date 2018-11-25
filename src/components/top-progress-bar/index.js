import React from "react";
import TopBarProgress from "react-topbar-progress-indicator";

// Init config for topbar progress indicator
TopBarProgress.config({
  barColors: {
    "0": "#fff",
    "0.5": "#fff",
    "1.0": "#fff"
  },
  barThickness: 5,
  shadowBlur: 0,
  shadowColor: "#000"
});

export default props => props.show && <TopBarProgress />;
