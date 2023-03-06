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
height: 500px;
overflow: hidden;
transform: scale(1);
transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
   transform: scale(1.01);
}
`
export const Img = styled.img`
position: relative;
width: 100%;
`

export const CardLink = styled(Link)`
position: relative;

text-decoration: none;
color: inherit;
font-size: 14px;
&:hover {
    color: #f60;
}
`
export const CardDescripton = styled.div`
padding: 10px 0px;
`

export const CardTitle = styled.h3`
margin: 0 0 5px 0;
`

export const CardInfo = styled.p`
position: absolute;
top: 0;
right: 0;

margin: 0;
display: inline-flex;

padding: 3px 6px;
border-bottom-left-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

font-size: 18px;
color: #fff;

background-color: #f60;
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

