import React from "react";
import { Container, Typography, Link } from "@mui/material";
import { FooterWrapper, SocialMedia } from "./Footer.styled";

export default function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <Typography variant='body2'>
                    Thank you for checking out my portfolio. <br /> Feel free to
                    connect with me
                </Typography>
                <SocialMedia>
                    <Link
                        href='https://linkedin.com/in/saoud-ald/'
                        target='_blank'
                    >
                        LinkedIn
                    </Link>
                </SocialMedia>
            </Container>
        </FooterWrapper>
    );
}
