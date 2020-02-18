import React from 'react';
import styled from 'styled-components';

const TableHeader = ({ columns }) => {
  return (
    <StyledTableHeader>
      <tr>
        {columns.map(column => {
          return (
            <th
              className="heading"
              key={column.key}
              style={{
                flex: column.flex,
                ...column.style,
              }}
            >
              {column.name}
            </th>
          );
        })}
      </tr>
    </StyledTableHeader>
  );
};

const TableContent = ({ records, columns }) => {
  return (
    <StyledTableContent>
      {Boolean(columns.length) &&
        records.map((record, index) => {
          return (
            <StyledTableRow key={index}>
              {columns.map((column, index) => {
                if (column.cell && typeof column.cell === 'function') {
                  return (
                    <td
                      style={{
                        flex: column.flex,
                        ...column.style,
                      }}
                      key={index}
                    >
                      {column.cell(record, index)}
                    </td>
                  );
                } else if (record[column.key]) {
                  return (
                    <td
                      style={{
                        flex: column.flex,
                        ...column.style,
                      }}
                      key={column.key ? column.key : column.name}
                    >
                      {record[column.key]}
                    </td>
                  );
                } else {
                  return (
                    <td
                      style={{
                        flex: column.flex,
                        ...column.style,
                      }}
                    ></td>
                  );
                }
              })}
            </StyledTableRow>
          );
        })}
    </StyledTableContent>
  );
};

export const Table = ({ children }) => {
  return (
    <>
      <StyledTable>{children}</StyledTable>
    </>
  );
};

export default { Table, TableContent, TableHeader };

const StyledTableHeader = styled.thead`
  background: #cbd5e066;
  padding: 20px 25px;
  border-top-left-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  border-top-right-radius: 4px;
  tr {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;

    th {
      font-size: 15px;
      text-transform: uppercase;
      text-align: left;
      color: ${({ theme }) => theme.colors.secondaryTextColor} !important;
    }
  }
`;

const StyledTable = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
`;

const StyledTableContent = styled.tbody`
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const StyledTableRow = styled.tr`
  flex: 1;
  display: flex;
  align-items: center;
  background: white;
  padding: 15px 25px;
  border-bottom: 1px solid #e2e8f0;
  color: ${({ theme }) => theme.colors.secondaryTextColor} !important;
  cursor: pointer;
  font-size: 14.5px;

  p {
    :first-child {
      margin-bottom: 5px;
      font-weight: 500;
      font-size: 15px;
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }
  }
  :last-child {
    border-bottom: none;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;
