import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const { loginUser } = useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser({ username, password });
  };

  return (
    <FormStyled className="form" autoComplete="off" onSubmit={onSubmitHandler}>
      <img
        className="form__logo"
        src="../images/founders_logo.png"
        alt="founders_logo"
      ></img>
      <label className="form__label">
        Username
        <input
          className="form__input"
          type="name"
          id="name"
          placeholder="Username..."
          onChange={handleUsername}
        ></input>
      </label>
      <label className="form__label">
        Password
        <input
          className="form__input"
          type="password"
          id="password"
          placeholder="Password..."
          onChange={handlePassword}
        ></input>
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
