import "../../styles/Footer/social-media-footer.css";
import Logo from "../../assets/Images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function SocialMediaFooter() {
  const navigate = useNavigate();
  return (
    <div className="social-media-footer-wrapper">
      <div>
        <img src={Logo} alt="brand logo" onClick={() => navigate("/")} />
      </div>
      <div className="social-media-separation"></div>
      <div className="social-media-icon-wrapper">
        <FaFacebookF />
        <FaInstagram />
        <FaXTwitter />
        <FaYoutube />
      </div>
    </div>
  );
}
