import { React, useContext } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { FilterContext } from "../../App";
import { CenteredBox, StyledIcon } from "./SkillsFilter.styled";

let programmingLanguagesSkills = [
    "vscode-icons:file-type-python",
    "logos:javascript",
    "skill-icons:cs",
    "logos:c-plusplus",
];
let otherSkills = [
    "logos:react",
    "vscode-icons:file-type-html",
    "vscode-icons:file-type-css",
    "logos:dotnet",
];

export default function SkillsFilter() {
    const { filter, setFilter } = useContext(FilterContext);

    const handleClick = (event, skill) => {
        event.preventDefault();
        skill === filter ? setFilter(null) : setFilter(skill);
    };

    const renderIcon = (skill) => (
        <StyledIcon
            icon={skill}
            key={skill}
            isSelected={skill === filter}
            onClick={(event) => handleClick(event, skill)}
        ></StyledIcon>
    );

    return (
        <CenteredBox data-aos='zoom-in' data-aos-duration='400'>
            <Typography sx={{ fontSize: 28, mt: 7, mb: 1 }}>Skills</Typography>
            <Breadcrumbs aria-label='breadcrumb' separator='-'>
                {programmingLanguagesSkills.map((skill) => renderIcon(skill))}
            </Breadcrumbs>
            <Breadcrumbs aria-label='breadcrumb' separator='-'>
                {otherSkills.map((skill) => renderIcon(skill))}
            </Breadcrumbs>
        </CenteredBox>
    );
}
