import React from "react";
import productsStore from "../../stores/ProductStore";
//Styling 
import { DeleteButtonStyled } from "../../styles"
import { Link, } from "react-router-dom";
const DeleteButton = (props) => {

    const handleDelete = () => {
        productsStore.deleteProduct(props.productId);
    }
    return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
};
export default DeleteButton