import React from "react";

// Stores
import authStore from "../stores/authStore";

//Styles
import { Logo, NavStyled, NavItem, UsernameStyled } from "../styles";
import LogoImg from "../favicon.ico"
import { FiLogOut } from "react-icons/fi";

//Components
import SignupButton from "./Buttons/SignupButton";
import SigninButton from "./Buttons/SigninButton";
import { observer } from "mobx-react";

const NavBar = ({ toggleTheme, currentTheme }) => {
    return (
        <NavStyled className="navbar navbar-expand-lg ">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Logo className="nav-item nav-link active" to="/">
                        <img alt="logo" src={LogoImg} width="50" />
                    </Logo>

                    {
                        authStore.user && authStore.user.role === "vendor" && (
                            <div className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <NavItem className="nav-item nav-link" to="/vendors">
                                    Vendors
                        </NavItem>
                                <NavItem className="nav-item nav-link" to="/products">
                                    Products
                        </NavItem>
                            </div>
                        )
                    }


                    {
                        authStore.user ? (
                            <>
                                <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
                                <FiLogOut onClick={authStore.signout} size="2em" color="red" />
                            </>
                        ) : (
                                <>
                                    <SigninButton />
                                    <SignupButton />
                                </>
                            )
                    }


                    <div class="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                        <label className="custom-control-label" for="customSwitch1" onClick={toggleTheme}> {currentTheme === "light" ? "Dark" : "Light"} Mode</label>
                    </div>
                </div>
            </div>
        </NavStyled>
    );
};

export default observer(NavBar);