import useToken from "../../hooks/useToken/useToken";
import Layout from "../Layout/Layout";

const App = () => {
  const { getToken } = useToken();

  getToken();

  return (
    <>
      <div className="containeer">
        <Layout />
      </div>
    </>
  );
};

export default App;
