import Hero from '../components/Hero';
import BrandStatement from '../components/BrandStatement';
import Collections from '../components/Collections';
import SignaturePieces from '../components/SignaturePieces';
import CraftsmanshipFeature from '../components/CraftsmanshipFeature';
import Legacy from '../components/Legacy';
import Occasions from '../components/Occasions';
import BoutiqueCTA from '../components/BoutiqueCTA';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <main className="w-full bg-background text-primaryDark">
      <ScrollToTop />
      <Hero />
      <BrandStatement />
      <Collections />
      <SignaturePieces />
      <CraftsmanshipFeature />
      <Legacy />
      <Occasions />
      <BoutiqueCTA />
    </main>
  );
}
