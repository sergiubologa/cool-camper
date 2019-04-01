import React, { Component } from "react";

import Motorhome from "../../assets/img/motorhome.svg";
import MapLight from "../../assets/img/map_light.svg";
import Support from "../../assets/img/support.svg";
import MobilePhone from "../../assets/img/mobile-phone.svg";
import Inbox from "../../assets/img/inbox.svg";
import { Link } from "react-router-dom";
import Hero from "../../components/hero";
import TransparentNavbarLayout from "../layouts/transparent-navbar-layout";
import StepsContainer, {
  StepsHeader,
  Steps,
  Step,
  StepMedia,
  StepText,
  StepsMoreInfo,
  StepsInfo
} from "../../components/steps";
import FullSection, {
  SectionMediaSlider,
  SectionContent,
  SectionText,
  SectionTitle,
  SectionMediaItinerary
} from "../../components/full-section";
import CTAFullSection, {
  CTATitle,
  CTAMessage
} from "../../components/cta-full-section";
import FAQs from "../../components/faqs";
import Prices from "../../components/prices";
import faqQuestions from "../../static-data/faq-questions";
import motorhomeImages from "../../static-data/motorhome-images";
import Button from "../../components/inputs/button";
import IconLabel from "../../components/icon-label";
import SmartphoneIcon from "../../components/svg/smartphone";
import ContactForm from "./components/contact-form";
import Helmet from "react-helmet";

class Home extends Component {
  componentDidMount() {
    if (window.Trustpilot !== undefined) {
      var trustbox = document.getElementById("trustbox");
      window.Trustpilot.loadFromElement(trustbox);
    }
  }

  render() {
    return (
      <TransparentNavbarLayout>
        <Helmet>
          <title>
            CoolCamper - Inchirieri Autorulote, Autorulote de Inchiriat {"🚐"} |
            Cluj-Napoca
          </title>
          <meta
            name="description"
            content="Inchiriere autorulote Romania 🇹🇩, autorulote de inchiriat din Cluj-Napoca. | Modele noi 2019 ✨ | Asigurare full CASCO 🛡 | Vacante in Romania si in Europa cu autorulotele CoolCamper!"
          />
        </Helmet>
        <Hero withSub />

        <StepsContainer>
          <StepsHeader>
            <h2 id="why-coolcamper">De ce CoolCamper?</h2>
            <p>
              Iată câteva motive pentru care ar trebui să închiriezi o
              autorulotă de la noi
            </p>
          </StepsHeader>
          <Steps>
            <Step>
              <StepMedia src={Motorhome} />
              <h4>Autorulote noi</h4>
              <StepText>
                Autorulotele noastre sunt modele 2019 cu toate dotările necesare
                pentru o vacanță de neuitat!
              </StepText>
            </Step>
            <Step>
              <StepMedia src={MapLight} />
              <h4>Itinerarii pe rute populare</h4>
              <StepText>
                Ca să îți facem viața mai ușoară ți-am pregătit și itinerarii pe
                cele mai populare rute pentru autorulote. Ca să te bucuri cu
                adevărat de vacanță.
              </StepText>
            </Step>
            <Step>
              <StepMedia src={Support} />
              <h4>Asistență 24/7</h4>
              <StepText>
                Ne poți contacta 24/7 pentru a ne cere ajutorul cu absolut orice
                problemă întâmpini. Prin telefon, email sau videoconferință.
              </StepText>
            </Step>
          </Steps>
          <StepsMoreInfo text="vezi toate avantajele">
            <StepsInfo text="Pick-up de la aeroport" />
            <StepsInfo text="Șoferi multipli, fără taxe suplimentare" />
            <StepsInfo text="Asigurare RCA și full CASCO în toată Europa" />
            <StepsInfo text="Parcare asigurată pentru mașina personală pe parcursul închirierii autorulotei" />
            <StepsInfo text="Fără limită de kilometri" />
            <StepsInfo text="Suntem prietenoși, voioși și dornici să te ajutăm să trăiești cea mai tare aventură" />
          </StepsMoreInfo>
        </StepsContainer>

        <FullSection>
          <div
            id="trustbox"
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="5419b6a8b0d04a076446a9ad"
            data-businessunit-id="5c1873b116ae040001e02a75"
            data-style-height="24px"
            data-style-width="100%"
            data-theme="light"
          >
            <a
              href="https://www.trustpilot.com/review/coolcamper.ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              CoolCamper pe Trustpilot
            </a>
          </div>
        </FullSection>

        <FullSection oneCol={true}>
          <SectionTitle id="motorhome-images">
            Autorulotele noastre
          </SectionTitle>
          <SectionText style={{ marginTop: 0 }}>
            Autorulotele noastre sunt modele noi din anul 2019. Știm cât de mult
            contează să te simți în siguranță, astfel în fiecare an ne reînoim
            flota pentru a avea mereu autorulote moderne de închiriat. Vezi{" "}
            <Link
              to="/detalii-tehnice-autorulota"
              className="link"
              ga-on="click,auxclick,contextmenu"
              ga-event-category="Link"
              ga-event-action="aici"
              ga-event-label="motorhome images section"
            >
              aici
            </Link>{" "}
            mai multe detalii tehnice.
          </SectionText>
          <SectionMediaSlider
            images={motorhomeImages}
            fullWidth={true}
            style={{ maxWidth: 873 }}
          />
        </FullSection>

        <FullSection>
          <SectionContent>
            <SectionTitle>Itinerarii pentru autorulote</SectionTitle>
            <SectionText>
              Ți-am pregătit itinerarii complete cu cele mai populare rute alese
              de clienții noștri pentru a te putea bucura cu adevărat de vacanța
              cu autorulota.
            </SectionText>
            <SectionText>
              Odată rezervată autorulota vei primi pe email un document cu toate
              detaliile traseului pe care l-ai ales, dar vei găsi și un pliant
              printat în rulotă.
            </SectionText>
            <h4>Ce conține un itinerariu?</h4>
            <div className="container itinerary__content">
              <IconLabel text="traseul complet recomandat de noi" />
              <IconLabel text="cele mai frumoase destinații de pe traseu" />
              <IconLabel text="timpii de condus în fiecare zi" />
              <IconLabel text="locurile de campare și prețurile aferente" />
            </div>
          </SectionContent>
          <SectionMediaItinerary />
        </FullSection>

        <FullSection oneCol={true}>
          <SectionTitle id="prices">Prețuri</SectionTitle>
          <Prices />
        </FullSection>

        <FullSection oneCol={true}>
          <SectionTitle>Întrebări frecvente</SectionTitle>
          <FAQs questions={faqQuestions} />
        </FullSection>

        <StepsContainer>
          <StepsHeader>
            <h2>Contactează-ne!</h2>
            <p>
              Nu ezita să ne contactezi pentru orice problemă sau nelămurire
              întâmpini. Suntem aici ca să te ajutăm!
            </p>
          </StepsHeader>

          <Steps className="contact__container">
            <Step>
              <StepMedia src={Inbox} />
              <h4>Email</h4>
              <StepText>
                Scrie-ne un email cu orice ai vrea să știi dar nu ai găsit pe
                site.
              </StepText>

              <a
                href="mailto:contact@coolcamper.ro"
                title="Email CoolCamper.ro"
                className="contact__email"
                ga-on="click,auxclick,contextmenu"
                ga-event-category="Link"
                ga-event-action="contact@coolcamper.ro"
                ga-event-label="contact us"
              >
                contact@coolcamper.ro
              </a>
            </Step>
            <Step>
              <StepMedia src={MobilePhone} />
              <h4>Telefon</h4>
              <StepText>
                Sună-ne pentru orice urgență sau problemă pe care o întâmpini!
              </StepText>
              <Button
                type="accent"
                className="contact__phone"
                onClick={() => window.open("tel:+40742291018", "_self")}
                renderIcon={() => <SmartphoneIcon color="#fff" width="20" />}
                ga-on="click,auxclick,contextmenu"
                ga-event-category="Button"
                ga-event-action="0742-291.018"
                ga-event-label="contact us"
              >
                0742-291.018
              </Button>

              <div>
                <small>disponibil 24/7</small>
              </div>
            </Step>

            <Step>
              <h4>Scrie-ne un mesaj</h4>
              <ContactForm />
            </Step>
          </Steps>
        </StepsContainer>

        <CTAFullSection>
          <CTATitle>Închiriază acum o autorulotă!</CTATitle>
          <CTAMessage>
            Rezervă o autorulotă și trăiește o experiență de neuitat!
          </CTAMessage>
          <Link
            className="button button__accent"
            to="/rezervare-autorulota"
            ga-on="click,auxclick,contextmenu"
            ga-event-category="Button"
            ga-event-action="Verifică disponibilitatea"
            ga-event-label="bottom CTA section"
          >
            Verifică disponibilitatea
          </Link>
        </CTAFullSection>
      </TransparentNavbarLayout>
    );
  }
}

export default Home;
