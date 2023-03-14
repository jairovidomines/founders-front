import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Header from "../Header/Header";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text: 'Log in'", () => {
      const expectText = "founders_logo";

      renderWithProviders(<Header />, {
        user: { isLogged: true, id: "", token: "", username: "" },
      });

      const result = screen.getByAltText(expectText);

      expect(result).toBeInTheDocument();
    });
  });
});
