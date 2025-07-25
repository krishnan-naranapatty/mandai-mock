import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { WelcomeSection } from '@/components/WelcomeSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { WhatsNewSection } from '@/components/WhatsNewSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <ExperienceSection />
      <WhatsNewSection />
      <Footer />
    </div>
  );
};

export default Index;
