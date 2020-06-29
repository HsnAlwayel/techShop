import React from 'react';
import logo from './logo.svg';
import './App.css';

//Styles
import styles from "./styles";

//Data
import products from "./products";

//Mapping



function App() {
  const productList = products.map((product) => (
    <div style={styles.product} key={product.id}>
      <img src={product.image} alt={product.name} style={styles.productImage} />
      <p style={styles.text}> {product.name}</p>
      <p style={styles.text}>{product.price} KD</p>
    </div>
  ))
  return (
    <div>                 {/*Header-ShopIntro*/}
      <h1 style={styles.text}>Gadget</h1>
      <h1 style={styles.text}>something</h1>
      <img alt="Tech Shop"
        src="https://techclad.com/wp-content/uploads/2019/02/2018-07-10-image-35.jpg"
        style={styles.shopImage} />
      <p style={styles.list}> {productList}</p>
    </div>




  );
}

export default App;
