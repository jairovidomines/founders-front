import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockProjectAndroid } from "../../mocks/mocks";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import Card from "./Card";

const mockDeleteProject = jest.fn();

jest.mock("../../hooks/useProjects/useProjects", () => () => ({
  deleteProject: mockDeleteProject,
}));

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the avatar ot fhe project", () => {
      renderRouterWithProviders({}, <Card project={mockProjectAndroid} />);

      const result = screen.getByRole("img");

      expect(result).toBeInTheDocument();
    });

    test("Then it should show a heading with text 'Anyone'", () => {
      const expectHeading = "Anyone";

      renderRouterWithProviders({}, <Card project={mockProjectAndroid} />);

      const result = screen.getByRole("heading", { name: expectHeading });

      expect(result).toBeInTheDocument();
    });
  });

  describe("When the user click the delete button", () => {
    test("Then the deleteProject function should be called", async () => {
      const expectButtonText = "delete";

      renderRouterWithProviders(
        { user: { isLogged: true, id: "34567", token: "", username: "" } },
        <Card project={mockProjectAndroid} />
      );

      const button = screen.getByRole("button", { name: expectButtonText });

      await userEvent.click(button);

      expect(mockDeleteProject).toHaveBeenCalledWith(mockProjectAndroid.id);
    });
  });
});
