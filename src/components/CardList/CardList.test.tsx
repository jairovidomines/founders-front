import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of Cards", () => {
      renderWithProviders(<CardList />);

      const result = screen.getByRole("list");

      expect(result).toBeInTheDocument();
    });
  });
});
