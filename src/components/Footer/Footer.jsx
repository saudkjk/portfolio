import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="md">
        <Typography variant="body2">
          Thank you for checking out my portfolio. <br /> Feel free to connect with me
        </Typography>
        <SocialMedia>
          <MuiLink href="https://linkedin.com/in/saoud-ald/" target="_blank">LinkedIn</MuiLink>
        </SocialMedia>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled(Box)`
  width: 100%;
  background-color: #242b45;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const SocialMedia = styled(Box)`
  margin-top: 10px;
  a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
