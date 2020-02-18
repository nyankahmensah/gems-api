import React from 'react';
import { useTable } from '../../hooks';
import TableComponents from './TableComponents';
import TableContainer from './Table';

const { Table, TableHeader, TableContent } = TableContainer;

const {
  DateFormatter,
  CompanyProfile,
  OrganizationFormatter,
  EmailFormatter,
  ReasonForRequestFormatter,
  ActionsFormatter,
} = TableComponents;

const columns = [
  {
    name: '',
    key: '',
    flex: 0.13,
    cell: CompanyProfile,
  },
  {
    name: 'Organization',
    key: '',
    flex: 0.5,
    cell: OrganizationFormatter,
  },
  {
    name: 'Email',
    key: '',
    flex: 0.4,
    cell: EmailFormatter,
  },
  {
    name: 'Reason for Request',
    key: 'requestReason',
    flex: 0.8,
    cell: ReasonForRequestFormatter,
  },
  {
    name: 'Date',
    key: 'createdAt',
    flex: 0.4,
    cell: DateFormatter,
  },
  {
    name: 'Actions',
    key: 'actions',
    flex: 0.2,
    cell: ActionsFormatter,
  },
];

const ApprovalTable = ({ rowsFromDataSource }) => {
  const { rows } = useTable({ rows: rowsFromDataSource });

  return (
    <Table>
      <TableHeader columns={columns} />
      <TableContent columns={columns} records={rows} />
    </Table>
  );
};

export default ApprovalTable;
