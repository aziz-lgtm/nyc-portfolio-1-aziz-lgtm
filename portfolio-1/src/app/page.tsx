import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechSection from "@/components/TechSection";
import WhyUsSection from "@/components/WhyUsSection";
import PortfoliosSection from "@/components/PortfoliosSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQ from "@/components/FAQ"
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (

    <div>

    <main>
      <HeroSection />
      <QuoteSection />
      <FeaturesSection />
      <TechSection/>
      <WhyUsSection />
      <PortfoliosSection />
      <ExperiencesSection />
      <TestimonialsSection />
      <FAQ />
      <FormSection />
      <Footer />

    </main>

    
    </div>
    
  );
}
