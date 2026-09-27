import ScrollToTop from '../components/ScrollToTop';
import CraftHero from '../components/craftsmanship/CraftHero';
import CraftIntro from '../components/craftsmanship/CraftIntro';
import MakingProcess from '../components/craftsmanship/MakingProcess';
import MacroDetail from '../components/craftsmanship/MacroDetail';
import MaterialsSection from '../components/craftsmanship/MaterialsSection';
import HandcraftedDetails from '../components/craftsmanship/HandcraftedDetails';
import TransformationSlider from '../components/craftsmanship/TransformationSlider';
import ArtisanStory from '../components/craftsmanship/ArtisanStory';
import QualityJourney from '../components/craftsmanship/QualityJourney';
import FinalPiece from '../components/craftsmanship/FinalPiece';
import JewelleryCare from '../components/craftsmanship/JewelleryCare';
import CraftCTA from '../components/craftsmanship/CraftCTA';

export default function CraftsmanshipPage() {
  return (
    <main className="w-full bg-background text-primaryDark overflow-hidden">
      <ScrollToTop />
      <CraftHero />
      <CraftIntro />
      <MakingProcess />
      <MacroDetail />
      <MaterialsSection />
      <HandcraftedDetails />
      <TransformationSlider />
      <ArtisanStory />
      <QualityJourney />
      <FinalPiece />
      <JewelleryCare />
      <CraftCTA />
    </main>
  );
}
