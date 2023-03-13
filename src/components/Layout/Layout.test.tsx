import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text: 'Log in'", () => {
      const expectText = "founders_logo";

      renderWithProviders(<Layout />, {
        user: { isLogged: true, id: "", token: "", username: "" },
      });

      const result = screen.getByAltText(expectText);

      expect(result).toBeInTheDocument();
    });
  });
});
