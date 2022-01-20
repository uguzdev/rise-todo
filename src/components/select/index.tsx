import React, { FC, SelectHTMLAttributes } from "react";
import styled from "styled-components";
import { COLORS } from "../../commons/constant";

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Array<{
    label: string | number;
    value: string | number;
  }>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectInput = styled.select`
  padding: 10px;
  width: 100%;
`;

const SelectOption = styled.option``;

const Label = styled.span`
  color: ${COLORS.textGray};
  font-size: 15px;
  text-align: left;
  display: flex;
  margin-bottom: 5px;
  font-size: 15px;
`;

const Select: FC<ISelect> = (props) => {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <SelectInput {...props}>
        {props.options.map(({ value, label }, index) => (
          <SelectOption key={index} value={value}>
            {label}
          </SelectOption>
        ))}
      </SelectInput>
    </Wrapper>
  );
};

export default Select;
