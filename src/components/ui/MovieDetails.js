import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  margin: 10px 0;
  padding: 4px;

  background-color: #f60;
  border-radius: 10px;
  cursor: pointer;
`;

export const Vote = styled.p`
  display: inline-block;
  min-width: 20px;
  padding: 2px 5px 0;
  margin: 0 0 10px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: gray;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
`;

export const DetailsTitle = styled.h3`
  margin: 5px 0;
`;

export const DetailsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const DetailItem = styled.li``;

export const DetailLink = styled(NavLink)`
  text-decoration: none;
  color: rgb(51, 51, 51);
  font-size: 14px;
  line-height: 20px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  padding: 5px;
  margin: 0 10px 0 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: gray;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;

  &.active {
    color: black;
    font-weight: bold;
    background-color: #ccc;
  }
`;
