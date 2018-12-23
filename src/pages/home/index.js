import React, { Component } from "react";

import Motorhome from "../../assets/img/motorhome.svg";
import MapLight from "../../assets/img/map_light.svg";
import Support from "../../assets/img/support.svg";
import Payment from "../../assets/img/payment.svg";
import Android from "../../assets/img/android.svg";
import Inbox from "../../assets/img/inbox.svg";

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
  SectionMedia,
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
import faqQuestions from "../../static-data/faq-questions";
import motorhomeImages from "../../static-data/motorhome-images";
import Button from "../../components/inputs/button";
import IconLabel from "../../components/icon-label";
import SmartphoneIcon from "../../components/svg/smartphone";

class Home extends Component {
  render() {
    return (
      <TransparentNavbarLayout>
        <Hero withSub />

        <StepsContainer>
          <StepsHeader>
            <h2>De ce CoolCamper?</h2>
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
                Autorulotele noastre sunt modele 2018+ cu toate dotările
                necesare pentru o vancanță de neuitat!
              </StepText>
            </Step>
            <Step>
              <StepMedia src={MapLight} />
              <h4>Itinerarii pe rute populare</h4>
              <StepText>
                Ca să îți facem viața mai ușoară ți-am pregătit si itinerarii pe
                cele mai populare rute. Ca să te bucuri cu adevărat de vacanță.
              </StepText>
            </Step>
            <Step>
              <StepMedia src={Support} />
              <h4>Suport 24/24</h4>
              <StepText>
                Ne poți contacta 24/24 pentru a ne cere ajutorul cu absolut
                orice problemă întâmpini. Prin telefon, email sau
                videoconferință.
              </StepText>
            </Step>
          </Steps>
          <StepsMoreInfo text="vezi toate avantajele">
            <StepsInfo text="Pick-up direct de la aeroport" />
            <StepsInfo text="Multipli șoferi, fără taxe suplimentare" />
            <StepsInfo text="Asigurare RCA și full CASCO în toată Europa" />
            <StepsInfo text="Parcare asigurată pentru mașina ta pe parcursul închirierii autorulotei" />
            <StepsInfo text="Fără limită de kilometri" />
            <StepsInfo text="Suntem prietenoși, happy și dornici să te ajutăm să trăiești cea mai tare aventură" />
          </StepsMoreInfo>
        </StepsContainer>

        <FullSection>
          <SectionMediaSlider images={motorhomeImages} />
          <SectionContent>
            <SectionTitle>Autorulotele noastre</SectionTitle>
            <SectionText>Avem autorulote noi, ultimul model!</SectionText>
          </SectionContent>
        </FullSection>

        <FullSection>
          <SectionContent>
            <SectionTitle>Itinerarii</SectionTitle>
            <SectionText>
              Ți-am pregătit itinerarii complete cu cele mai populare rute alese
              de clienții noștri pentru a te putea bucura cu adevărat de
              vacanță.
            </SectionText>
            <SectionText>
              Vei primi pe email un document cu toate detaliile traseului pe
              care l-ai ales, dar vei găsi și un pliant printat în rulotă.
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

        <FullSection>
          <SectionContent>
            <SectionTitle>Preturi</SectionTitle>
            <SectionText>
              Evie has zero dependencies and uses vanilla JavaScript for a few
              functions with minimal footprint. You can use React, Vue, Angular,
              jQuery or whatever you prefer.
            </SectionText>
          </SectionContent>
          <SectionMedia src={Payment} />
        </FullSection>

        <FullSection>
          <div
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
          <SectionTitle>Întrebări frecvente</SectionTitle>
          <FAQs questions={faqQuestions} />
        </FullSection>

        <StepsContainer>
          <StepsHeader>
            <h2>Contacteaza-ne!</h2>
            <p>
              Nu ezita sa ne contactezi pentru orice problema sau nelamurire
              intampini. Suntem aici ca sa te ajutam!
            </p>
          </StepsHeader>

          <Steps className="contact__container">
            <Step>
              <StepMedia src={Inbox} />
              <h4>Email</h4>
              <StepText>
                Scrie-ne un email orice ai vrea sa stii dar nu ai gasit pe site.
              </StepText>

              <a
                href="mailto:contact@coolcamper.ro"
                title="Email CoolCamper.ro"
                className="contact__email"
              >
                contact@coolcamper.ro
              </a>
            </Step>
            <Step>
              <StepMedia src={Android} />
              <h4>Telefon</h4>
              <StepText>
                Suna-ne pentru orice urgenta sau problema pe care o intampini!
              </StepText>
              <Button
                type="accent"
                className="contact__phone"
                onClick={() => window.open("tel:+40742291018", "_self")}
                renderIcon={() => <SmartphoneIcon color="#fff" width="20" />}
              >
                0742-291.018
              </Button>

              <div>
                <small>disponibil 24/7</small>
              </div>
            </Step>

            <Step>
              <h4>Scrie-ne un mesaj</h4>
              <form
                method="post"
                action="/api/message"
                autocompelete="on"
                className="form"
              >
                <label htmlFor="name">Nume</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Numele complet..."
                />
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                />
                <label htmlFor="message">Mesaj</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Mesajul pe care vrei sa ni-l trimiti..."
                />
                <Button formType="submit">Trimite mesajul</Button>
              </form>
            </Step>
          </Steps>
        </StepsContainer>

        <CTAFullSection>
          <CTATitle>Rezervă acum o autorulotă!</CTATitle>
          <CTAMessage>
            Grab the production version and begin your project instantly.
          </CTAMessage>
          <Button type="accent">Rezervă</Button>
        </CTAFullSection>
      </TransparentNavbarLayout>
    );
  }
}

export default Home;
