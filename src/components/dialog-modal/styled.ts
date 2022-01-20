import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalInner = styled.div`
  width: 50%;
  background: white;
  border-radius: 10px;
  min-height: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
