import React from "react";
//Styles
import { ThemeButton, Logo, NavStyled, NavItem } from "../styles";
import LogoImg from "../favicon.ico"

const NavBar = ({ toggleTheme, currentTheme }) => {
    return (
        <NavStyled className="navbar navbar-expand-lg ">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Logo className="nav-item nav-link active" to="/">
                        <img alt="logo" src={LogoImg} width="50" />
                    </Logo>
                    <NavItem className="nav-item nav-link" to="/products">
                        Products
                    </NavItem>
                    <ThemeButton className="nav-item" onClick={toggleTheme}>
                        {currentTheme === "light" ? "Dark" : "Light"} Mode
                        </ThemeButton>
                </div>
            </div>
        </NavStyled>
    );
};

export default NavBar;