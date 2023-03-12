import {
  faArrowRightFromBracket,
  faBookmark,
  faHouse,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../store/hooks";
import NavigationStyled from "./NavigationBarStyled";

const NavigationBar = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return (
    <NavigationStyled className="navigation">
      {isLogged ? (
        <>
          <FontAwesomeIcon icon={faList} className="fa-solid--active" />
          <FontAwesomeIcon icon={faBookmark} className="fa-solid--active" />
          <FontAwesomeIcon icon={faHouse} className="fa-solid--active" />
          <FontAwesomeIcon icon={faPlus} className="fa-solid--active" />
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="fa-solid--active"
          />
        </>
      ) : (
        ""
      )}
    </NavigationStyled>
  );
};

export default NavigationBar;
