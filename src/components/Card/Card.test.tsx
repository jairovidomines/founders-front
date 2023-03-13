import { screen } from "@testing-library/react";
import { mockProjectAndroid } from "../../mocks/mocks";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the avatar ot fhe project", () => {
      renderWithProviders(<Card project={mockProjectAndroid} />);

      const result = screen.getByRole("img");

      expect(result).toBeInTheDocument();
    });

    test("Then it should show a heading with text 'Anyone'", () => {
      const expectHeading = "Anyone";

      renderWithProviders(<Card project={mockProjectAndroid} />);

      const result = screen.getByRole("heading", { name: expectHeading });

      expect(result).toBeInTheDocument();
    });
  });
});
