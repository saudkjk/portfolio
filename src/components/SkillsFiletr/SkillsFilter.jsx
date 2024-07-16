import { React, useState, useContext } from 'react';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { FilterContext } from '../../App';

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
  );

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
  );
}


const CenteredBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;

// maybe use later
// const bounce = keyframes`
//   0%, 20%, 50%, 80%, 100% {
//     transform: translateY(0);
//   }
//   40% {
//     transform: translateY(-30px);
//   }
//   60% {
//     transform: translateY(-15px);
//   }
// `;

const tilt = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(-1deg); }
  20% { transform: rotate(1deg); }
  30% { transform: rotate(-1deg); }
  40% { transform: rotate(1deg); }
  50% { transform: rotate(-1deg); }
  60% { transform: rotate(1deg); }
  70% { transform: rotate(-1deg); }
  80% { transform: rotate(1deg); }
  90% { transform: rotate(-1deg); }
  100% { transform: rotate(0deg); }
`;

const StyledIcon = styled(Icon)(({ isSelected }) => ({
  width: '80px',
  height: '80px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.25)',
  },


  animation: isSelected ? `${tilt} 1.7s ease-in-out infinite` : 'none',
}));


let programmingLanguagesSkills = ["vscode-icons:file-type-python", "logos:javascript", "skill-icons:cs", "logos:c-plusplus"];


let otherSkills = ["logos:react", "vscode-icons:file-type-html", "vscode-icons:file-type-css", "logos:dotnet"];

