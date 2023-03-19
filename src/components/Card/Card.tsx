import useProjects from "../../hooks/useProjects/useProjects";
import { ProjectStructure } from "../../store/features/projectsSlice/types";
import { useAppSelector } from "../../store/hooks";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardStyled from "./CardStyled";
import Button from "../Button/Button";

interface CardProps {
  project: ProjectStructure;
}

const Card = ({
  project: { avatar, name, shortDescription, maker, id: projectId },
}: CardProps): JSX.Element => {
  const { id } = useAppSelector((state) => state.user);
  const { deleteProject } = useProjects();
  const logguedUser = maker === id;

  const deleteIcon = (
    <FontAwesomeIcon icon={faTrash} className="fa-solid--active card__icon" />
  );

  return (
    <CardStyled className="card">
      <img
        className="card__image"
        src={avatar}
        alt={name}
        width={87}
        height={87}
      ></img>
      <div className="card__content">
        <h2 className="card__content-name">{name}</h2>
        <span className="card__content-short-description">
          {shortDescription}
        </span>
      </div>
      {logguedUser && (
        <div>
          <Button
            ariaLabel={"delete"}
            icon={deleteIcon}
            action={() => deleteProject(projectId)}
          />
        </div>
      )}
    </CardStyled>
  );
};

export default Card;
