import dateFormat from 'dateformat';
import React from 'react';
import { useDataContext } from '../../contexts/DataContext';
import { EditBookButton } from './EditBookButton';
import { DeleteBookButton } from './DeleteBookButton';
import { Table, TableData, TableHeader } from '../../components/styles';

export const BooksTable = () => {
  const { books } = useDataContext();

  const booksRowsRows = books.map((book) => {
    const { createdAt, modifiedAt } = book;
    return {
      ...book,
      createdAt: dateFormat(createdAt, 'fullDate'),
      modifiedAt: modifiedAt ? dateFormat(modifiedAt, 'fullDate') : '-',
    };
  });

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Image</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Categories</TableHeader>
          <TableHeader>Description</TableHeader>
          <TableHeader>Created At</TableHeader>
          <TableHeader>Updated At</TableHeader>
          <TableHeader>Actions</TableHeader>
        </tr>
      </thead>
      <tbody>
        {booksRowsRows.map((book) => (
          <tr key={book.id}>
            <td>
              <img
                height={100}
                src={`http://localhost:5233/${book.imageSource}`}
              />
            </td>
            <TableData $width={120}>{book.name}</TableData>
            <TableData $width={120}>
              {book.categories.map(
                (category, index) =>
                  `${index !== 0 ? ', ' : ''} ${category.name} `,
              )}
            </TableData>
            <TableData>{book.description}</TableData>
            <TableData $width={150}>{book.createdAt}</TableData>
            <TableData $width={150}>{book.modifiedAt}</TableData>
            <TableData $width={150}>
              <EditBookButton book={book} />
              <DeleteBookButton book={book} />
            </TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
