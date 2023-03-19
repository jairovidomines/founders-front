import Button from "../Button/Button";
import CreateFormStyled from "./CreateFormStyled";

const CreateForm = (): JSX.Element => {
  return (
    <CreateFormStyled className="create-form" autoComplete="off">
      <label className="create-form__label">
        Name
        <input
          className="create-form__input"
          placeholder="Name..."
          type="text"
          name="name"
          aria-label="name"
          required
        ></input>
      </label>
      <label className="create-form__label">
        Website
        <input
          className="create-form__input"
          placeholder="Website..."
          type="text"
          name="website"
          aria-label="website"
          required
        ></input>
      </label>
      <label className="create-form__label">
        Twitter
        <input
          className="create-form__input"
          placeholder="@..."
          type="text"
          name="twitter"
          aria-label="twitter"
          required
        ></input>
      </label>
      <label className="create-form__label">
        Monthly unique users
        <select className="create-form__input">
          <option value="select">Select a range...</option>
          <option value="0 - 25.000">0 - 25.000</option>
          <option value="25.000 - 50.000">25.000 - 50.000</option>
          <option value="50.000 - 75.000">50.000 - 75.000</option>
          <option value="75.000 - 100.000">75.000 - 100.000</option>
          <option value="100.000 - 150.000">100.000 - 150.000</option>
          <option value="+ 200.000">+ 200.000</option>
        </select>
      </label>
      <label className="create-form__label">
        Upload logo
        <input
          className="create-form__input"
          placeholder="Insert url..."
          type="text"
          name="upload logo"
          aria-label="upload logo"
          required
        ></input>
      </label>
      <label className="create-form__label">
        Short description
        <textarea
          className="create-form__textarea short-description"
          placeholder="Short description..."
          name="short description"
          aria-label="short description"
          maxLength={50}
          required
        ></textarea>
      </label>
      <label className="create-form__label">
        Description
        <textarea
          className="create-form__textarea description"
          placeholder="Description..."
          name="description"
          aria-label="description"
          maxLength={200}
          required
        ></textarea>
      </label>
      <Button className="create-form__button" text="Create" />
    </CreateFormStyled>
  );
};

export default CreateForm;
