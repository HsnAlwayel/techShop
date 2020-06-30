import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components
//ProductList
import ProductList from "./components/ProductList";
//Styles
import styled from "styled-components";
import { Title, Desc, ShopImage, GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
//Data
import products from "./products";

const theme = {
  mainColor: "blue", // main font color
  backgroundColor: "black", // main background color
  color: "blue",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />                {/*Header-ShopIntro*/}
      <Title>Gadget</Title>
      <Desc>something</Desc>
      <ShopImage alt="Tech Shop"
        src="https://techclad.com/wp-content/uploads/2019/02/2018-07-10-image-35.jpg" />
      <div> <ProductList /></div>

    </ThemeProvider>
  );
}

export default App;
