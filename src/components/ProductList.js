import React, { useState } from "react";
//Components
import SearchBar from "./SearchBar"
//Styles
import { List } from "../styles";
//Data
import products from "../products"
//ProductItem
import ProductItem from "./ProductItem"

const ProductList = (props) => {
    const _products = props._products;

    const [query, setQuery] = useState("")
    const filteredProduct = _products
        .filter((product) => product.name.includes(query)
        );

    const productList = filteredProduct.map((product) => (
        <ProductItem
            product={product}
            key={product.id}
            deleteProduct={props.deleteProduct}
        />
    ));

    return (
        <>
            <SearchBar setQuery={setQuery} />
            <List> {productList}</List>
        </>
    );
};

export default ProductList;