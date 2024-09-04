import ContactHeader from "../components/ContactHeader";
import "../styles/login-page.css";
import PartyImage from "../assets/svg/party.svg";
import { useState } from "react";
import RegisterImage from "../assets/svg/register.svg";

export default function LoginPage() {
  const [login, setLogin] = useState(true);

  return (
    <div className="login-page-wrapper">
      <ContactHeader />
      <div className="login-container">
        <div className={` login-form-wrapper ${login ? "login" : "sign-up"}`}>
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
          {/* sign up left section */}
          <div className="sign-up-form-left-section">
            <p>Register Here !</p>
            <img src={RegisterImage} alt="image" />
          </div>
          {/* *--- */}
          <div className="login-form-right-section">
            <p>Welcome Back</p>
            <img src={PartyImage} alt="image" />
          </div>
          {/* Sign up right section */}
          <div className="sign-up-form-right-section">
            <h4>Sign Up</h4>
            <form>
              <div>
                <input type="email" placeholder="Enter Email" />
              </div>
              <div>
                <input type="password" placeholder="Enter password" />
              </div>
              <div>
                <input type="password" placeholder="Enter confirm password" />
              </div>
              <div className="sign-up-btn-wrapper">
                <button type="submit">Register</button>
              </div>
            </form>
            <div className="have-an-account">
              <p>Already have an account ?</p>
              <p onClick={()=>setLogin(true)}>Sign In</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
