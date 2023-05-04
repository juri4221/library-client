import React from 'react';

import PageContainer from '../../components/PageContainer';

import { BooksTable } from './BooksTable';
import { CreateBookButton } from './CreateBookButton';
import {
  PageBody,
  PageHeader,
  SubTitle,
  Title,
} from '../../components/PageContainer.styles';

function Books() {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Books</Title>
        <SubTitle>View, edit, delete or insert new books</SubTitle>
      </PageHeader>
      <PageBody>
        <CreateBookButton />
        <BooksTable />
      </PageBody>
    </PageContainer>
  );
}

export default Books;
