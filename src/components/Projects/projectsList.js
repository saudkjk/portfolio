import TankWars_img from '../../assets/images/TankWars_project_img.png'
import LMS_website_img from '../../assets/images/LMS_project_img.png'
import AlgoSort_img from '../../assets/images/AlgoSort_project_img.png'
import ObstacleRover_img from '../../assets/images/ObstacleRover_project_img.png'
import Weather_img from '../../assets/images/Weather_project_img.png'

const projectsList = [
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

export default projectsList;