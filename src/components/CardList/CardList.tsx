import { useAppSelector } from "../../store/hooks";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

const CardList = (): JSX.Element => {
  const projects = useAppSelector((state) => state.project.projects);

  return (
    <CardListStyled>
      {projects?.map((project) => (
        <li key={project.id}>
          <Card project={project} />
          <hr className="line"></hr>
        </li>
      ))}
    </CardListStyled>
  );
};

export default CardList;
