import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";

import LoginPage from "../../pages/LoginPage";
import { showErrorToast } from "../../modals/modals";
import { ToastContainer } from "react-toastify";

const Layout = (): JSX.Element => {
  const { modal } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (modal) {
      showErrorToast(modal);
    }
  }, [modal]);
  return (
    <>
      <LoginPage />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={false}
        draggable={true}
        theme="light"
      />
    </>
  );
};

export default Layout;
