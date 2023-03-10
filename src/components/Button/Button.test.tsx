import { render, screen } from "@testing-library/react";
import Wrapper from "../../testUtils/Wrapper";
import GlobalStyles from "../../styles/GlobalStyles";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered with 'Log in' text", () => {
    test("Then it should return a button with 'Log in' text", () => {
      const buttonText = "Log in";

      render(
        <Wrapper>
          <GlobalStyles />
          <Button text={buttonText} />
        </Wrapper>
      );

      const buttonElement = screen.getByRole("button", { name: buttonText });

      expect(buttonElement).toBeInTheDocument();
    });
  });
});
