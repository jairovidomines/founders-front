import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    position: fixed;
    bottom: 0;
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) =>
      props.theme.colors.backgroundColorNavigationBar};
    opacity: 90%;

    &-home {
      display: flex;
      flex-direction: column;
      gap: 5px;

      &__text {
        font-size: 9px;
      }
    }

    &-my-projects {
      display: flex;
      flex-direction: column;
      gap: 5px;

      &__text {
        font-size: 9px;
      }
    }

    &-create {
      display: flex;
      flex-direction: column;
      gap: 5px;

      &__text {
        font-size: 9px;
      }
    }

    &-logout {
      display: flex;
      flex-direction: column;
      gap: 5px;

      &__text {
        font-size: 9px;
      }
    }
  }

  .svg-inline--fa {
    height: 1.4rem;
  }

  .navigation__link {
    color: ${(props) => props.theme.colors.mainFontColor};
  }
`;

export default NavigationStyled;
