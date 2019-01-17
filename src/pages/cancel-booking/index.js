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
    <h3>
      Ce reprezinta politica de anulare si modificare a rezervarii unei
      autorulote?
    </h3>
    <p>
      Te rugam sa citesti cu atentie politica de anulare si modificare inainte
      de efectuarea rezervarii.
    </p>
    <p>
      Politica de anulare si modificare prezinta conditiile si penalizarile care
      pot fi aplicate de catre firma de inchiriere de autorulote, in acest caz
      de CoolCamper S.R.L., in cazul in care soliciti anularea sau modificarea
      rezervarii.{" "}
    </p>

    <p>
      Rezervarea se garanteaza din momentul achitarii unui avans de 30% din
      valoarea totala.{" "}
    </p>
    <p>
      Anularea oricarei rezervari indiferent de durata sau data acesteia, este
      gratuita. <br />
      Avansul este 100% returnabil in cazul anularii, oricare ar fi motivul
      acesteia.
    </p>

    <p>Termenul de returnare al avansului este de maxim 15 zile lucratoare.</p>
    <p>
      In cazul modificarii rezervarii, CoolCamper nu va garanteaza ca aceasta se
      va poate realiza, datorita gradului de ocupare foarte mare in sezon. Cu
      toate acestea, va rugam sa ne contactati telefonic si vom incerca sa va
      ajutam. <br />
      Daca rezervarea nu se poate modifica si doriti sa o anulati, veti primi
      inapoi avansul.
    </p>
  </LegalLeftNavLayout>
);
