import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { PRIORITY_OPTIONS } from "../../commons/constant";
import {
  ActionButtonWrapper,
  InputWrapper,
  ModalButtons,
  ModalContent,
  ModalTitle,
} from "../../commons/style/styled";
import { updateTodo } from "../../store/todo/actions";
import { ITodo } from "../../store/todo/types";
import Button from "../button";
import DialogModal from "../dialog-modal";
import Input from "../input";
import Select from "../select";

interface IEditModal {
  onClose: () => void;
  todo: ITodo;
}

const EditModal: FC<IEditModal> = ({ onClose, todo }) => {
  const dispatch = useDispatch();
  const [selectedTodo, setSelectedTodo] = useState<ITodo>(todo);

  const handleEditTodo = () => {
    dispatch(updateTodo(selectedTodo));
    onClose();
  };
  return (
    <DialogModal>
      <ModalContent>
        <ModalTitle>Job Edit</ModalTitle>
        <InputWrapper>
          <Input
            inputLabel="Job Name"
            value={selectedTodo?.name || ""}
            disabled
          />
        </InputWrapper>
        <InputWrapper>
          <Select
            options={PRIORITY_OPTIONS}
            value={selectedTodo?.priority}
            onChange={({ target: { value } }) =>
              setSelectedTodo({
                ...selectedTodo,
                priority: parseInt(value),
              })
            }
            label="Priority"
          />
        </InputWrapper>
      </ModalContent>

      <ModalButtons>
        <ActionButtonWrapper>
          <Button title="Cancel" handleClick={onClose} />
        </ActionButtonWrapper>
        <ActionButtonWrapper>
          <Button
            title="Update"
            buttonType="primary"
            handleClick={handleEditTodo}
          />
        </ActionButtonWrapper>
      </ModalButtons>
    </DialogModal>
  );
};

export default EditModal;
