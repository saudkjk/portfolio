import { React, useContext, useMemo } from "react";
import { Typography } from "@mui/material";
import { FilterContext } from "../../App";
import projectsList from "./projectsList";
import ProjectCard from "./ProjectCard";
import { CenterContainer } from "./Projects.styled";

export default function Projects() {
    const { filter } = useContext(FilterContext);

    const filteredProjects = useMemo(() => {
        return filter === null
            ? projectsList
            : projectsList.filter((project) => project.skills.includes(filter));
    }, [filter]);

    return (
        <CenterContainer>
            <Typography
                sx={{ fontSize: 28, mt: 5, mb: 1 }}
                data-aos='fade-up'
                data-aos-duration='1000'
            >
                Projects
            </Typography>
            {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </CenterContainer>
    );
}
