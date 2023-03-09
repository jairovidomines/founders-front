import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled className="form" autoComplete="off">
      <img
        className="form__logo"
        src="../images/founders_logo.png"
        alt="founders_logo"
      ></img>
      <label className="form__label">
        Username
        <input className="form__input" type="name" id="name"></input>
      </label>
      <label className="form__label">
        Password
        <input className="form__input" type="password" id="password"></input>
      </label>
      <Button text="Log in" />
      <div className="user">
        <span className="user__not-a-member">Not a member? </span>
        <span className="user__sign-up">Sign up</span>
      </div>
    </FormStyled>
  );
};

export default Form;
