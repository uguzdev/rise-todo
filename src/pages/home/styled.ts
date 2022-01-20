import styled from "styled-components";
import { HeadTh } from "../../components/table/styled";
import { COLORS } from "../../commons/constant";
import { getPriorityColor } from "../../helper";

export const SectionTitle = styled.h3`
  text-align: left;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
`;

export const BodyTh = styled(HeadTh)`
  font-weight: normal;
`;

export const PriorityLabel = styled.span<{
  type: number;
}>`
  background-color: ${({ type }) => getPriorityColor(type)};

  color: ${COLORS.white};
  font-size: 14px;
  padding: 10px;
  border-radius: 5px;
`;
