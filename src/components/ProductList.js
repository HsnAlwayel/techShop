import React from "react";

//Data
import products from "../products"
//Styles
import { List } from "../styles";
//ProductItem
import ProductItem from "./ProductItem"


const ProductList = () => {
    const productList = products.map((product) => (
        <ProductItem product={product} key={product.id} />

    ));
    return (
        <List> {productList}</List>
    );
};

export default ProductList;