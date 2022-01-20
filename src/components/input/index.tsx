import React, { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { COLORS } from "../../commons/constant";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  height: 20px;
  padding: 8px;
  border: 1px solid ${COLORS.textGray};
  border-radius: 3px;
`;
const Label = styled.span`
  color: ${COLORS.textGray};
  font-size: 15px;
  text-align: left;
  display: flex;
  margin-bottom: 5px;
  font-size: 15px;
`;

const Input: FC<IInput> = (props) => (
  <Wrapper>
    <Label>{props.inputLabel}</Label>
    <TextInput {...props} />
  </Wrapper>
);

export default Input;
