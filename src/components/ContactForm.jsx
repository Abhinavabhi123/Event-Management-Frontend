import "../styles/contact-form.css";

export default function ContactForm() {
  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-title">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae enim voluptatum unde dolorem.</p>
      </div>

      <div className="contact-form">
        <input type="text" placeholder="First Name" />
        <input type="text"  placeholder="Last Name"/>
        <input type="email" placeholder="Email Address"/>
        <button>Download</button>
      </div>
    </div>
  );
}
