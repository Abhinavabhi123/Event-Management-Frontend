import ContactHeader from "../components/ContactHeader";
import "../styles/login-page.css";
import PartyImage from "../assets/svg/party.svg";
import { useState } from "react";
import RegisterImage from "../assets/svg/register.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser, userLogin } from "../Services/ApiServices";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate()
  const [login, setLogin] = useState(true);

  // register validation code
  const registrationValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confPass: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const loginValidationSchema = Yup.object().shape({
    loginEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
      loginPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // User register formik validation
  const registerFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confPass: "",
    },
    validationSchema: registrationValidationSchema,
    onSubmit: (values, { resetForm }) => {
      delete values.confPass;
      registerUser(values, setLogin, resetForm);
    },
  });

  //user Login formik validation
  const loginFormik = useFormik({
    initialValues: {
      loginEmail: "",
      loginPassword: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values,{resetForm}) => {
      const obj = {
        email: values.loginEmail,
        password: values.loginPassword,
      };
      userLogin(obj,resetForm,navigate)
    },
  });

  return (
    <div className="login-page-wrapper">
      <ContactHeader />
      <NavBar/>
      <div className="login-container">
        <div className={` login-form-wrapper ${login ? "login" : "sign-up"}`}>
          <div className="login-form-left-section">
            <form onSubmit={loginFormik.handleSubmit}>
              <p className="login-title">Login</p>
              <div className="login-form-elements">
                <div>
                  <input
                    id="loginEmail"
                    name="loginEmail"
                    type="text"
                    placeholder="Email"
                    value={loginFormik.values.loginEmail}
                    onBlur={loginFormik.handleBlur}
                    onChange={loginFormik.handleChange}
                  />
                </div>
                <div>
                  <input
                    id="loginPassword"
                    name="loginPassword"
                    type="password"
                    placeholder="Password"
                    value={loginFormik.values.loginPassword}
                    onBlur={loginFormik.handleBlur}
                    onChange={loginFormik.handleChange}
                  />
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
            <form onSubmit={registerFormik.handleSubmit}>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={registerFormik.values.email}
                  onBlur={registerFormik.handleBlur}
                  onChange={registerFormik.handleChange}
                />
                {registerFormik.errors.email &&
                  registerFormik.touched.email && (
                    <p className="error-message">
                      {registerFormik.errors.email}
                    </p>
                  )}
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  value={registerFormik.values.password}
                  onBlur={registerFormik.handleBlur}
                  onChange={registerFormik.handleChange}
                />
                {registerFormik.errors.password &&
                  registerFormik.touched.password && (
                    <p className="error-message">
                      {registerFormik.errors.password}
                    </p>
                  )}
              </div>
              <div>
                <input
                  id="confPass"
                  name="confPass"
                  type="password"
                  placeholder="Enter confirm password"
                  value={registerFormik.values.confPass}
                  onBlur={registerFormik.handleBlur}
                  onChange={registerFormik.handleChange}
                />
                {registerFormik.errors.confPass &&
                  registerFormik.touched.confPass && (
                    <p className="error-message">
                      {registerFormik.errors.confPass}
                    </p>
                  )}
              </div>
              <div className="sign-up-btn-wrapper">
                <button type="submit">Regist er</button>
              </div>
            </form>
            <div className="have-an-account">
              <p>Already have an account ?</p>
              <p onClick={() => setLogin(true)}>Sign In</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
