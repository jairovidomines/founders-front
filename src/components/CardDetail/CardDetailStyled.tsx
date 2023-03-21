import styled from "styled-components";

const CardDetailStyled = styled.article`
  padding: 15px 0;

  .card-detail {
    &__content {
      display: flex;
      gap: 14px;
      padding-bottom: 15px;
      border-bottom: 0.05px solid #dad8d8;
    }

    &__image {
      border-radius: 5px;
    }

    &__content-detail {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__icon {
      font-size: 20px;
      color: ${(props) => props.theme.colors.mainFontColor};
      background-color: ${(props) => props.theme.colors.backgroundColor};
    }

    &__name {
      font-size: 20px;
    }

    &__short-description {
      line-height: 1.6;
    }

    &__description {
      line-height: 1.6;
    }

    &__large-content {
      display: flex;
      column-gap: 25px;
      padding: 25px 0;
      border-top: 0.05px solid #dad8d8;
    }

    &__characteristics {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  .card-container-button {
    display: flex;
    justify-content: center;

    &__button {
      width: 195px;
      height: 52px;
      font-size: 18px;
      background-color: ${(props) => props.theme.colors.mainColor};
    }
  }

  .test {
    padding: 25px 0;
  }
`;

export default CardDetailStyled;
