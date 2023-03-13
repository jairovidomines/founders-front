import styled from "styled-components";

const CardStyled = styled.article`
  display: flex;
  gap: 15px;
  padding: 15px 0;

  .card {
    &__image {
      border-radius: 5px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    &__content-name {
      font-size: 18px;
    }
  }
`;

export default CardStyled;
