import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text 'Log in'", () => {
      const expectText = "founders_logo";

      renderRouterWithProviders(<App />, {
        user: { isLogged: true, id: "", token: "", username: "" },
      });

      const result = screen.getByTestId(expectText);

      expect(result).toBeInTheDocument();
    });
  });
});
