import { styled } from '@mui/material/styles';
import { Card, CardContent, Container } from '@mui/material';

export const ProjectImage = styled('img')`
  width: 220px;
  height: auto;
  border-radius: 8px;
  margin-left: 24px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const TextContainer = styled(CardContent)`
  padding: 16px;
  margin: 16px ;
`;

export const StyledCard = styled(Card)`
  display: flex;
  width: 680px;
  align-items: center;
  background-color: #f2f2f2 !important;
  border-radius: 8px;

  @media (max-width: 680px) {
    width: 100%; // Make card width responsive
  }
`;

export const CenterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
