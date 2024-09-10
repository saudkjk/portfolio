import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import SkillsFilter from "./components/SkillsFilter/SkillsFilter";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { React, useState, useEffect, useRef, createContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { getClosestSection } from "./utils/utils";

export const FilterContext = createContext();

export default function App() {
    const [filter, setFilter] = useState(null);
    const [activeSection, setActiveSection] = useState("Home");

    const homeRef = useRef(null),
        skillsRef = useRef(null),
        projectsRef = useRef(null),
        educationRef = useRef(null),
        contactRef = useRef(null);

    useEffect(() => {
        AOS.init();

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const sectionRefs = [
                homeRef,
                skillsRef,
                projectsRef,
                educationRef,
                contactRef,
            ];

            const closestSection = getClosestSection(
                scrollY,
                windowHeight,
                documentHeight,
                sectionRefs
            );

            if (closestSection && closestSection !== activeSection) {
                setActiveSection(closestSection);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    return (
        <>
            <NavBar activeSection={activeSection} />
            <section id='Home' ref={homeRef}>
                <Header />
            </section>
            <FilterContext.Provider value={{ filter, setFilter }}>
                <section id='Skills' ref={skillsRef}>
                    <SkillsFilter />
                </section>
                <section id='Projects' ref={projectsRef}>
                    <Projects />
                </section>
            </FilterContext.Provider>
            <section id='Education' ref={educationRef}>
                <Education />
            </section>
            <section id='Contact' ref={contactRef}>
                <Contact />
            </section>
            <section id='Footer'>
                <Footer />
            </section>
        </>
    );
}
