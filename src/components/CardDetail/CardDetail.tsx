import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useProjects from "../../hooks/useProjects/useProjects";
import { ProjectStructure } from "../../store/features/projectsSlice/types";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import CardDetailStyled from "./CardDetailStyled";

interface DetailProps {
  project: ProjectStructure;
}

const DetailPage = ({
  project: {
    avatar,
    name,
    shortDescription,
    description,
    maker,
    website,
    monthlyUsers,
    twitter,
    id: projectId,
  },
}: DetailProps): JSX.Element => {
  const { id } = useAppSelector((state) => state.user);
  const { deleteProject } = useProjects();
  const logguedUser = maker === id;

  const deleteIcon = (
    <FontAwesomeIcon
      icon={faTrash}
      className="fa-solid--active card-intro__icon"
    />
  );

  return (
    <CardDetailStyled className="card">
      <div className="card-intro">
        <img
          className="card-intro__image"
          src={avatar}
          alt={name}
          width={87}
          height={87}
        ></img>
        <div className="card-intro__content-detail">
          <h1 className="card-intro__name">{name}</h1>
          <span className="card-intro__description">{shortDescription}</span>
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
      </div>
      <div className="card-detail">
        <div className="card-detail__container">
          <span className="card-detail__description">{description}</span>
        </div>
        <div className="card-detail__large-content">
          <div className="card-detail__characteristics">
            <span>Website</span>
            <span>Monthly users</span>
            <span>Twitter</span>
          </div>
          <div className="card-detail__characteristics">
            <span>{website}</span>
            <span>{monthlyUsers}</span>
            <span>{twitter}</span>
          </div>
        </div>
      </div>
      <div className="card-button">
        <Link to={website} target="_blank">
          <Button className="card-button__button" text="Visit website" />
        </Link>
      </div>
    </CardDetailStyled>
  );
};

export default DetailPage;
