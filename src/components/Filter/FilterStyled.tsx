import styled from "styled-components";

const FilterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  align-items: center;

  .filter {
    &__select {
      height: 39px;
      background-color: #eee;
      border-radius: 5px;
      padding: 10px;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 16px;
      font-weight: 200;
      border: none;
    }
  }
`;

export default FilterStyled;
