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
      <h1 className="private-page__title">My projects</h1>
      <CardList />
    </PrivatePageStyled>
  );
};

export default PrivatePage;
