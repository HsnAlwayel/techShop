import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import SearchBar from "./SearchBar"
import ProductItem from "./ProductItem"
import AddButton from "./Buttons/AddButton"
//Styles
import { List } from "../styles";
import { Redirect } from "react-router-dom";

//Stores
import authStore from "../stores/authStore";


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

    if (!authStore.user || authStore.user.role !== "admin") return <Redirect to="/" />;
    return (
        <div className="container-fluid">
            <SearchBar setQuery={setQuery} />
            <List className="row">{productList}</List>
            <AddButton />
        </div>
    );
};

export default observer(ProductList);