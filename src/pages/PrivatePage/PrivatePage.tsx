import { useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import useProjects from "../../hooks/useProjects/useProjects";
import PrivatePageStyled from "./PrivatePageStyled";

const PrivatePage = (): JSX.Element => {
  const { getUserProjects } = useProjects();

  useEffect(() => {
    getUserProjects();
  }, [getUserProjects]);

  return (
    <PrivatePageStyled className="private-page">
      <h2 className="private-page__title">My Projects</h2>
      <CardList />
    </PrivatePageStyled>
  );
};

export default PrivatePage;
