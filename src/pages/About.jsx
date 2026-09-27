import ScrollToTop from '../components/ScrollToTop';
import AboutHero from '../components/about/AboutHero';
import BrandIntroduction from '../components/about/BrandIntroduction';
import OurBeginning from '../components/about/OurBeginning';
import BrandTimeline from '../components/about/BrandTimeline';
import FounderVision from '../components/about/FounderVision';
import BrandValues from '../components/about/BrandValues';
import CraftsmanshipPreview from '../components/about/CraftsmanshipPreview';
import BrandQuote from '../components/about/BrandQuote';
import BoutiqueExperience from '../components/about/BoutiqueExperience';
import TrustStrip from '../components/about/TrustStrip';
import AboutCTA from '../components/about/AboutCTA';

export default function AboutPage() {
  return (
    <main className="w-full bg-background text-primaryDark overflow-hidden">
      <ScrollToTop />
      <AboutHero />
      <BrandIntroduction />
      <OurBeginning />
      <BrandTimeline />
      <FounderVision />
      <BrandValues />
      <CraftsmanshipPreview />
      <BrandQuote />
      <BoutiqueExperience />
      <TrustStrip />
      <AboutCTA />
    </main>
  );
}
