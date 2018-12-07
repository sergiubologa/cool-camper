import React, { Component } from "react";
import UndrawTogether from "../../assets/img/together.svg";

import Motorhome from "../../assets/img/motorhome.svg";
import MapLight from "../../assets/img/map_light.svg";
import Support from "../../assets/img/support.svg";
import Payment from "../../assets/img/payment.svg";
import Chatting from "../../assets/img/chatting.svg";

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
import Button from "../../components/inputs/button";
import IconLabel from "../../components/icon-label";

class Home extends Component {
  render() {
    const motorhomeImages = [
      {
        src: "http://placekitten.com/873/600",
        alt: "Alt text"
      },
      {
        src: "http://placekitten.com/g/873/600",
        alt: "Alt text"
      },
      {
        src: "http://placekitten.com/g/873/600",
        alt: "Alt text"
      },
      {
        src: "http://placekitten.com/g/873/600",
        alt: "Alt text"
      }
    ];
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
          <SectionMedia src={UndrawTogether} />
          <SectionContent>
            <SectionTitle>Ce spun clienții noștri despre noi?</SectionTitle>
            <SectionText>
              Landing, authentication and a few other pages to select from,
              despite the small size. Tested on production at unDraw with
              amazing speeds and unopinionated on how to structure your project.
              We really hope you'll find it awesome and useful!
            </SectionText>
          </SectionContent>
        </FullSection>

        <FullSection>
          <SectionContent>
            <SectionTitle>Întrebări frecvente</SectionTitle>
            <SectionText>
              Landing, authentication and a few other pages to select from,
              despite the small size. Tested on production at unDraw with
              amazing speeds and unopinionated on how to structure your project.
              We really hope you'll find it awesome and useful!
            </SectionText>
          </SectionContent>
          <SectionMedia src={UndrawTogether} />
        </FullSection>

        <FullSection>
          <SectionMedia src={Chatting} />
          <SectionContent>
            <SectionTitle>Contactează-ne!</SectionTitle>
            <SectionText>
              Landing, authentication and a few other pages to select from,
              despite the small size. Tested on production at unDraw with
              amazing speeds and unopinionated on how to structure your project.
              We really hope you'll find it awesome and useful!
            </SectionText>
          </SectionContent>
        </FullSection>

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
