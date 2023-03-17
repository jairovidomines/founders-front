import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  icon?: JSX.Element;
  children?: PropsWithChildren;
  action?: () => void;
  className?: string;
  ariaLabel?: string;
}

const Button = ({
  text,
  action,
  children,
  icon,
  className,
  ariaLabel,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled aria-label={ariaLabel} className={className} onClick={action}>
      {icon}
      {text}
    </ButtonStyled>
  );
};

export default Button;
