import { Link } from 'react-router-dom';
import { routeMap } from '../routes/routeMap';
import {
  Menu,
  SidebarContainerStyled,
  SideBarSubTitle,
  SideBarTitle,
} from './SideBarContainer.styles';
import { useAuthenticate } from '../hooks/useAuthenticate';
import { Button } from './Button';

export const SideBarContainer = () => {
  const { signOut } = useAuthenticate();

  return (
    <SidebarContainerStyled>
      <SideBarTitle> Hello! </SideBarTitle>
      <SideBarSubTitle> And welcome </SideBarSubTitle>

      <Menu>
        <Link to={routeMap.home}>Home</Link>
        <Link to={routeMap.books}>Books</Link>
        <Link to={routeMap.categories}> Categories</Link>
        <Link to={routeMap.authors}>Authors</Link>
      </Menu>
      <Button onClick={signOut}>Sign Out</Button>
    </SidebarContainerStyled>
  );
};
