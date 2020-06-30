import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components
//ProductList
import ProductList from "./components/ProductList";

//Styles
import styles from "./styles";

//Data
import products from "./products";

//Mapping



function App() {


  return (

    <div>

      <div>                 {/*Header-ShopIntro*/}
        <h1 style={styles.text}>Gadget</h1>
        <h1 style={styles.text}>something</h1>
        <img alt="Tech Shop"
          src="https://techclad.com/wp-content/uploads/2019/02/2018-07-10-image-35.jpg"
          style={styles.shopImage} />
        <div style={styles.list}> <ProductList /></div>

      </div>

    </div>



  );
}

export default App;
