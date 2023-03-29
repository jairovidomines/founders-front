import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Filter from "./Filter";

describe("Given a Filter component", () => {
  describe("When its rendered", () => {
    test("Then it should show a select input with aria-label text: filter by", () => {
      const expectTextAriaLabel = "filter by";

      renderWithProviders(<Filter />);

      const result = screen.getByLabelText(expectTextAriaLabel);

      expect(result).toBeInTheDocument();
    });
  });
});
