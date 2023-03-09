import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .form {
    &__logo {
      width: 141px;
      height: auto;
      margin: 100px 0;
    }

    &__label {
      display: flex;
      flex-direction: column;
      font-weight: 200;
      gap: 17px;
    }

    &__label:nth-of-type(2) {
      margin-bottom: 25px;
    }

    &__input {
      width: 350px;
      height: 39px;
      background-color: #eee;
      border-radius: 5px;
      padding: 10px;
      font-family: var(--main-font);
      font-size: 15px;
      font-weight: 200;
    }
  }

  .user {
    position: absolute;
    bottom: 36px;

    &__not-a-member {
      font-weight: 400;
    }

    &__sign-up {
      font-weight: 600;
      color: #3f5e46;
    }
  }
`;

export default FormStyled;
