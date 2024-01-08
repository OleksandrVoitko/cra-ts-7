import { ButtonStyle } from "./Button.styled";

const Button = ({
  handleClick,
  selected = false,
  type = "button",
  children,
}) => {
  return (
    <ButtonStyle onClick={handleClick} selected={selected} type={type}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
