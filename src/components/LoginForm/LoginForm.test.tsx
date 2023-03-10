import { act, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserCredentials } from "../../hooks/useUser/types";
import renderWithProviders from "../../testUtils/renderWithProviders";
import LoginForm from "./LoginForm";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with alt text: 'founders_logo'", () => {
      const expectResult = "founders_logo";

      renderWithProviders(<LoginForm />);

      const result = screen.getByAltText(expectResult);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show an input with label text: 'Username'", () => {
      const expectResult = "Username";

      renderWithProviders(<LoginForm />);

      const result = screen.getByLabelText(expectResult);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show an input with label text: 'Password'", () => {
      const expectResult = "Password";

      renderWithProviders(<LoginForm />);

      const result = screen.getByLabelText(expectResult);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show a button with text: 'Log in'", () => {
      const expectResult = "Log in";

      renderWithProviders(<LoginForm />);

      const result = screen.getByRole("button", { name: expectResult });

      expect(result).toBeInTheDocument();
    });

    test("Then it should show the text: 'Not a member?'", () => {
      const expectResult = "Not a member?";

      renderWithProviders(<LoginForm />);

      const result = screen.getByText(expectResult);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show the text: 'Sign up'", () => {
      const expectResult = "Sign up";

      renderWithProviders(<LoginForm />);

      const result = screen.getByText(expectResult);

      expect(result).toBeInTheDocument();
    });
  });

  describe("When the user writes on the 'Username' input", () => {
    test("Then it changes the value of this input", async () => {
      const expectUsernameLabel = "Username";
      const expectResult = "Jairo";

      renderWithProviders(<LoginForm />);

      const result = screen.getByLabelText(expectUsernameLabel);

      await act(async () => await userEvent.type(result, expectResult));

      expect(result).toHaveValue(expectResult);
    });
  });

  describe("When the user writes on the 'Password' input", () => {
    test("Then it changes the value of this input", async () => {
      const expectPasswordLabel = "Password";
      const expectResult = "Jairo1020!";

      renderWithProviders(<LoginForm />);

      const result = screen.getByLabelText(expectPasswordLabel);

      await act(async () => await userEvent.type(result, expectResult));

      expect(result).toHaveValue(expectResult);
    });
  });

  describe("When the user submit the form", () => {
    test("Then the loginUser function should be called", async () => {
      const expectUsernameLabel = "Username...";
      const expectPasswordLabel = "Password...";
      const expectSubmitButton = "Log in";

      const mockUser: UserCredentials = {
        username: "",
        password: "",
      };

      renderWithProviders(<LoginForm />);

      const resultUsername = screen.getByPlaceholderText(expectUsernameLabel);
      const resultPassword = screen.getByPlaceholderText(expectPasswordLabel);
      const resultSubmit = screen.getByRole("button", {
        name: expectSubmitButton,
      });

      fireEvent.change(resultUsername, mockUser.username);
      fireEvent.change(resultPassword, mockUser.password);
      fireEvent.click(resultSubmit);

      expect(mockLoginUser).toHaveBeenCalledWith(mockUser);
    });
  });
});
