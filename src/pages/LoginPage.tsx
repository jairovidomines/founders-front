import { ToastContainer } from "react-toastify";

import LoginForm from "../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <LoginForm />
      <ToastContainer hideProgressBar />
    </LoginPageStyled>
  );
};

export default LoginPage;
