import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import StatsSection from "@/components/StatsSection";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation className="fixed top-0 left-0 right-0 z-50" />
      <main>
        <Hero />
        <StatsSection />
        <ProblemSection />
        <SolutionSection />
        <PortfolioSection />
        <CTASection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
