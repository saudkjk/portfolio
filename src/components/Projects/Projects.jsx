import { React, useContext, useEffect, useState } from 'react'
import { Card, CardContent, Typography, Button, Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Icon } from '@iconify/react'
import { FilterContext } from '../../App'

import TankWars_img from '../../assets/images/TankWars_project_img.png'
import LMS_website_img from '../../assets/images/LMS_project_img.png'
import AlgoSort_img from '../../assets/images/AlgoSort_project_img.png'
import ObstacleRover_img from '../../assets/images/ObstacleRover_project_img.png'
import Weather_img from '../../assets/images/Weather_project_img.png'

export default function Projects() {

  const { filter } = useContext(FilterContext)
  const [projects, setProjects] = useState(projectsList)

  useEffect(() => {
    if (filter === null) {
      setProjects(projectsList)
    }
    else {
      setProjects(projectsList.filter((project) => project.skills.includes(filter)))
    }

  }, [filter])
  const renderIcon = (label) => (
    <StyledIcon
      icon={label}
      key={label}
    >
    </StyledIcon>
  )

  const renderStyledCard = (project) => (
    <StyledCard key={project.title} data-aos="fade-up" data-aos-duration="1000">
      <TextContainer>
        <Typography variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography sx={{ marginBottom: 1, marginTop: 1 }}>
          Made with: {project.skills.map((label) => renderIcon(label))}
        </Typography>
        <Typography variant="body1" color="text.secondary" fontSize={15} sx={{ marginBottom: 2 }}>
          {project.description}
        </Typography>
        <MyButton variant="contained" sx={{ border: '1px solid black' }} href={project.link} target="_blank">Code</MyButton>
      </TextContainer>
      <ImageContainer className="image-container">
        <ProjectImage src={project.image} alt="Project" />
      </ImageContainer>
    </StyledCard>
  )

  return (
    <CenterContainer>
      <Typography fontSize={28} sx={{ mt: 5, mb: 1 }} data-aos="fade-up" data-aos-duration="1000" >Projects</Typography>
      {projects.map((project) => renderStyledCard(project))}
    </CenterContainer>
  )
}

const TextContainer = styled(CardContent)`
  padding: 16px;
  margin-top: 16px;
  align-items: flex-start; 
`

const ImageContainer = styled(Box)`
  width: 480px; 
  height: 400px; 
`

const ProjectImage = styled('img')`
  width: 500px; 
  height: auto; 
  margin-top: 30px;
  border-radius: 8px;
  box-shadow: -4px -4px 12px rgba(0, 0, 0, 0.2);
  
  transition: transform 0.15s ease;
  &:hover {
    transform: translateY(10px) rotate(-1deg) translateX(-10px);
  }
  @media (max-width: 900px) {
    display: none;
  }
`

const StyledCard = styled(Card)`
  width: 900px;
  height: auto;
  margin: 16px;
  border-radius: 8px;
  display: flex;
  background-color: #f2f2f2 !important;  

  @media (max-width: 900px) {
    width: 100%; 
  }
`

const StyledIcon = styled(Icon)`
  margin-right: 16px;
  width: 32px;
  height: 32px;
`

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
`

const CenterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

let projectsList = [
  {
    title: 'Canvas Clone - LMS Website',
    description: 'Created  a Django-based web application mimicking Canvas, featuring assignment management and submission tracking. Implemented interactive UI with JavaScript and jQuery for student submissions and grading. Built views and templates for listing assignments, viewing details, submitting work, and grading.',
    skills: [
      "vscode-icons:file-type-python",
      "logos:django",
      "logos:javascript",
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css"
    ],
    image: LMS_website_img,
    link: 'https://github.com/saudkjk',
  },

  {
    title: 'AlgoSort - Educational Application',
    description: 'Developed a C++ educational game to teach sorting algorithms like Insertion Sort, Selection Sort, and Merge Sort. Implemented real-time visualizations to help students understand algorithm behavior. Created an interactive GUI using the Qt framework, enhancing the learning experience for new computer science students.',
    skills: [
      "logos:c-plusplus",
      "logos:qt",
    ],
    image: AlgoSort_img,
    link: 'https://github.com/saudkjk',
  },

  {
    title: 'Tank Wars - Online Video Game',
    description: 'Created a 2D online tank combat game using C# and .NET. Developed multiplayer functionality for seamless online interactions. Followed MVC guidelines to maintain clean code architecture, ensuring future scalability and maintainability. The game featured dynamic combat scenarios and engaging gameplay.',
    skills: [
      "skill-icons:cs",
      "logos:dotnet",
      "devicon:visualstudio",
    ],
    image: TankWars_img,
    link: 'https://github.com/saudkjk',
  },

  {
    title: 'Obstacle Rover - Self-Driving Rover',
    description: 'Designed and built a self-driving rover using the STM32 microcontroller programmed in C. Integrated ultrasonic sensors and an accelerometer for smooth navigation. Developed autonomous navigation algorithms, enabling the rover to complete obstacle courses in under 30 seconds without collisions, enhancing its overall performance.',
    skills: [
      "logos:c",
      "arcticons:zflasher-stm32",
      "",
      ""
    ],
    image: ObstacleRover_img,
    link: 'https://github.com/saudkjk',
  },

  {
    title: 'Today’s Weather - Weather Application',
    description: 'Developed an interactive weather application using React, providing detailed weather information and forecasts. Integrated OpenWeatherMap API to retrieve and display weather data for specified locations. Designed user interfaces with React components, ensuring an intuitive and user-friendly experience.',
    skills: [
      "logos:react",
      "logos:javascript",
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css"
    ],
    image: Weather_img,
    link: 'https://github.com/saudkjk',
  },
]
