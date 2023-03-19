import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CreateForm from "./CreateForm";

describe("Given a CreateForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a placeholder with text: 'Name...'", () => {
      const expectPlaceholderText = "Name...";

      renderWithProviders(<CreateForm />);

      const result = screen.getByPlaceholderText(expectPlaceholderText);

      expect(result).toBeInTheDocument();
    });
  });
});
