import styled from "styled-components";

const CardStyled = styled.article`
  display: flex;
  gap: 20px;
  padding: 15px 0;

  .card {
    &__image {
      border-radius: 50px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__content-short-description {
      line-height: 1.4;
    }

    &__content-name {
      font-size: 18px;
    }

    &__icon {
      font-size: 20px;
      color: ${(props) => props.theme.colors.mainFontColor};
      background-color: ${(props) => props.theme.colors.backgroundColor};
    }
  }
`;

export default CardStyled;
