import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const FooterWrapper = styled(Box)`
  width: 100%;
  background-color: #242b45;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

export const SocialMedia = styled(Box)`
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
