import React from "react";
import { Typography } from "@mui/material";
import {
    TextContainer,
    ImageContainer,
    ProjectImage,
    StyledCard,
    StyledIcon,
    MyButton,
} from "./Projects.styled";

export default function ProjectCard({ project }) {
    return (
        <StyledCard
            key={project.title}
            data-aos='fade-up'
            data-aos-duration='1000'
        >
            <TextContainer>
                <Typography variant='h5' component='div'>
                    {project.title}
                </Typography>

                <Typography sx={{ marginBottom: 1, marginTop: 1 }}>
                    Made with:{" "}
                    {project.skills.map((label) => (
                        <StyledIcon icon={label} key={label} />
                    ))}
                </Typography>

                <Typography
                    variant='body1'
                    color='text.secondary'
                    fontSize={15}
                    sx={{ marginBottom: 2 }}
                >
                    {project.description}
                </Typography>

                <MyButton
                    variant='contained'
                    sx={{ border: "1px solid black" }}
                    href={project.link}
                    target='_blank'
                >
                    Code
                </MyButton>
            </TextContainer>

            <ImageContainer className='image-container'>
                <ProjectImage src={project.image} alt='Project' />
            </ImageContainer>
        </StyledCard>
    );
}
