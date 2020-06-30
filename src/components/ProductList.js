import React from "react";

//Data
import products from "../products"
//Styles
import styles from "../styles"
//ProductItem
import ProductItem from "./ProductItem"


const ProductList = () => {
    const productList = products.map((product) => (
        <ProductItem product={product} key={product.id} />

    ));
    return (
        <div style={styles.list}> {productList}</div>
    );
};

export default ProductList