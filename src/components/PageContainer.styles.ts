import styled from 'styled-components';

export const PageContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  width: 100%;
  height: 100%;
  background-color: rgb(235, 232, 232);
`;

export const PageWrapperStyled = styled.div`
  flex-grow: 1;
  padding: 16px;
  overflow-y: scroll;
`;

export const PageHeader = styled.div``;
export const PageBody = styled.div``;

export const Title = styled.p`
  font-size: 32px;
  margin: 8px 0 0;
`;

export const SubTitle = styled.p`
  margin-top: 0;
  font-size: 12px;
`;
