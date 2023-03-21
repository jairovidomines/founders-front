import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import { DetailPage } from "./DetailPage";

describe("Given a DetailPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text: 'Visit website'", () => {
      const textButton = "Visit website";

      renderRouterWithProviders({}, <DetailPage />);

      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });
  });
});
