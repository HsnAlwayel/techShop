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
                    <NavItem className="nav-item nav-link" to="/vendors">
                        Vendors
                    </NavItem>
                    <NavItem className="nav-item nav-link" to="/products">
                        Products
                    </NavItem>
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                        <label class="custom-control-label" for="customSwitch1" onClick={toggleTheme}> {currentTheme === "light" ? "Dark" : "Light"} Mode</label>
                    </div>
                </div>
            </div>
        </NavStyled>
    );
};

export default NavBar;