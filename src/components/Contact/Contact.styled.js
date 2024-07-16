import { Box, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

export const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
`

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
`
