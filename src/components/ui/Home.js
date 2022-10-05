import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const CardsList = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
margin: 16px -16px;
`

export const Card = styled.li`
width: calc((100% - 16px*6)/3);
margin: 16px;

/* outline: 1px solid red; */
`

export const ImgCard = styled.img`
width: 100%;
`

export const CardLink = styled(Link)`
text-decoration: none;
color: inherit;
font-size: 14px;
`
export const CardTitle = styled.h3`
margin: 0 0 5px 0;
`

export const CardInfo = styled.p`
margin: 0;
display: inline-flex;

padding: 3px 6px;
border-radius: 10px;

background-color: red;
color: white;
font-size: 10px;
`