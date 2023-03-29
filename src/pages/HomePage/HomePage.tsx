import { useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import Filter from "../../components/Filter/Filter";
import useProjects from "../../hooks/useProjects/useProjects";

const HomePage = (): JSX.Element => {
  const { getProjects } = useProjects();

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <>
      <Filter />
      <CardList />
    </>
  );
};

export default HomePage;
