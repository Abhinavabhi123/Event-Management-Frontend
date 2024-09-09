import "../styles/landing-page.css";
import ContactHeader from "../components/ContactHeader";
import BannerCarousel from "../components/BannerCarousel";
import NavBar from "../components/NavBar";
import WhatsAppContact from "../components/WhatsAppContact";
import ContactForm from "../components/ContactForm";
import HomeEvent from "../components/Events/HomeEvent";
import Experience from "../components/Experience";
import SocialMediaFooter from "../components/Footer/SocialMediaFooter";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <ContactHeader />
      <NavBar />
      <BannerCarousel />
      <HomeEvent />
      <Experience />
      <ContactForm />
      <SocialMediaFooter/>
      <WhatsAppContact />
    </div>
  );
}
