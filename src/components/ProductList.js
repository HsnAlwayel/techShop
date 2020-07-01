import React, { useState } from "react";

//Data
import products from "../products"
//Styles
import { List } from "../styles";
//ProductItem
import ProductItem from "./ProductItem"


const ProductList = () => {
    const [_products, setProduct] = useState(products);
    const deleteProduct = (productId) => {
        const updatedProduct = _products.filter((product) => product.id !== productId);
        setProduct(updatedProduct)
    };
    const productList = _products.map((product) => (
        <ProductItem product={product} key={product.id} deleteProduct={deleteProduct} />

    ));
    return (
        <List> {productList}</List>
    );
};

export default ProductList;