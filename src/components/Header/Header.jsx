import React from 'react';
import { Typography, Box, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';

import saoud_img from '../../assets/images/saoud_img.png';

export default function Header() {
  return (
    <CenteredBox>
      <MyAvatar src={saoud_img} data-aos="zoom-in" data-aos-duration="400" />
      <Description data-aos="zoom-out" data-aos-duration="400">
        Hello, my name is Saoud. I recently graduated with a Bachelor of Science in Computer Engineering from the University of Utah.
      </Description>
      <Box sx={{ m: 3.5 }}>
        <MyButton variant="contained" data-aos="slide-up" data-aos-duration="150" href="https://linkedin.com/in/saoud-ald/" target="_blank">LinkedIn <Icon icon="devicon:linkedin" className="icon" /></MyButton>
        <MyButton2 variant="contained" data-aos="slide-up" data-aos-duration="200" href="https://github.com/saudkjk" target="_blank">Github <Icon icon="devicon:github" className="icon" /></MyButton2>
      </Box>
    </CenteredBox>
  )
}

const Description = styled(Typography)`
 && {
  max-width: 600px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  line-height: 1.5;
  letter-spacing: 1;
  font-size: 28px;
  margin-top: 20px;
  color: white;
  font-family: 'Nunito', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }
`;

const CenteredBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 20px;
  background-color: #242b45;
`;

const MyAvatar = styled(Avatar)`
  width: 150px; 
  height: 150px;
`;

const MyButton = styled(Button)`
  
    background-color: transparent;
    width: 140px;
    color: white;
    border: 1px solid white;
    border-radius: 20px;
    padding: 8px 24px;
    margin-right: 16px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
    text-transform: none;

    transition: transform 0.3s ease-in-out; 

    .icon {
      margin-left: 4px; /* Adjust the margin as needed */
    }

    &:hover {
      background-color: transparent;
      transform: scale(1.15) !important;
    }

    &:active {
      background-color: #e0e0e0;
    }
  
`;

const MyButton2 = styled(Button)`
  
    background-color: #ffffff;
    width: 140px;
    color: black;
    border: 1px solid black;
    border-radius: 20px;
    padding: 8px 24px;
    margin-right: 16px;
    font-size: 16px;
    font-weight: 500;
    text-transform: none;

    transition: transform 0.3s ease-in-out; 

    .icon {
      margin-left: 4px; /* Adjust the margin as needed */
    }

    &:hover {
      background-color: #f0f0f0;
      transform: scale(1.15) !important;
    }

    &:active {
      background-color: #e0e0e0;
    }
  
`;