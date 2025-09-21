import { Button } from "../ui/button";
import { ServicesSection } from "../sections/ServicesSection";
import { AppFeatureSection } from "../sections/AppFeatureSection";
import { ContactSection } from "../sections/ContactSection";
import { DownloadAppSection } from "../sections/DownloadAppSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen section-container">
      <div className="flex flex-col gap-4 py-[72px] mb-8">
        <h1 className="heading-01">Somos um APP para prestação de serviços em eletricidade.</h1>
        <Button>Baixar o app</Button>
      </div>

      <AppFeatureSection />

      <ServicesSection />

      <TestimonialsSection />

      <DownloadAppSection />

      <ContactSection />
    </div>
  );
};
