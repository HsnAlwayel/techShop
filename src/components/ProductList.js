import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import SearchBar from "./SearchBar"
import ProductItem from "./ProductItem"

//Styles
import { List } from "../styles";


const ProductList = ({ products }) => {
    const [query, setQuery] = useState("")
    const productList = (products
        .filter((product) => product.name.toLowerCase().includes(query.toLowerCase())))
        .map((product) => (
            <ProductItem
                product={product}
                key={product.id}
            />
        ));

    return (
        <div className="container-fluid">
            <SearchBar setQuery={setQuery} />
            <List className="row">{productList}</List>
        </div>
    );
};

export default observer(ProductList);