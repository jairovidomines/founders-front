import useToken from "../../hooks/useToken/useToken";
import Layout from "../Layout/Layout";
import NavigationBar from "../NavigationBar/NavigationBar";

const App = () => {
  const { getToken } = useToken();

  getToken();

  return (
    <>
      <div className="container">
        <Layout />
      </div>
      <NavigationBar />
    </>
  );
};

export default App;
