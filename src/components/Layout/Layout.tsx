import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import { showErrorToast } from "../../modals/modals";
import { Outlet } from "react-router";

const Layout = (): JSX.Element => {
  const { modal } = useAppSelector((state) => state.ui);

  useEffect(() => {
    if (modal) {
      showErrorToast(modal);
    }
  }, [modal]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
