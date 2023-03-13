import { Outlet } from "react-router";
import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <ToastContainer hideProgressBar />
      <Outlet />
    </>
  );
};

export default Layout;
