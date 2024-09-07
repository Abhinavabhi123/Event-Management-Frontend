const server = import.meta.env.VITE_SERVER_URL;


export const RegisterUser = server + "/user-register";
export const UserLogin = server+"/authenticate-user";