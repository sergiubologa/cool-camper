import React, { Component } from "react";
import UndrawBrowser from "../../assets/img/undraw_browser.svg";
import UndrawFrameworks from "../../assets/img/undraw_frameworks.svg";
import UndrawTogether from "../../assets/img/together.svg";

import Motorhome from "../../assets/img/motorhome.svg";
import MapLight from "../../assets/img/map_light.svg";
import Support from "../../assets/img/support.svg";

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
  SectionContent,
  SectionText,
  SectionTitle
} from "../../components/full-section";
import CTAFullSection, {
  CTATitle,
  CTAMessage
} from "../../components/cta-full-section";
import Button from "../../components/inputs/button";

class Home extends Component {
  render() {
    return (
      <TransparentNavbarLayout>
        <Hero withSub />

        <StepsContainer>
          <StepsHeader>
            <h2>De ce CoolCamper?</h2>
            <p>
              câteva motive pentru care ar trebui să închiriezi o autorulotă de
              la noi
            </p>
          </StepsHeader>
          <Steps>
            <Step>
              <StepMedia src={Motorhome} />
              <h4>Autorulote noi</h4>
              <StepText>
                Rulotele noastre sunt modele 2018+ cu toate dotările necesare
                pentru o vancanță de neuitat!
              </StepText>
            </Step>
            <Step>
              <StepMedia src={MapLight} />
              <h4>Itinerarii pe rute populare</h4>
              <StepText>
                Ca să îți facem viața mai ușoară ți-am pregătit si itinerarii pe
                cele mai populare rute.
              </StepText>
            </Step>
            <Step>
              <StepMedia src={Support} />
              <h4>Suport 24/24</h4>
              <StepText>
                Ne poți contacta 24/24 pentru a ne cere ajutorul cu absolut
                orice problemă întâmpini.
              </StepText>
            </Step>
          </Steps>
          <StepsMoreInfo text="vezi toate avantajele">
            <StepsInfo text="Pick-up direct de la aeroport" />
            <StepsInfo text="Multipli șoferi, fără taxe suplimentare" />
            <StepsInfo text="Parcare asigurată pentru mașina ta pe parcursul închirierii autorulotei" />
            <StepsInfo text="Asigurare RCA și full CASCO în toată Europa" />
            <StepsInfo text="Fără limită de kilometri" />
          </StepsMoreInfo>
        </StepsContainer>

        <FullSection>
          <SectionMedia src={UndrawBrowser} />
          <SectionContent>
            <SectionTitle>
              Natural styling with almost nothing to learn
            </SectionTitle>
            <Button type="accent">Learn more</Button>
            <Button>Learn more</Button>
            <Button type="delete">Learn more</Button>
            <Button type="primary">Learn more</Button>
            <SectionText>
              Evie brings you the pages you'll need and the structure to create
              your own, without a learning curve. It is minimal and mostly
              styles plain elements. There are only a few classNamees you'll
              need to know but nothing to disrupt your preferred coding style.
            </SectionText>
          </SectionContent>
        </FullSection>

        <FullSection>
          <SectionContent>
            <SectionTitle>
              Framework agnostic. Your front-end setup, your choice.
            </SectionTitle>
            <SectionText>
              Evie has zero dependencies and uses vanilla JavaScript for a few
              functions with minimal footprint. You can use React, Vue, Angular,
              jQuery or whatever you prefer.
            </SectionText>
          </SectionContent>
          <SectionMedia src={UndrawFrameworks} />
        </FullSection>

        <FullSection>
          <SectionMedia src={UndrawTogether} />
          <SectionContent>
            <SectionTitle>
              Ready for production or rapid prototyping
            </SectionTitle>
            <SectionText>
              Landing, authentication and a few other pages to select from,
              despite the small size. Tested on production at unDraw with
              amazing speeds and unopinionated on how to structure your project.
              We really hope you'll find it awesome and useful!
            </SectionText>
          </SectionContent>
        </FullSection>

        <CTAFullSection>
          <CTATitle>Get started now</CTATitle>
          <CTAMessage>
            Grab the production version and begin your project instantly.
          </CTAMessage>
          <Button type="accent">Download Evie</Button>
        </CTAFullSection>
      </TransparentNavbarLayout>
    );
  }
}

export default Home;
