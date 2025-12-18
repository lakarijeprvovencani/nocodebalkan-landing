import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import FlowDiagram from '../components/FlowDiagram';
import LearnSection from '../components/LearnSection';
import WhySection from '../components/WhySection';
import Testimonials from '../components/Testimonials';
import VideoTestimonials from '../components/VideoTestimonials';
import TeamSection from '../components/TeamSection';
import CareerSection from '../components/CareerSection';
import InstructorsSection from '../components/InstructorsSection';
import AvailableCoursesSection from '../components/AvailableCoursesSection';
import MiniCoursesSection from '../components/MiniCoursesSection';
import EducationRequirementsSection from '../components/EducationRequirementsSection';
import MembershipBenefitsSection from '../components/MembershipBenefitsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import TestimonialImagesSlider from '../components/TestimonialImagesSlider';
import FinalCTASection from '../components/FinalCTASection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "No Code Balkan - Nauči da praviš aplikacije bez kodiranja";
  }, []);

  return (
    <>
      <Hero />
      <IntroSection />
      <FlowDiagram />
      <LearnSection />
      <WhySection />
      <Testimonials />
      <VideoTestimonials />
      <TeamSection />
      <CareerSection />
      <InstructorsSection />
      <AvailableCoursesSection />
      <MiniCoursesSection />
      <EducationRequirementsSection />
      <MembershipBenefitsSection />
      <TestimonialImagesSlider />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
};

export default HomePage;

