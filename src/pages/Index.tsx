import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { ThematiquesPreview } from "@/components/home/thematiques-preview";
import { FeaturesSection } from "@/components/home/features-section";
import { Footer } from "@/components/layout/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ThematiquesPreview />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
