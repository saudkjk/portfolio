import React from 'react'
import { Box } from '@mui/material'
import { Description, CenteredBox, MyAvatar, TransparentButton, WhiteButton } from './Header.styled';
import { Icon } from '@iconify/react'

import saoud_img from '../../assets/images/saoud_img.png'

export default function Header() {
  return (
    <CenteredBox>
      <MyAvatar src={saoud_img} data-aos="zoom-in" data-aos-duration="400" />
      <Description data-aos="zoom-out" data-aos-duration="400">
        Hello, my name is Saoud. I recently graduated with a Bachelor of Science in Computer Engineering from the University of Utah.
      </Description>
      <Box sx={{ m: 3.5 }}>
        <TransparentButton variant="contained" data-aos="slide-up" data-aos-duration="150" href="https://linkedin.com/in/saoud-ald/" target="_blank">LinkedIn <Icon icon="devicon:linkedin" className="icon" /></TransparentButton>
        <WhiteButton variant="contained" data-aos="slide-up" data-aos-duration="200" href="https://github.com/saudkjk" target="_blank">Github <Icon icon="devicon:github" className="icon" /></WhiteButton>
      </Box>
    </CenteredBox>
  )
}