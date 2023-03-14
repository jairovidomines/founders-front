import { useAppSelector } from "../../store/hooks";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return (
    <HeaderStyled>
      {isLogged && (
        <>
          <img
            className="header__logo"
            src="../images/founders_logo.png"
            alt="founders_logo"
            width={91}
            height={17}
          ></img>
        </>
      )}
    </HeaderStyled>
  );
};

export default Header;
