import ContactHeader from "../components/ContactHeader";
import "../styles/login-page.css";
import PartyImage from "../assets/svg/party.svg";
import { useState } from "react";

export default function LoginPage() {
  const [login, setLogin] = useState(true);
  return (
    <div className="login-page-wrapper">
      <ContactHeader />
      <div className="login-container">
        <div className={` login-form-wrapper ${login?"login":"sign-up"}`}>
          <div className="login-form-left-section">
            <form>
              <p className="login-title">Login</p>
              <div className="login-form-elements">
                <div>
                  <input type="text" placeholder="Email" />
                </div>
                <div>
                  <input type="password" placeholder="Password" />
                </div>
                <div>
                  <p className="extra-text">You Are all set up</p>
                  <div className="login-form-button-wrapper">
                    <button type="submit">Complete</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="sign-up-suggestion">
              <p>{`Don't have any account ?`}</p>
              <a onClick={() => setLogin(false)}> Create Account</a>
            </div>
          </div>
          <div className="login-form-right-section">
            <p>Welcome Back</p>
            <img src={PartyImage} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
