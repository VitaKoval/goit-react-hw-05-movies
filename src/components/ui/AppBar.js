import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const Header = styled.header`
  background-color: #1a1a1a;
`;

export const Container = styled.div`
display: flex;
  align-items: center;

    max-width: 1260px;
    width: auto;
    padding: 0 20px;
    margin: 0 auto;
`

export const LogoLink = styled(Link)`
  display: flex;
  padding: 20px;
  margin-right: 60px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
      letter-spacing: .8px;
      font-size: 25px;
`;

export const NavGroup = styled.div`
  display: flex;
 
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;

  padding: 10px;
  margin-right: 20px;
  border-radius: 10px;

  color: black;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;

  background-color: white;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active, &:hover {
    font-weight: bold;
     opacity: 1;
  }
  
`;

export const IconNav = styled.span`
fill: currentColor;
margin-right: 10px;

`