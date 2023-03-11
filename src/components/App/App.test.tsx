import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text 'Log in'", () => {
      const expectText = "Log in";

      renderWithProviders(<App />);

      const result = screen.getByRole("button", { name: expectText });

      expect(result).toBeInTheDocument();
    });
  });
});
