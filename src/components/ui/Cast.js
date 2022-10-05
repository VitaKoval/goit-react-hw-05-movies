import styled from '@emotion/styled';

export const CastsList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
padding: 0;

list-style: none;
`

export const CastCard = styled.li`
width: calc((100% - 5px*20)/10);
margin: 5px;
`

export const CastTitle = styled.p`
font-weight: bold;
font-size: 12px;
`

export const CastImg = styled.img`
width: 100%;
`

export const CastInfo = styled.p`
font-size: 12px;
`