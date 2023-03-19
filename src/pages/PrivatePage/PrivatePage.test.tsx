import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import PrivatePage from "./PrivatePage";

describe("Given a PrivatePage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text: 'My projects'", () => {
      const expectText = "My projects";

      renderWithProviders(<PrivatePage />);

      const result = screen.getByRole("heading", { name: expectText });

      expect(result).toBeInTheDocument();
    });
  });
});
