import React from 'react';
import PageContainer from '../../components/PageContainer';

import { AuthorsTable } from './AuthorsTable';
import { CreateAuthorButton } from './CreateAuthorButton';
import {
  PageBody,
  PageHeader,
  SubTitle,
  Title,
} from '../../components/PageContainer.styles';

function Authors() {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Authors</Title>
        <SubTitle>View, edit, delete or insert new authors</SubTitle>
      </PageHeader>
      <PageBody>
        <CreateAuthorButton />
        <AuthorsTable />
      </PageBody>
    </PageContainer>
  );
}

export default Authors;
