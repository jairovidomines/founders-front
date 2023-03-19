import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import CreatePage from "./CreatePage";

describe("Given a CreatePage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with text: 'Create a project'", () => {
      const expectText = "Create a project";

      renderRouterWithProviders({}, <CreatePage />);

      const result = screen.getByRole("heading", { name: expectText });

      expect(result).toBeInTheDocument();
    });
  });
});
