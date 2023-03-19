import CreateForm from "../../components/CreateForm/CreateForm";
import CreatePageStyled from "./CreatePageStyled";

const CreatePage = (): JSX.Element => {
  return (
    <CreatePageStyled>
      <h1 className="create-page__title">Create a project</h1>
      <CreateForm />
    </CreatePageStyled>
  );
};

export default CreatePage;
