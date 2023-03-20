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
            <FontAwesomeIcon
              icon={faHouse}
              className="fa-solid--active navigation__link"
            />
          </NavLink>
          <NavLink to={endpoints.myProjects} title="my-projects">
            <FontAwesomeIcon
              icon={faList}
              className="fa-solid--active navigation__link"
            />
          </NavLink>
          <NavLink to={endpoints.createProject} title="create-projects">
            <FontAwesomeIcon
              icon={faPlus}
              className="fa-solid--active navigation__link"
            />
          </NavLink>
          <NavLink to={endpoints.login} title="login">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="fa-solid--active navigation__link"
              onClick={logoutUser}
            />
          </NavLink>
        </div>
      )}
    </NavigationStyled>
  );
};

export default NavigationBar;
