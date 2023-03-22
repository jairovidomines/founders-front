import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  min-height: 100vh;
  align-items: center;
  min-width: auto;
  height: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor};

  .notfound__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 185px;
    height: 40px;
    text-align: center;
    border: none;
    border-radius: 25px;
    font-size: 17px;
    background-color: #3f5e46;
    color: #fff;
    /* padding-top: 14px; */
  }
`;

export default NotFoundPageStyled;
