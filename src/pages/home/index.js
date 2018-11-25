import React, { Component } from "react";
import UndrawDesigner from "../../assets/img/undraw_designer.svg";
import UndrawResponsive from "../../assets/img/undraw_responsive.svg";
import UndrawCreation from "../../assets/img/undraw_creation.svg";
import UndrawBrowser from "../../assets/img/undraw_browser.svg";
import UndrawFrameworks from "../../assets/img/undraw_frameworks.svg";
import UndrawTogether from "../../assets/img/together.svg";
import Hero from "../../components/hero";
import TransparentNavbarLayout from "../layouts/transparent-navbar-layout";
import StepsContainer, {
  StepsHeader,
  Steps,
  Step,
  StepMedia,
  StepText
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
            <h2>Who can use Evie?</h2>
            <p>
              Here's who we can think of, but surely creative people will
              surprise us.
            </p>
          </StepsHeader>
          <Steps>
            <Step>
              <StepMedia src={UndrawDesigner} />
              <h4>Programmers</h4>
              <StepText>
                A landing page for your open source projects. Present your
                solution, easily create docs.
              </StepText>
            </Step>
            <Step>
              <StepMedia src={UndrawResponsive} />
              <h4>Designers</h4>
              <StepText>
                A website for your own freebies. Let the world download and use
                your artwork.
              </StepText>
            </Step>
            <Step>
              <StepMedia src={UndrawCreation} />
              <h4>Makers</h4>
              <StepText>
                A great starting point for your web application. Focus on your
                idea and execution.
              </StepText>
            </Step>
          </Steps>
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
