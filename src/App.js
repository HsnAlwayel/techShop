import React, { useState } from 'react';
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

//Components
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail"
import Home from "./components/Home";
import NavBar from "./components/NavBar"
import VendorList from './components/VendorList';
import VendorDetail from './components/VendorDetail';

// Stores
import productStore from "./stores/ProductStore";

//Styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";


const theme = {
  dark: {
    text: "Dark Mode",
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    color: "#ff85a2",
  },
  light: {
    text: "Light Mode",
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    color: "#ff85a2",
  },
};

function App() {
  const savedTheme = localStorage.getItem("theme") ?? "light";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <Switch>
        <Route path="/vendors/:vendorId">
          <VendorDetail />
        </Route>
        <Route path="/vendors">
          <VendorList />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <ProductList products={productStore.products} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default observer(App);
