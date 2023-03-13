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
  }

  .svg-inline--fa {
    height: 1.4rem;
  }

  .fa-solid {
    color: red;

    &--active_hover {
      color: blue;
    }
  }
`;

export default NavigationStyled;
