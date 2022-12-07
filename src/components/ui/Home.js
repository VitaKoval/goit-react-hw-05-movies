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

export const ImgCard = styled.img`
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
export const CardReleaseDate = styled.p`
color: red;
margin: 0;
`