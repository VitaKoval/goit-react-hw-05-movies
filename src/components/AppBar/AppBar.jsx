// import { NavLink, Link } from 'react-router-dom';
import { Header, LogoLink, NavGroup, NavItem, IconNav } from '../ui/AppBar'
import { GrHome, GrChannel } from "react-icons/gr"

const AppBar = () => {
  return (
    <Header>
      <LogoLink to="/">TMDB Movies</LogoLink>
      <NavGroup>
        <NavItem to="/"><IconNav><GrHome/></IconNav>Home</NavItem>
        <NavItem to="movies"><IconNav><GrChannel/></IconNav>Movies</NavItem>
      </NavGroup>
    </Header>
  );
};

export default AppBar;
