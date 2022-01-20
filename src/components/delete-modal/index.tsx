import React, { FC } from "react";

import { useDispatch } from "react-redux";
import {
  ActionButtonWrapper,
  ModalButtons,
  ModalContent,
  ModalTitle,
} from "../../commons/style/styled";
import { removeTodo } from "../../store/todo/actions";
import Button from "../button";
import DialogModal from "../dialog-modal";

interface IDeleteModal {
  onClose: () => void;
  todoId: number;
}

const DeleteModal: FC<IDeleteModal> = ({ onClose, todoId }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todoId));
    onClose();
  };

  return (
    <DialogModal>
      <ModalContent>
        <ModalTitle>Are you sure you want to delete it? </ModalTitle>
      </ModalContent>

      <ModalButtons>
        <ActionButtonWrapper>
          <Button title="Cancel" handleClick={onClose} />
        </ActionButtonWrapper>
        <ActionButtonWrapper>
          <Button
            title="Delete"
            buttonType="warning"
            handleClick={handleRemoveTodo}
          />
        </ActionButtonWrapper>
      </ModalButtons>
    </DialogModal>
  );
};

export default DeleteModal;
