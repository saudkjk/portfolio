import { styled } from '@mui/material/styles';
import { Box, Container, Button } from '@mui/material';

export const NavBox = styled(Box)`
  position: fixed;
  z-index: 9999;
  display: flex;
  border-radius: 30px;
  justify-content: center;
  background-color: rgba(250, 250, 250, 0.8);
  backdrop-filter: blur(20px);
  padding: 8px;
  margin: 16px;
  width: 520px;

  @media (max-width: 768px) {
    display: none;  /* Hide desktop navbar on mobile */
  }
`;

export const MobileNavBox = styled(Box)`
  width: 150px;
  background-color: rgba(255, 255, 255, 0.9);
  height: 100%;
  padding: 60px 50px 0px 0px;
`;

export const MobileMenuButton = styled(Box)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 1);
    padding: 2px;
    border-radius: 50%; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  
  }
`;

export const NavButton = styled(Button)`
  padding: 4px 16px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  color: ${({ currentlySelected }) => (currentlySelected ? 'rgb(0, 0, 0)' : 'rgb(80, 80, 80)')};
  background-color: ${({ currentlySelected }) => (currentlySelected ? 'rgb(240, 240, 240)' : 'transparent')};

  &:hover {
    color: rgb(0, 0, 0);
  }

  @media (max-width: 550px) {
    padding: 8px 16px;
  }
`;

export const CenterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
