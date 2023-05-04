import React from 'react';

import PageContainer from '../../components/PageContainer';

import { CreateCategoryButton } from './CreateCategoryButton';
import { CategoriesTable } from './CategoriesTable';
import {
  PageBody,
  PageHeader,
  SubTitle,
  Title,
} from '../../components/PageContainer.styles';

function Categories() {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Categories</Title>
        <SubTitle>View, edit, delete or insert new categories</SubTitle>
      </PageHeader>
      <PageBody>
        <CreateCategoryButton />
        <CategoriesTable />
      </PageBody>
    </PageContainer>
  );
}

export default Categories;
