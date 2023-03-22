import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockProjectIos, mockProjectTobeCreated } from "../../mocks/mocks";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import CreateForm from "./CreateForm";

const mockedSubmit = jest.fn();

jest.mock("../../hooks/useProjects/useProjects", () => () => ({
  createProject: mockedSubmit,
}));

describe("Given a CreateForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a placeholder with text: 'Name...'", () => {
      const expectPlaceholderText = "Name...";

      renderRouterWithProviders({}, <CreateForm />);

      const result = screen.getByPlaceholderText(expectPlaceholderText);

      expect(result).toBeInTheDocument();
    });
  });

  describe("When the user submits the form with the information of the project", () => {
    test("Then the createProject function should be called", async () => {
      const name = "Name...";
      const website = "https://...";
      const twitter = "@...";
      const avatar = "Insert url...";
      const shortDescription = "Short description...";
      const description = "Description...";
      const buttonText = "Create";

      renderRouterWithProviders({}, <CreateForm />);

      const nameInput = screen.getByPlaceholderText(name);
      const websiteInput = screen.getByPlaceholderText(website);
      const twitterInput = screen.getByPlaceholderText(twitter);

      const avatarInput = screen.getByPlaceholderText(avatar);
      const shortDescriptionInput =
        screen.getByPlaceholderText(shortDescription);
      const descriptionInput = screen.getByPlaceholderText(description);
      const submitButton = screen.getByRole("button", { name: buttonText });

      await userEvent.type(nameInput, mockProjectIos.name);
      await userEvent.type(websiteInput, mockProjectIos.website);
      await userEvent.type(twitterInput, mockProjectIos.twitter);

      await userEvent.type(avatarInput, mockProjectIos.avatar);
      await userEvent.type(
        shortDescriptionInput,
        mockProjectIos.shortDescription
      );
      await userEvent.type(descriptionInput, mockProjectIos.description);
      await userEvent.click(submitButton);

      expect(mockedSubmit).toHaveBeenCalledWith(mockProjectTobeCreated);
    });
  });
});
