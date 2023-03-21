import styled from "styled-components";

const CardDetailStyled = styled.article`
  padding: 15px 0;

  .card {
    &-intro {
      display: flex;
      gap: 14px;
      padding-bottom: 15px;
      border-bottom: 0.05px solid #dad8d8;

      &__image {
        border-radius: 50px;
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

      &__description {
        line-height: 1.6;
      }
    }

    &-detail {
      &__container {
        padding: 25px 0;
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

    &-button {
      display: flex;
      justify-content: center;
      &__button {
        width: 150px;
        height: 40px;
        font-size: 17px;
        background-color: ${(props) => props.theme.colors.mainColor};
      }
    }
  }
`;

export default CardDetailStyled;
