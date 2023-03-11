import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text: 'Log in'", () => {
      const expectText = "Log in";

      renderWithProviders(<Layout />);

      const result = screen.getByRole("button", { name: expectText });

      expect(result).toBeInTheDocument();
    });
  });
});
