import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import NotFound from "./NotFound";

describe("Given a NotFound component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with alt text: 'page_not_found'", () => {
      const expectText = "page_not_found";

      renderRouterWithProviders(<NotFound />);

      const result = screen.getByTestId(expectText);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show a button with text: 'Back to home page'", () => {
      const expectText = "Back to home page";

      renderRouterWithProviders(<NotFound />);

      const result = screen.getByRole("button", { name: expectText });

      expect(result).toBeInTheDocument();
    });
  });
});
