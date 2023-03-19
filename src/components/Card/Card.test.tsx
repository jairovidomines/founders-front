import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockProjectAndroid } from "../../mocks/mocks";
import { renderRouterWithProviders } from "../../testUtils/renderWithProviders";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the avatar ot fhe project", () => {
      renderRouterWithProviders({}, <Card project={mockProjectAndroid} />);

      const result = screen.getByRole("img");

      expect(result).toBeInTheDocument();
    });

    test("Then it should show a heading with text 'Anyone'", () => {
      const expectHeading = "Anyone";

      renderRouterWithProviders({}, <Card project={mockProjectAndroid} />);

      const result = screen.getByRole("heading", { name: expectHeading });

      expect(result).toBeInTheDocument();
    });
  });

  describe("When the user click the delete button", () => {
    test("Then the deleteProject function should be called", async () => {
      const expectButtonText = "delete";

      renderRouterWithProviders({}, <Card project={mockProjectAndroid} />);

      const result = screen.getByRole("button", { name: expectButtonText });

      await userEvent.click(result);

      expect(result).toBeInTheDocument();
    });
  });
});
