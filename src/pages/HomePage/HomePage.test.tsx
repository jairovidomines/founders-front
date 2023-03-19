import { screen } from "@testing-library/react";
import { mockProjects } from "../../mocks/mocks";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import HomePage from "./HomePage";

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockProjects.projects,
}));

describe("Given a HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of Cards", () => {
      renderRouterWithProviders({}, <HomePage />);

      const result = screen.getByRole("list");

      expect(result).toBeInTheDocument();
    });
  });
});
