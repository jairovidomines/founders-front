import styled from "styled-components";

const CreateFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 50px;

  .create-form {
    &__label {
      display: flex;
      flex-direction: column;
      font-weight: 200;
      gap: 17px;
    }

    &__label:nth-of-type(7) {
      margin-bottom: 25px;
    }

    &__input {
      min-width: 90vw;
      height: 39px;
      background-color: #eee;
      border-radius: 5px;
      padding: 10px;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 15px;
      font-weight: 200;
      border: none;
    }

    &__textarea {
      min-width: 90vw;
      height: 39px;
      background-color: #eee;
      border-radius: 5px;
      padding: 10px;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 15px;
      font-weight: 200;
      border: none;
    }

    &__button {
      width: 150px;
      height: 40px;
      font-size: 17px;
      background-color: ${(props) => props.theme.colors.mainColor};
    }
  }

  .short-description {
    height: 80px;
  }

  .description {
    height: 140px;
  }
`;

export default CreateFormStyled;
