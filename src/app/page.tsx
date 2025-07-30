import Hero from "@/components/Hero";
import VSL from "@/components/VSL";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudySection from "@/components/InstructorSection";
import HowItWorks from "@/components/HowItWorks";
import TrustSignals from "@/components/TrustSignals";
import LeadMagnet from "@/components/LeadMagnet";
import FinalCTA from "@/components/FinalCTA";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <VSL />
      <Benefits />
      <CaseStudySection />
      <HowItWorks />
      <TrustSignals />
      <WhyChooseUs />
      <Container>
        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
        >
          <Testimonials />
        </Section>

        <FAQ />
      </Container>
      <LeadMagnet />

      <Container>
        <Stats />
        
        <FinalCTA />
      </Container>
    </>
  );
};

export default HomePage;
