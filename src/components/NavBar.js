import React from "react";

//Styles
import { Logo, NavStyled, NavItem } from "../styles";
import LogoImg from "../favicon.ico"
import SignupButton from "./Buttons/SignupButton";
import SigninButton from "./Buttons/SigninButton";

const NavBar = ({ toggleTheme, currentTheme }) => {
    return (
        <NavStyled className="navbar navbar-expand-lg ">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Logo className="nav-item nav-link active" to="/">
                        <img alt="logo" src={LogoImg} width="50" />
                    </Logo>
                    <div className="ml-auto navbar-nav float-right">
                        <NavItem className="nav-item nav-link" to="/vendors">
                            Vendors
                    </NavItem>
                        <NavItem className="nav-item nav-link" to="/products">
                            Products
                        </NavItem>
                        <div>
                            <SigninButton />
                            <SignupButton />
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                            <label className="custom-control-label" for="customSwitch1" onClick={toggleTheme}> {currentTheme === "light" ? "Dark" : "Light"} Mode</label>
                        </div>
                    </div>
                </div>
            </div>
        </NavStyled>
    );
};

export default NavBar;