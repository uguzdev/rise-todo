import React, { FC } from "react";
import { Modal, ModalInner } from "./styled";

const DialogModal: FC = ({ children }) => (
  <Modal>
    <ModalInner>{children}</ModalInner>
  </Modal>
);

export default DialogModal;
