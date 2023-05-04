import { EditCategoryButton } from './EditCategoryButton';
import { DeleteCategoryButton } from './DeleteCategoryButton';
import React from 'react';
import { useDataContext } from '../../contexts/DataContext';
import dateFormat from 'dateformat';
import { Table, TableData, TableHeader } from '../../components/styles';

export const CategoriesTable = () => {
  const { categories } = useDataContext();

  const categoryRows = categories.map((category) => {
    const { createdAt, modifiedAt } = category;
    return {
      ...category,
      createdAt: dateFormat(createdAt, 'fullDate'),
      modifiedAt: modifiedAt ? dateFormat(modifiedAt, 'fullDate') : '-',
    };
  });

  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Name</TableHeader>
          <TableHeader>Priority</TableHeader>
          <TableHeader>Created At</TableHeader>
          <TableHeader>Updated At</TableHeader>
          <TableHeader>Actions</TableHeader>
        </tr>
      </thead>
      <tbody>
        {categoryRows.map((category) => {
          return (
            <tr key={category.id}>
              <TableData $width={150}>{category.name}</TableData>
              <TableData>{category.priority}</TableData>
              <TableData $width={150}>{category.createdAt}</TableData>
              <TableData $width={150}>{category.modifiedAt}</TableData>
              <TableData $width={150}>
                <EditCategoryButton category={category} />
                <DeleteCategoryButton category={category} />
              </TableData>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
