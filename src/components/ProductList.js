import React, { useState } from "react";
//Components
import SearchBar from "./SearchBar"
//Styles
import { List } from "../styles";
//Data
import products from "../products"
//ProductItem
import ProductItem from "./ProductItem"

const ProductList = ({ _products, deleteProduct }) => {

    const [query, setQuery] = useState("")
    const filteredProduct = _products
        .filter((product) => product.name.toLowerCase().includes(query.toLowerCase())
        );

    const productList = filteredProduct.map((product) => (
        <ProductItem
            product={product}
            key={product.id}
            deleteProduct={deleteProduct}
        />
    ));

    return (
        <div className="container-fluid">
            <SearchBar setQuery={setQuery} />
            <List className="row"> {productList}</List>
        </div>
    );
};

export default ProductList;