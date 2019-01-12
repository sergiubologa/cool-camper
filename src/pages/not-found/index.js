import React from "react";
import SimpleLayout from "../layouts/simple-layout";
import Helmet from "react-helmet";

export default () => (
  <SimpleLayout>
    <Helmet>
      <title>CoolCamper - 404 Pagina lipsa</title>
      <meta
        name="description"
        content="404 - Pagina dorita nu a putut fi gasita."
      />
    </Helmet>
    <h1>Not Found</h1>
  </SimpleLayout>
);
