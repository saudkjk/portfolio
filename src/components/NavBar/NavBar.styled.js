import { styled } from '@mui/material/styles';
import { Box, Container, Button } from '@mui/material';

export const NavBox = styled(Box)`
  position: fixed;
  z-index: 9999;
  display: flex;
  border-radius: 30px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  padding: 8px;
  margin: 16px;
  width: 520px;

  @media (max-width: 550px) {
    flex-direction: row;
    margin: 0;
    border-radius: 0;
  }
`;

export const NavButton = styled(Button)`
  padding: 4px 16px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  color: ${({ currentlySelected }) => (currentlySelected ? 'rgb(0, 0, 0)' : 'rgb(80, 80, 80)')};
  background-color: ${({ currentlySelected }) => (currentlySelected ? 'rgb(242, 242, 242)' : 'transparent')};

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
