import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the logo", () => {
      renderWithProviders(<Header />);

      const result = screen.getByRole("img");

      expect(result).toBeInTheDocument();
    });
  });
});
