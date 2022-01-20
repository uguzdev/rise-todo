import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PRIORITY_OPTIONS } from "../../commons/constant";
import { addTodo } from "../../store/todo/actions";
import Button from "../button";
import Input from "../input";
import Select from "../select";

import {
  ButtonWrapper,
  CreateFormWrapper,
  Inputs,
  InputWrapper,
  SectionTitle,
} from "./styled";

const AddForm = () => {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = useState("");
  const [todoType, setTodoType] = useState(2);

  const add = async () => {
    const addPayload = {
      name: todoName,
      id: Math.random(),
      priority: todoType,
    };

    if (todoName !== "") {
      dispatch(addTodo(addPayload));
      setTodoName("");
    }
  };

  return (
    <CreateFormWrapper>
      <SectionTitle>Create New Job</SectionTitle>
      <Inputs>
        <InputWrapper grid={4}>
          <Input
            inputLabel="Job Name"
            value={todoName}
            onChange={({ target: { value } }) => setTodoName(value)}
            maxLength={255}
          />
        </InputWrapper>
        <InputWrapper grid={2}>
          <Select
            options={PRIORITY_OPTIONS}
            label="Job Priority"
            onChange={({ target: { value } }) => setTodoType(parseInt(value))}
          />
        </InputWrapper>
        <ButtonWrapper grid={1}>
          <Button title="Create" handleClick={add} />
        </ButtonWrapper>
      </Inputs>
    </CreateFormWrapper>
  );
};

export default AddForm;
