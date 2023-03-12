import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import NavigationBar from "./NavigationBar";

describe("Given a Navigation Bar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navbar", () => {
      renderWithProviders(<NavigationBar />);

      const result = screen.getByRole("navigation");

      expect(result).toBeInTheDocument();
    });
  });
});
