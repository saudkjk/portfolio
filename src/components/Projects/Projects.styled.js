import { styled } from '@mui/material/styles';
import { Card, CardContent, Box, Button, Container } from '@mui/material';
import { Icon } from '@iconify/react';

export const TextContainer = styled(CardContent)`
  padding: 16px;
  margin-top: 16px;
  align-items: flex-start; 
`;

export const ImageContainer = styled(Box)`
  width: 480px; 
  height: 400px; 
`;

export const ProjectImage = styled('img')`
  width: 500px; 
  height: auto; 
  margin-top: 30px;
  border-radius: 8px;
  box-shadow: -4px -4px 12px rgba(0, 0, 0, 0.2);
  
  transition: transform 0.15s ease;
  &:hover {
    transform: translateY(10px) rotate(-1deg) translateX(-10px);
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledCard = styled(Card)`
  width: 900px;
  height: auto;
  margin: 16px;
  border-radius: 8px;
  display: flex;
  background-color: #f2f2f2 !important;  

  @media (max-width: 900px) {
    width: 100%; 
  }
`;

export const StyledIcon = styled(Icon)`
  margin-right: 16px;
  width: 32px;
  height: 32px;
`;

export const MyButton = styled(Button)`
  && {
    background-color: transparent;
    color: #000000;
    border: 1px solid black;
    border-radius: 20px;
    padding: 8px 24px;
    margin-right: 16px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f0f0f0;
      color: #000000;
      border: 1px solid #000000;
    }

    &:active {
      background-color: #e0e0e0;
      border: 1px solid #000000;
    }
  }
`;

export const CenterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
