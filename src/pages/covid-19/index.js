import React from "react";
import Helmet from "react-helmet";
import SimpleLayout from "../layouts/simple-layout";

export default () => (
  <SimpleLayout>
    <Helmet>
      <title>
        CoolCamper - Ghid calatorie cu autorulota in timp de SARS-Covid-19
      </title>
      <meta
        name="description"
        content="Ghidul CoolCamper pentru calatoria cu autorulota, pe timp de pandemie!"
      />
    </Helmet>
    <div className="covid-19 container">
      <h1>Covid-19</h1>
    </div>
  </SimpleLayout>
);
