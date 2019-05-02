import React from "react";
import SimpleLayout from "../layouts/simple-layout";
import Helmet from "react-helmet";
import NotFound from "../../assets/img/404.svg";

export default () => (
  <SimpleLayout>
    <Helmet>
      <title>CoolCamper - 404 Pagina lipsa</title>
      <meta
        name="description"
        content="404 - Pagina dorita nu a putut fi gasita."
      />
    </Helmet>
    <div className="not-found-container">
      <img src={NotFound} alt="Datele sunt în siguranță" />
    </div>
  </SimpleLayout>
);
