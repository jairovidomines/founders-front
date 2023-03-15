import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFound component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an icon'", () => {
      const expectText = "page_not_found";

      renderRouterWithProviders(<NotFoundPage />);

      const result = screen.getByTestId(expectText);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show a button with text: 'Back to home page'", () => {
      const expectText = "Back to home page";

      renderRouterWithProviders(<NotFoundPage />);

      const result = screen.getByRole("link", { name: expectText });

      expect(result).toBeInTheDocument();
    });
  });
});
