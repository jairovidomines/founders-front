import styled from "styled-components";

const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  min-height: 100vh;
  align-items: center;
  min-width: auto;
  height: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

export default NotFoundStyled;
