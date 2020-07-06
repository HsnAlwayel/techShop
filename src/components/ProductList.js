import React, { useState } from "react";
//Styles
import { List } from "../styles";
//Data
import products from "../products"
//ProductItem
import ProductItem from "./ProductItem"

const ProductList = (props) => {
    const _products = props._products;
    const productList = _products.map((product) => (
        <ProductItem product={product} key={product.id} deleteProduct={props.deleteProduct} selectProduct={props.selectProduct} />
    ));

    return (
        <List> {productList}</List>
    );
};

export default ProductList;