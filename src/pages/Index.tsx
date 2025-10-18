import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation className="fixed top-0 left-0 right-0 z-50 bg-background/80 " />
      <div className=" h-screen overflow-y-auto overflow-x-hidden">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <DepartmentsSection />
        <CTASection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
