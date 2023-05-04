import React from 'react';
import PageContainer from '../components/PageContainer';
import {
  PageBody,
  PageHeader,
  SubTitle,
  Title,
} from '../components/PageContainer.styles';
import { AuthorsReportTable } from './Authors/AuthorsReportTable';

function Home() {
  return (
    <PageContainer>
      <PageHeader>
        <Title>Welcome to the library management app!</Title>
        <SubTitle>
          This is a list of authors ordered by the number of books registered in
          our library. It also contains the titles of their books.
        </SubTitle>
      </PageHeader>
      <PageBody>
        <AuthorsReportTable />
      </PageBody>
    </PageContainer>
  );
}

export default Home;
