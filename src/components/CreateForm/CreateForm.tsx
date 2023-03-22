import { useState } from "react";
import useProjects from "../../hooks/useProjects/useProjects";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import CreateFormStyled from "./CreateFormStyled";

const CreateForm = (): JSX.Element => {
  const { id } = useAppSelector((state) => state.user);
  const { createProject } = useProjects();
  const [createData, setCreateData] = useState({
    name: "",
    website: "",
    twitter: "",
    monthlyUsers: "",
    avatar: "",
    shortDescription: "",
    description: "",
    maker: id,
  });

  const handleCreateDataChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreateData({
      ...createData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await createProject(createData);
  };

  return (
    <CreateFormStyled
      className="create-form"
      autoComplete="off"
      onSubmit={onSubmitHandler}
    >
      <label className="create-form__label">
        Name
        <input
          className="create-form__input"
          placeholder="Name..."
          type="text"
          name="name"
          aria-label="name"
          required
          onChange={handleCreateDataChange}
        ></input>
      </label>
      <label className="create-form__label">
        Website
        <input
          className="create-form__input"
          placeholder="https://..."
          type="text"
          name="website"
          aria-label="website"
          required
          onChange={handleCreateDataChange}
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
          onChange={handleCreateDataChange}
        ></input>
      </label>
      <label className="create-form__label">
        Monthly unique users
        <select
          className="create-form__input"
          name="monthlyUsers"
          aria-label="monthly unique users"
          onChange={handleCreateDataChange}
        >
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
          name="avatar"
          aria-label="upload logo"
          required
          onChange={handleCreateDataChange}
        ></input>
      </label>
      <label className="create-form__label">
        Short description
        <textarea
          className="create-form__textarea short-description"
          placeholder="Short description..."
          name="shortDescription"
          aria-label="short description"
          maxLength={50}
          required
          onChange={handleCreateDataChange}
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
          onChange={handleCreateDataChange}
        ></textarea>
      </label>
      <Button className="create-form__button" text="Create" />
    </CreateFormStyled>
  );
};

export default CreateForm;
