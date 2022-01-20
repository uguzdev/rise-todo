import React, { FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../commons/constant";

interface IButton {
  title?: string;
  handleClick: () => void;
  buttonType?: "primary" | "warning";
}

const ButtonWrapper = styled.button<{ buttonType?: "primary" | "warning" }>`
  background-color: ${({ buttonType }) =>
    buttonType === "warning" ? COLORS.urgentPink : COLORS.buttonBlue};
  color: white;
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  height: 40px;
`;

const Button: FC<IButton> = ({ title, handleClick, buttonType }) => (
  <ButtonWrapper buttonType={buttonType} onClick={handleClick}>
    {title}
  </ButtonWrapper>
);

export default Button;
