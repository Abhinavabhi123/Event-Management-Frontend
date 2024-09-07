import "../styles/contact-header.css";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function ContactHeader() {
  return (
    <div className="contact-header-wrapper">
      <div className="contact-header-left-section">
        <div className="item">
          <IoMdCall />
          +91-1234567890
        </div>
        <div className="item">
          <IoMail />
          luminaevents@gmail.com
        </div>
      </div>
      <div className="contact-header-right-section">
        <FaFacebookF />
        <FaXTwitter />
        <FaYoutube size={20} />
        <FaInstagram size={20} />
      </div>
    </div>
  );
}
