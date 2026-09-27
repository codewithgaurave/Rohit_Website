import ScrollToTop from '../components/ScrollToTop';
import CollectionsHero from '../components/collections/CollectionsHero';
import FeaturedCollection from '../components/collections/FeaturedCollection';
import EditorialCollectionGrid from '../components/collections/EditorialCollectionGrid';
import CollectionSwitcher from '../components/collections/CollectionSwitcher';
import JewelleryShowcase from '../components/collections/JewelleryShowcase';
import MaterialStory from '../components/collections/MaterialStory';
import CraftDetail from '../components/collections/CraftDetail';
import CollectionCTA from '../components/collections/CollectionCTA';

export default function CollectionsPage() {
  return (
    <main className="w-full bg-background text-primaryDark">
      <ScrollToTop />
      <CollectionsHero />
      <FeaturedCollection />
      <EditorialCollectionGrid />
      <CollectionSwitcher />
      <JewelleryShowcase />
      <MaterialStory />
      <CraftDetail />
      <CollectionCTA />
    </main>
  );
}
