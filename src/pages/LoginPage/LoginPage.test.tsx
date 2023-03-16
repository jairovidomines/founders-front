import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import "react-router-dom";
import { UserState } from "../../store/features/userSlice/types";
import {
  renderRouterWithProviders,
  renderWithProviders,
} from "../../testUtils/renderWithProviders";
import LoginPage from "./LoginPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text: 'Log in'", () => {
      const expectResult = "Log in";

      renderWithProviders(<LoginPage />);

      const result = screen.getByRole("button", { name: expectResult });

      expect(result).toBeInTheDocument();
    });

    test("Then it should navigate to the root path", () => {
      const user: UserState = {
        username: "",
        token: "",
        id: "",
        isLogged: true,
      };

      renderRouterWithProviders({ user: user }, <LoginPage />);
      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
