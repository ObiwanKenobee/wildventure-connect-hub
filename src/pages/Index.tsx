
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import ExperiencePreview from "@/components/ExperiencePreview";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Pillars />
      <ExperiencePreview />
      <PartnerSection />
      <Footer />
    </div>
  );
};

export default Index;
