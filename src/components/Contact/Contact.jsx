import React, { useRef, useState } from 'react';
import { Box, Button, TextField, Typography, Snackbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j5rh48l', 'template_b34awwa', form.current, 'wMBUlCfYb9Iv0885I')
      .then(
        () => {
          console.log('SUCCESS!');
          setSnackbar({ open: true, message: 'Message sent successfully!', severity: 'success' });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSnackbar({ open: true, message: 'Failed to send the message, please try again.', severity: 'error' });
        }
      );
  };

  return (
    <Container data-aos="zoom-in" data-aos-duration="400">
      <Typography fontSize={28} sx={{ mt: 5, mb: 0 }} data-aos="fade-up" data-aos-duration="400">Contact Me</Typography>
      <Form component="form" noValidate autoComplete="off" ref={form} onSubmit={sendEmail}>
        <TextField label="Name" type="text" variant="outlined" fullWidth required name="user_name" />
        <TextField label="Email" type="email" variant="outlined" fullWidth required name="user_email" />
        <TextField label="Message" variant="outlined" fullWidth required multiline rows={4} name="message" />
        <MyButton variant="contained" color="primary" size="large" type="submit" value="Send">
          Submit
        </MyButton>
      </Form>
      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar} message={snackbar.message} anchorOrigin={{ vertical: 'top', horizontal: 'left' }} />
    </Container>
  );
}


const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
});

const Form = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
  maxWidth: '500px',
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '8px',
});

const MyButton = styled(Button)`
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
