import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
//ProductList
import ProductList from "./components/ProductList";
//Styles
import styled from "styled-components";
import { Title, Desc, ShopImage, GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
//Data
import products from "./products";

const theme = {
  light: {
    text: "Dark Mode",
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    color: "#ff85a2",
  },
  dark: {
    text: "Light Mode",
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    color: "#ff85a2",
  },
};



function App() {
  let [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}> {theme[currentTheme].text} </ThemeButton>
      <Title>Gadget</Title>
      <Desc>something</Desc>
      <ShopImage alt="Tech Shop"
        src="https://techclad.com/wp-content/uploads/2019/02/2018-07-10-image-35.jpg" />
      <div> <ProductList /></div>

    </ThemeProvider>
  );
}

export default App;
