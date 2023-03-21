import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockProjectAndroid } from "../../mocks/mocks";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import CardDetail from "./CardDetail";

const mockDeleteProject = jest.fn();

jest.mock("../../hooks/useProjects/useProjects", () => () => ({
  deleteProject: mockDeleteProject,
}));

describe("Given a CardDetail component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with title: 'Anyone'", () => {
      const expectTitle = "Anyone";

      renderRouterWithProviders(
        {},
        <CardDetail project={mockProjectAndroid} />
      );

      const result = screen.getByRole("heading", { name: expectTitle });

      expect(result).toBeInTheDocument();
    });
  });

  describe("When tue user click the delete button", () => {
    test("then the deleteProject function should be called", async () => {
      const expectedButtonText = "delete";

      renderRouterWithProviders(
        { user: { isLogged: true, id: "34567", token: "", username: "" } },
        <CardDetail project={mockProjectAndroid} />
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(mockDeleteProject).toHaveBeenCalledWith(mockProjectAndroid.id);
    });
  });
});
