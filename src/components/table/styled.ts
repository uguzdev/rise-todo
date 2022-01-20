import styled from "styled-components";
import { COLORS } from "../../commons/constant";

export const TableWrapper = styled.table`
  border-spacing: 0;
`;

export const THead = styled.thead`
  background-color: #e4eafe;
  color: ${COLORS.textGray};
`;

export const HeadTr = styled.tr``;

export const HeadTh = styled.th`
  padding: 15px;
`;

export const Tbody = styled.tbody`
  padding: 15px;
`;
