import {
  faArrowRightFromBracket,
  faHouse,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import endpoints from "../../routers/types";
import { useAppSelector } from "../../store/hooks";
import NavigationStyled from "./NavigationBarStyled";

const NavigationBar = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { logoutUser } = useUser();

  return (
    <NavigationStyled>
      {isLogged && (
        <div className="navigation">
          <NavLink to={"/"} title="home">
            <div className="navigation-home">
              <FontAwesomeIcon
                icon={faHouse}
                className="fa-solid--active navigation__link"
              />
              <span className="navigation-home__text">Home</span>
            </div>
          </NavLink>
          <NavLink to={endpoints.myProjects} title="my-projects">
            <div className="navigation-my-projects">
              <FontAwesomeIcon
                icon={faList}
                className="fa-solid--active navigation__link"
              />
              <span className="navigation-my-projects__text">My projects</span>
            </div>
          </NavLink>
          <NavLink to={endpoints.createProject} title="create-projects">
            <div className="navigation-create">
              <FontAwesomeIcon
                icon={faPlus}
                className="fa-solid--active navigation__link"
              />
              <span className="navigation-create__text">Create</span>
            </div>
          </NavLink>
          <NavLink to={endpoints.login} title="login">
            <div className="navigation-logout">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="fa-solid--active navigation__link"
                onClick={logoutUser}
              />
              <span className="navigation-logout__text">Log out</span>
            </div>
          </NavLink>
        </div>
      )}
    </NavigationStyled>
  );
};

export default NavigationBar;
