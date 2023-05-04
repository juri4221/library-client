import styled from 'styled-components';
import { colorPalette } from './styles';

export const SidebarContainerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${colorPalette.feldgrau};
  min-width: 220px;
  padding: 14px;
  color: white;
  cursor: default;

  button {
    position: absolute;
    bottom: 24px;
  }
`;

export const SideBarTitle = styled.p`
  font-size: 32px;
  margin: 8px 0 0;
`;

export const SideBarSubTitle = styled.p`
  margin-top: 0;
  font-size: 12px;
`;

export const Menu = styled.div`
  margin: 24px 0 0 16px;
  display: flex;
  flex-direction: column;

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 12px;

    :hover {
      color: ${colorPalette.linkBlue};
    }
  }
`;
