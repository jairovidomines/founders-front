import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text: 'Log in'", () => {
      const expectText = "founders_logo";

      renderRouterWithProviders(
        {
          user: { isLogged: true, id: "", token: "", username: "" },
        },
        <Layout />
      );

      const result = screen.getByTestId(expectText);

      expect(result).toBeInTheDocument();
    });
  });

  describe("When it is rendered and isLoading is true", () => {
    test("Then it should show the Loader component", () => {
      const areaLabel = "Page loading";

      renderRouterWithProviders({
        ui: {
          isLoading: true,
          modal: { message: "", isError: true, isSucess: false },
        },
      });

      const loader = screen.getByLabelText(areaLabel);

      expect(loader).toBeInTheDocument();
    });
  });
});
