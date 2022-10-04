import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;

  background-color: #333;
`;

export const LogoLink = styled(Link)`
  display: flex;
  padding: 20px;
  margin-right: 60px;
  color: black;
  text-decoration: none;
`;

export const NavGroup = styled.nav`
  display: flex;
 
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;

  padding: 10px;
  margin-right: 20px;
  border: 1px solid red;
  border-radius: 10px;

  color: black;
  text-decoration: none;

  background-color: white;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active, :hover {
    font-weight: bold;
     opacity: 1;
  }
  
`;

export const IconNav = styled.span`
fill: currentColor;
margin-right: 10px;

`