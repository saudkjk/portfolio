import React from 'react'
import { Card, CardContent, Typography, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

import U_img from '../../assets/images/UU_img.png'

export default function Education() {
  return (
    <CenterContainer>
      <Typography fontSize={28} sx={{ mt: 6, mb: 3 }} data-aos="fade-up" data-aos-duration="1000">Education</Typography>
      <StyledCard data-aos="fade-up" data-aos-duration="1000">
        <ProjectImage src={U_img} alt="Project" />
        <TextContainer>
          <Typography variant="h6" component="div">
            Computer Engineering
          </Typography>
          <Typography variant="body1" fontSize={15} sx={{ mb: 2 }}>
            University of Utah
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize={15} sx={{ mb: 1 }}>
            GPA: 3.57
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize={15} >
            Notable courses:<br />
            Web Software Development, Databases Systems, Data Analysis, Operating Systems, Software Practice
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize={15} sx={{ m: 0, p: 0, mt: 1 }}>
            Awards: <br />
            Senior Capstone Project Award <br />
            Dean's list: 7/10 semesters
          </Typography>
        </TextContainer>
      </StyledCard>
    </CenterContainer>
  )
}

const ProjectImage = styled('img')`
  width: 220px;
  height: auto;

  border-radius: 8px;
  margin-left: 24px; 

  @media (max-width: 900px) {
    display: none;
  }
`

const TextContainer = styled(CardContent)`
  height: 220px;

  padding: 16px;
  margin: 16px;
`

const StyledCard = styled(Card)`
  display: flex;

  width: 680px;
  height: 300px;

  align-items: center;

  background-color: #f2f2f2 !important; 
  border-radius: 8px;
  @media (max-width: 680px) {
    width: 100%; // Make card width responsive
  }
`

const CenterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`