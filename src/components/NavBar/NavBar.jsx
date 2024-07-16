import { React, useState, useEffect, useRef } from 'react'
import { Snackbar } from '@mui/material'
import { CenterContainer, NavBox, NavButton } from './NavBar.styled';

let pages = ['Home', 'Skills', 'Projects', 'Education', 'Contact']

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