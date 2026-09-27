import ScrollToTop from '../components/ScrollToTop';
import ContactHero from '../components/contact/ContactHero';
import ContactIntro from '../components/contact/ContactIntro';
import ContactOptions from '../components/contact/ContactOptions';
import AppointmentForm from '../components/contact/AppointmentForm';
import WhatsappEnquiry from '../components/contact/WhatsappEnquiry';
import BoutiqueExperience from '../components/contact/BoutiqueExperience';
import StoreLocation from '../components/contact/StoreLocation';
import OpeningHours from '../components/contact/OpeningHours';
import ContactFAQ from '../components/contact/ContactFAQ';
import InstagramStrip from '../components/contact/InstagramStrip';
import ContactCTA from '../components/contact/ContactCTA';

export default function ContactPage() {
  return (
    <main className="w-full bg-background text-primaryDark overflow-hidden">
      <ScrollToTop />
      <ContactHero />
      <ContactIntro />
      <ContactOptions />
      <AppointmentForm />
      <WhatsappEnquiry />
      <BoutiqueExperience />
      <StoreLocation />
      <OpeningHours />
      <ContactFAQ />
      <InstagramStrip />
      <ContactCTA />
    </main>
  );
}
