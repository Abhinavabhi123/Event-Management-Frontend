import axios from "axios";
import { RegisterUser, UserLogin } from "../../urls";
import { successToast, warningToast } from "../components/ToastMessage/Message";

// Register user
export async function registerUser(data, setLogin, resetForm) {
  await axios
    .post(RegisterUser, data)
    .then((res) => {
      if (res.status === 201 && res.data.isSuccess) {
        setLogin(true);
        resetForm();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
// Login user
export async function userLogin(data, resetForm, navigate) {
  await axios
    .get(UserLogin, {
      headers: {
        ...data,
      },
    })
    .then((res) => {
      if (res.status === 200 && res.data.isSuccess) {
        successToast("Login Successful");
        resetForm();
        localStorage.setItem("eventTkn", res.data.token);
        navigate("/");
      }
    })
    .catch((error) => {
      if (error.status === 401 && error.response.data.isSuccess === false) {
        warningToast(error.response.data.message +" "+"Please check Email and Password");
      }
      console.log(error);
    });
}
