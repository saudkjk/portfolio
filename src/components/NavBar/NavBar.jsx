import { React, useState } from "react";
import { Snackbar, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
    CenterContainer,
    NavBox,
    NavButton,
    MobileMenuButton,
    MobileNavBox,
} from "./NavBar.styled";

const pages = ["Home", "Skills", "Projects", "Education", "Contact"];

export default function NavBar({ activeSection }) {
    const [snackbar, setSnackbar] = useState({ open: false, message: "" });
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleClick = (label) => {
        if (label === "Skills") {
            setSnackbar({
                open: true,
                message: "Click one of the skills to filter the projects!",
            });
        }

        const element = document.getElementById(label);
        const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 30; // Adjust for navbar height

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
        setIsDrawerOpen(false); 
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <CenterContainer>
                {/* Mobile Menu Button */}
                <MobileMenuButton>
                    <IconButton onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                </MobileMenuButton>

                {/* Desktop Navigation */}
                <NavBox>
                    {pages.map((label) => (
                        <NavButton
                            key={label}
                            currentlySelected={activeSection === label}
                            onClick={() => handleClick(label)}
                        >
                            {label}
                        </NavButton>
                    ))}
                </NavBox>

                {/* Mobile Drawer */}
                <Drawer
                    anchor='left'
                    open={isDrawerOpen}
                    onClose={toggleDrawer}
                >
                    <MobileNavBox>
                        <List>
                            {pages.map((label) => (
                                <ListItem
                                    key={label}
                                    onClick={() => handleClick(label)}
                                >
                                    <NavButton
                                        currentlySelected={
                                            activeSection === label
                                        }
                                    >
                                        {label}
                                    </NavButton>
                                </ListItem>
                            ))}
                        </List>
                    </MobileNavBox>
                </Drawer>
            </CenterContainer>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                message={snackbar.message}
            />
        </>
    );
}
