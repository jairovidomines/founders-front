import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import { useAppSelector } from "../store/hooks";
import LoginPageStyled from "./LoginPageStyled";
import { ToastContainer } from "react-toastify";

const LoginPage = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  return isLogged ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <LoginPageStyled>
      <LoginForm />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={false}
        draggable={true}
        theme="light"
      />
    </LoginPageStyled>
  );
};

export default LoginPage;
