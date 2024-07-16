import React, { useRef, useState } from 'react'
import { TextField, Typography, Snackbar } from '@mui/material'
import emailjs from '@emailjs/browser'
import { Container, Form, MyButton } from './Contact.styled.js'

export default function Contact() {
  const form = useRef()

  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' })
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_j5rh48l', 'template_b34awwa', form.current, 'wMBUlCfYb9Iv0885I')
      .then(
        () => {
          setSnackbar({ open: true, message: 'Message sent successfully!', severity: 'success' })
          form.current.reset()
        },
        (error) => {
          setSnackbar({ open: true, message: 'Failed to send the message, please try again.', severity: 'error' })
        }
      )
  }

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
  )
}