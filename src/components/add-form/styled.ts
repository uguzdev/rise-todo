import styled from "styled-components";

export const CreateFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
`;

export const SectionTitle = styled.h3`
  text-align: left;
`;

export const InputWrapper = styled.div<{ grid?: number }>`
  flex: ${({ grid }) => grid};
  padding: 10px;
`;

export const ButtonWrapper = styled(InputWrapper)`
  display: flex;
  align-items: flex-end;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: row;
`;
