import "../styles/landing-page.css";
import ContactHeader from "../components/ContactHeader";
import BannerCarousel from "../components/BannerCarousel";
import NavBar from "../components/NavBar";
import WhatsAppContact from "../components/WhatsAppContact";
import ContactForm from "../components/ContactForm";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <ContactHeader />
      <NavBar />
      <BannerCarousel />
      <ContactForm />
      <WhatsAppContact />
    </div>
  );
}
