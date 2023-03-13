import {
  faArrowRightFromBracket,
  faBookmark,
  faHouse,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUser from "../../hooks/useUser/useUser";
import { useAppSelector } from "../../store/hooks";
import NavigationStyled from "./NavigationBarStyled";

const NavigationBar = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { logoutUser } = useUser();

  return (
    <NavigationStyled>
      {isLogged ? (
        <div className="navigation">
          <FontAwesomeIcon icon={faList} className="fa-solid--active" />
          <FontAwesomeIcon icon={faBookmark} className="fa-solid--active" />
          <FontAwesomeIcon icon={faHouse} className="fa-solid--active" />
          <FontAwesomeIcon icon={faPlus} className="fa-solid--active" />
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="fa-solid--active"
            onClick={logoutUser}
          />
        </div>
      ) : (
        ""
      )}
    </NavigationStyled>
  );
};

export default NavigationBar;
