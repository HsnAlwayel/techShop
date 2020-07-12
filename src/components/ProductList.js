import React, { useState } from "react";
//Components
import SearchBar from "./SearchBar"
import ProductModal from "../modals/ProductModal"
//Styles
import { List } from "../styles";
import { BsPlusCircle } from "react-icons/bs";

//Data
import products from "../products"
//ProductItem
import ProductItem from "./ProductItem"
import AddButton from "./Buttons/AddButton";

const ProductList = ({ _products, deleteProduct, createProduct }) => {

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
            <AddButton createProduct={createProduct} />
        </div>
    );
};

export default ProductList;