import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Container } from "./Contact.styled.js";
import ContactForm from "./ContactForm";
import SnackbarComponent from "./SnackbarComponent.jsx";

export default function Contact() {
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "",
    });

    const showSnackbar = (message, severity) => {
        setSnackbar({ open: true, message, severity });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <>
            <Container data-aos='zoom-in' data-aos-duration='400'>
                <Typography
                    sx={{ fontSize: 28, mt: 5, mb: 0 }}
                    data-aos='fade-up'
                    data-aos-duration='400'
                >
                    Contact Me
                </Typography>
                <ContactForm showSnackbar={showSnackbar} />
            </Container>
            <SnackbarComponent
                snackbar={snackbar}
                handleCloseSnackbar={handleCloseSnackbar}
            />
        </>
    );
}
