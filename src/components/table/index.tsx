import React, { FC } from "react";

import { TableWrapper, THead, HeadTr, HeadTh, Tbody } from "./styled";

interface ITable {
  columns: string[];
}

const Table: FC<ITable> = ({ columns, children }) => (
  <TableWrapper>
    <THead>
      <HeadTr>
        {columns.map((column, index) => (
          <HeadTh key={index}>{column}</HeadTh>
        ))}
      </HeadTr>
    </THead>
    <Tbody>{children}</Tbody>
  </TableWrapper>
);

export default Table;
