import { React, useState, useEffect, useRef } from 'react'
import { Box, Container, Snackbar } from '@mui/material'
import { styled } from '@mui/material/styles'

export default function NavBar() {
  const [selected, setSelected] = useState("Home")
  const [scrolling, setScrolling] = useState(false)
  const selectedRef = useRef(selected)

  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' })
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  const handleClick = (label) => {
    const element = document.getElementById(label)
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - 30

    if (label === "Skills") {
      setSnackbar({ open: true, message: 'Click one of the skills to filter the projects' })
    }
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })

    setScrolling(true)
    setTimeout(() => {
      setScrolling(false)
    }, 700)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      let newSelected = selectedRef.current

      // TODO: replace absolute positions
      if (scrollY <= 480) newSelected = "Home"
      else if (scrollY <= 798) newSelected = "Skills"
      else if (scrollY <= 2800) newSelected = "Projects"
      else if (scrollY <= 3127) newSelected = "Education"
      else newSelected = "Contact"

      if (newSelected !== selectedRef.current) {
        setSelected(newSelected)
        selectedRef.current = newSelected
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <CenterContainer>
      <NavBox data-aos="slide-down" data-aos-duration="200">
        {pages.map((label) => (
          <NavButton
            key={label}
            currentlySelected={!scrolling && selected === label}
            onClick={() => handleClick(label)}
          >
            {label}
          </NavButton>
        ))}
      </NavBox>
      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar} message={snackbar.message} anchorOrigin={{ vertical: '', horizontal: 'right' }} />
    </CenterContainer>
  )
}

const NavBox = styled(Box)`
  position: fixed;
  z-index: 9999;
  display: flex;
  border-radius: 30px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  padding: 8px;
  margin: 16px;
  width: 520px;
  @media (max-width: 550px) {
    flex-direction: row;
    margin: 0;
    border-radius: 0;
  }
`

const NavButton = styled(Box)`
  padding: 8px 24px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  color: ${({ currentlySelected }) => (currentlySelected ? 'rgb(0, 0, 0)' : 'rgb(80, 80, 80)')};
  background-color: ${({ currentlySelected }) => (currentlySelected ? 'rgb(242, 242, 242)' : 'transparent')};
  &:hover {
    color: rgb(0, 0, 0);
  }
  @media (max-width: 550px) {
    padding: 8px 16px;
  }
`

const CenterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

let pages = ['Home', 'Skills', 'Projects', 'Education', 'Contact']
