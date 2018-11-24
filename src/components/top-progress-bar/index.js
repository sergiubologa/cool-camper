import React from "react";
import TopBarProgress from "react-topbar-progress-indicator";

// Init config for topbar progress indicator
TopBarProgress.config({
  barColors: {
    "0": "#81c784",
    "0.5": "#81c784",
    "1.0": "#81c784"
  },
  barThickness: 3,
  shadowBlur: 0,
  shadowColor: "#000"
});

export default props => props.show && <TopBarProgress />;
