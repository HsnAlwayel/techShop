import React, { useState } from "react";
import { observer } from "mobx-react";
//Components
import SearchBar from "./SearchBar"
import ProductModal from "../modals/ProductModal"
// Stores
import productsStore from "../stores/ProductStore";
//Styles
import { List } from "../styles";
import { BsPlusCircle } from "react-icons/bs";

//Data
import products from "../products"
//ProductItem
import ProductItem from "./ProductItem"
import AddButton from "./Buttons/AddButton";

const ProductList = () => {

    const [query, setQuery] = useState("")
    const filteredProduct = productsStore.products
        .filter((product) => product.name.toLowerCase().includes(query.toLowerCase())
        );
    const productList = filteredProduct.map((product) => (
        <ProductItem
            product={product}
            key={product.id}
        />
    ));



    return (
        <div className="container-fluid">
            <SearchBar setQuery={setQuery} />
            <List className="row"> {productList}</List>
            <AddButton />
        </div>
    );
};

export default observer(ProductList);