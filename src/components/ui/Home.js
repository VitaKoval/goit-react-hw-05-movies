import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export const CardsList = styled(motion.ul)`
display: flex;
flex-wrap: wrap;
list-style: none;
margin: 16px -16px;
`

export const Card = styled(motion.li)`
width: calc((100% - 16px*6)/3);
margin: 16px;


`
export const ImgCard = styled.div`
width: 100%;
overflow: hidden;
transform: scale(1);
transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
   transform: scale(1.01);
  
}
`
export const Img = styled.img`
width: 100%;
`

export const CardLink = styled(Link)`
position: relative;

text-decoration: none;
color: inherit;
font-size: 14px;

`
export const CardTitle = styled.h3`
margin: 0 0 5px 0;
`

export const CardInfo = styled.p`
position: absolute;
bottom: 0;
right: 0;

margin: 0;
display: inline-flex;

padding: 3px 6px;
border-radius: 10px;

font-size: 18px;
color: #a6a6a6;
`

export const CardRepleaseGenre = styled.p`
    color: #a6a6a6;
    font-size: 12px;
    font-weight: 450;
    line-height: 18px;
`

export const CardReleaseDate = styled.span`
`

export const CardGenre = styled.span`

`

