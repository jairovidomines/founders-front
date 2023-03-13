import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the logo", () => {
      const expectText = "founders_logo";

      renderWithProviders(<Header />, {
        user: { isLogged: true, id: "", token: "", username: "" },
      });

      const result = screen.getByAltText(expectText);

      expect(result).toBeInTheDocument();
    });
  });
});
