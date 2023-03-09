import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with alt text: 'founders_logo'", () => {
      const expectResult = "founders_logo";

      render(<Form />);

      const result = screen.getByAltText(expectResult);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show an input with label text: 'Username'", () => {
      const expectResult = "Username";

      render(<Form />);

      const result = screen.getByLabelText(expectResult);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show an input with label text: 'Password'", () => {
      const expectResult = "Password";

      render(<Form />);

      const result = screen.getByLabelText(expectResult);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show a button with text: 'Log in'", () => {
      const expectResult = "Log in";

      render(<Form />);

      const result = screen.getByRole("button", { name: expectResult });

      expect(result).toBeInTheDocument();
    });

    test("Then it should show the text: 'Not a member?'", () => {
      const expectResult = "Not a member?";

      render(<Form />);

      const result = screen.getByText(expectResult);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show the text: 'Sign up'", () => {
      const expectResult = "Sign up";

      render(<Form />);

      const result = screen.getByText(expectResult);

      expect(result).toBeInTheDocument();
    });
  });
});
