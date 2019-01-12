import React from "react";
import LegalLeftNavLayout from "../layouts/legal-left-navigation";
import Helmet from "react-helmet";

export default () => (
  <LegalLeftNavLayout>
    <Helmet>
      <title>CoolCamper - Anularea unei rezervari</title>
      <meta
        name="description"
        content="Politica de anulare a rezervarilor pe CoolCamper!"
      />
    </Helmet>
    <h3 className="app__main__title">Anulare rezervare</h3>
  </LegalLeftNavLayout>
);
