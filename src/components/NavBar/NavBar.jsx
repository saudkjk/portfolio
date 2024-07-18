import { React, useState } from 'react'
import { Snackbar } from '@mui/material'
import { CenterContainer, NavBox, NavButton } from './NavBar.styled'
import { useScrollHandler } from '../../hooks/useScrollHandler'

let pages = ['Home', 'Skills', 'Projects', 'Education', 'Contact']

export default function NavBar() {
  const [snackbar, setSnackbar] = useState({ open: false, message: '' })
  const selected = useScrollHandler()

  const handleClick = (label) => {
    if (label === "Skills") setSnackbar({ open: true, message: 'Click one of the skills to filter the projects!' })
    const element = document.getElementById(label)
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - 30
    window.scrollTo({ top: offsetPosition, behavior: 'smooth', })
  }

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <CenterContainer>
      <NavBox data-aos="slide-down" data-aos-duration="200">
        {pages.map((label) =>
          <NavButton key={label} currentlySelected={selected === label} onClick={() => handleClick(label)}>
            {label}
          </NavButton>
        )}
      </NavBox>
      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar} message={snackbar.message} anchorOrigin={{ vertical: '', horizontal: 'right' }} />
    </CenterContainer>
  )
}