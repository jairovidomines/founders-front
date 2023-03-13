import { ProjectDataStructure } from "../../store/features/projectsSlice/types";

import CardStyled from "./CardStyled";

interface CardProps {
  project: ProjectDataStructure;
}

const Card = ({
  project: { avatar, name, shortDescription },
}: CardProps): JSX.Element => {
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
    </CardStyled>
  );
};

export default Card;
