import { styled, keyframes, css } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Icon } from '@iconify/react';

export const CenteredBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;

const tilt = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(-1deg); }
  20% { transform: rotate(1deg); }
  30% { transform: rotate(-1deg); }
  40% { transform: rotate(1deg); }
  50% { transform: rotate(-1deg); }
  60% { transform: rotate(1deg); }
  70% { transform: rotate(-1deg); }
  80% { transform: rotate(1deg); }
  90% { transform: rotate(-1deg); }
  100% { transform: rotate(0deg); }
`;

export const StyledIcon = styled(Icon)`
  width: 80px;
  height: 80px;
  margin: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }
  
  ${({ isSelected }) => isSelected && css`animation: ${tilt} 2s infinite ease-in-out;`}
`;
