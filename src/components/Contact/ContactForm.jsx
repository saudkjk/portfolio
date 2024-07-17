import React, { useRef } from 'react'
import { TextField } from '@mui/material'
import emailjs from '@emailjs/browser'
import { Form, MyButton } from './Contact.styled.js'



export default function ContactForm({ showSnackbar }) {
    const formRef = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Regular expression for email validation. replace with something more robust later

        const userName = formRef.current.user_name.value.trim()
        const userEmail = formRef.current.user_email.value.trim()
        const message = formRef.current.message.value.trim()

        if (!userName || !userEmail || !message) {
            showSnackbar('Fill in required fields', 'error')
            return
        }

        if (!emailRegex.test(userEmail)) {
            showSnackbar('Enter a valid email address', 'error')
            return
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
            .then(
                () => {
                    showSnackbar('Message sent successfully!', 'success');
                    formRef.current.reset()
                },
                () => {
                    showSnackbar('Failed to send the message, please try again.', 'error');
                }
            )
    }

    return (
        <Form component="form" noValidate autoComplete="off" ref={formRef} onSubmit={sendEmail}>
            <TextField label="Name" type="text" variant="outlined" fullWidth required name="user_name" />
            <TextField label="Email" type="email" variant="outlined" fullWidth required name="user_email" />
            <TextField label="Message" variant="outlined" fullWidth required multiline rows={4} name="message" />
            <MyButton variant="contained" color="primary" size="large" type="submit" value="Send">
                Submit
            </MyButton>
        </Form>
    )
}