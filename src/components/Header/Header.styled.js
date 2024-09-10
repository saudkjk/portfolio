import { styled } from '@mui/material/styles';
import { Typography, Box, Avatar, Button } from '@mui/material';

export const Description = styled(Typography)`
  && {
    max-width: 600px;
    width: 95%;
    text-align: center;
    line-height: 1.5;
    letter-spacing: 1;
    font-size: 28px;
    margin-top: 20px;
    color: white;
    font-family: 'Nunito', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  }
`;

export const CenteredBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 20px;
  background-color: #242b45;
`;

export const MyAvatar = styled(Avatar)`
  width: 150px; 
  height: 150px;
`;

export const TransparentButton = styled(Button)`
  background-color: transparent;
  width: 140px;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 8px 24px;
  margin-right: 16px;
  font-size: 16px;
  font-weight: 500;
  text-transform: none;
  transition: transform 0.3s ease-in-out; 

  .icon {
    margin-left: 4px; 
  }

  &:hover {
    background-color: transparent;
    transform: scale(1.05) !important;
  }

  &:active {
    background-color: transparent;
  }
`;

export const WhiteButton = styled(TransparentButton)`
  background-color: #ffffff;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: #f0f0f0;
  }
`;