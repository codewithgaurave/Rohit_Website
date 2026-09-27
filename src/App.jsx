import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CollectionsPage from './pages/Collections';
import AboutPage from './pages/About';
import CraftsmanshipPage from './pages/Craftsmanship';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import PageLoader from './components/PageLoader';

function App() {
  return (
    <ReactLenis root>
      <Router>
        <PageLoader />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/craftsmanship" element={<CraftsmanshipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<ContactPage />} />
          <Route path="/visit" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingActions />
        <Footer />
      </Router>
    </ReactLenis>
  );
}

export default App;
