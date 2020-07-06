import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
//Styles
import styled from "styled-components";
import { Title, Description, ShopImage, GlobalStyle, ThemeButton, Desc } from "./styles";
import { ThemeProvider } from "styled-components";
//ProductList
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail"
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

  const [product, umProduct] = useState(null);

  const selectProduct = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    umProduct(selectedProduct);
  };
  const [_products, setProduct] = useState(products);
  const deleteProduct = (productId) => {
    const updatedProduct = _products.filter((product) => product.id !== productId);
    setProduct(updatedProduct)
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}> {theme[currentTheme].text} </ThemeButton>
      <Title>Gadget</Title>
      <Description>something</Description>
      <ShopImage alt="Tech Shop"
        src="https://techclad.com/wp-content/uploads/2019/02/2018-07-10-image-35.jpg" />

      {
        product ? (
          <ProductDetail product={product} deleteProduct={deleteProduct} />
        ) :
          (
            <ProductList _products={_products} selectProduct={selectProduct} deleteProduct={deleteProduct} />
          )
      }
    </ThemeProvider>
  );
}

export default App;
