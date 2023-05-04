import React from 'react';
import { PageContainerStyled, PageWrapperStyled } from './PageContainer.styles';
import { SideBarContainer } from './SideBarContainer';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <PageContainerStyled>
      <SideBarContainer />
      <PageWrapperStyled> {children}</PageWrapperStyled>
    </PageContainerStyled>
  );
};

export default PageContainer;
