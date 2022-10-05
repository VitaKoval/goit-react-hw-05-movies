// import { NavLink, Link } from 'react-router-dom';
import {
  Header,
  Container,
  LogoLink,
  NavGroup,
  NavItem,
  IconNav,
} from './ui/AppBar';
import { GrHome, GrChannel } from 'react-icons/gr';

const AppBar = () => {
  return (
    <Header>
      <Container>
        <LogoLink to="/">Movies</LogoLink>
        <NavGroup>
          <NavItem to="/">
            <IconNav>
              <GrHome />
            </IconNav>
            Home
          </NavItem>
          <NavItem to="movies">
            <IconNav>
              <GrChannel />
            </IconNav>
            Movies
          </NavItem>
        </NavGroup>
      </Container>
    </Header>
  );
};

export default AppBar;
