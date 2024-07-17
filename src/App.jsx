import './App.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import SkillsFilter from './components/SkillsFiletr/SkillsFilter'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import { React, useState, useEffect, createContext } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const FilterContext = createContext()

export default function App() {
  const [filter, setFilter] = useState(null)

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <NavBar />
      <div id="Home"><Header /></div>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <div id="Skills"><SkillsFilter /></div>
        <div id="Projects"><Projects /></div>
      </FilterContext.Provider>
      <div id="Education"><Education /></div>
      <div id="Contact"><Contact /></div>
      <div id="Footer"><Footer /></div>
    </>
  )
}
