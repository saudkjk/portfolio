import { React, useState, useContext } from 'react'
import { Breadcrumbs, Typography } from '@mui/material'
import { FilterContext } from '../../App'
import { CenteredBox, StyledIcon } from './SkillsFilter.styled';

export default function SkillsFilter() {
  const [selected, setSelected] = useState(null)
  const { setFilter } = useContext(FilterContext)

  const handleClick = (event, skill) => {
    event.preventDefault()
    if (skill === selected) {
      setSelected(null)
      setFilter(null)
    } else {
      setSelected(skill)
      setFilter(skill)
    }
  }

  const renderIcon = (skill) => (
    <StyledIcon
      icon={skill}
      width="80"
      height="80"
      isSelected={skill === selected}
      key={skill}
      onClick={(event) => handleClick(event, skill)}
      sx={{ m: 1 }}
    >
    </StyledIcon>
  )

  return (
    <CenteredBox data-aos="zoom-in" data-aos-duration="400">
      <Typography fontSize={28} sx={{ mt: 7, mb: 1 }}>Skills</Typography>
      <Breadcrumbs aria-label='breadcrumb' separator='-'>
        {programmingLanguagesSkills.map((skill) => renderIcon(skill))}
      </Breadcrumbs>
      <Breadcrumbs aria-label='breadcrumb' separator='-'>
        {otherSkills.map((skill) => renderIcon(skill))}
      </Breadcrumbs>
    </CenteredBox>
  )
}

let programmingLanguagesSkills = ["vscode-icons:file-type-python", "logos:javascript", "skill-icons:cs", "logos:c-plusplus"]
let otherSkills = ["logos:react", "vscode-icons:file-type-html", "vscode-icons:file-type-css", "logos:dotnet"]

