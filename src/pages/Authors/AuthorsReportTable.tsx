import dateFormat from 'dateformat';
import { Table, TableData, TableHeader } from '../../components/styles';
import React from 'react';
import { useDataContext } from '../../contexts/DataContext';

export const AuthorsReportTable = () => {
  const { authors } = useDataContext();
  const authorsRows = authors
    .map((author) => {
      const { createdAt, modifiedAt } = author;
      return {
        ...author,
        createdAt: dateFormat(createdAt, 'fullDate'),
        modifiedAt: modifiedAt ? dateFormat(modifiedAt, 'fullDate') : '-',
        numberOfBooks: author.books.length,
        books: author.books.map(
          (book, index) => `${index !== 0 ? ', ' : ''} ${book.name} `,
        ),
      };
    })
    .sort((a, b) => b.numberOfBooks - a.numberOfBooks);

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>Number of Books</TableHeader>
          <TableHeader>Books</TableHeader>
          <TableHeader>Created At</TableHeader>
          <TableHeader>Updated At</TableHeader>
        </tr>
      </thead>
      <tbody>
        {authorsRows.map((author) => (
          <tr key={author.id}>
            <TableData $width={150}>{author.fullName}</TableData>
            <TableData $width={20}>{author.numberOfBooks}</TableData>
            <TableData $width={150}>{author.books}</TableData>
            <TableData $width={150}>{author.createdAt}</TableData>
            <TableData $width={150}>{author.modifiedAt}</TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
