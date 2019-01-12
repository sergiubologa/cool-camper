import React from "react";
import LegalLeftNavLayout from "../layouts/legal-left-navigation";
import Helmet from "react-helmet";

export default () => (
  <LegalLeftNavLayout>
    <Helmet>
      <title>CoolCamper - Politica de confidentialitate</title>
      <meta
        name="description"
        content="Politica de confidentialitate CoolCamper in ceea ce priveste datele folosite!"
      />
    </Helmet>
    <h3 className="app__main__title">Politica de confidentialitate</h3>
  </LegalLeftNavLayout>
);
