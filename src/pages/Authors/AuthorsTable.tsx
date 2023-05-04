import dateFormat from 'dateformat';
import { Table, TableData, TableHeader } from '../../components/styles';
import React from 'react';
import { useDataContext } from '../../contexts/DataContext';
import { EditAuthorButton } from './EditAuthorButton';
import { DeleteAuthorButton } from './DeleteAuthorButton';

export const AuthorsTable = () => {
  const { authors } = useDataContext();
  const authorsRows = authors.map((author) => {
    const { createdAt, modifiedAt } = author;
    return {
      ...author,
      createdAt: dateFormat(createdAt, 'fullDate'),
      modifiedAt: modifiedAt ? dateFormat(modifiedAt, 'fullDate') : '-',
    };
  });

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>Bio</TableHeader>
          <TableHeader>Created At</TableHeader>
          <TableHeader>Updated At</TableHeader>
          <TableHeader>Actions</TableHeader>
        </tr>
      </thead>
      <tbody>
        {authorsRows.map((author) => (
          <tr key={author.id}>
            <TableData $width={150}>{author.fullName}</TableData>
            <TableData>{author.bio}</TableData>
            <TableData $width={150}>{author.createdAt}</TableData>
            <TableData $width={150}>{author.modifiedAt}</TableData>
            <TableData $width={150}>
              <EditAuthorButton author={author} />
              <DeleteAuthorButton author={author} />
            </TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
