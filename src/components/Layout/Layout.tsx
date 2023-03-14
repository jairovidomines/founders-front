import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "../../store/hooks";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  return (
    <LayoutStyled>
      <Header />
      <ToastContainer hideProgressBar />
      <main>
        {isLoading && <Loader />}
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;
