import { useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import useProjects from "../../hooks/useProjects/useProjects";

const HomePage = (): JSX.Element => {
  const { getProjects } = useProjects();

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <div>
      <CardList />
    </div>
  );
};

export default HomePage;
