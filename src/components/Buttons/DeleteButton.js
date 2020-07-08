import React from "react";

//Styling 
import { DeleteButtonStyled } from "../../styles"
import { Link, } from "react-router-dom";
const DeleteButton = (props) => {

    const handleDelete = () => {
        props.deleteProduct(props.productId);
    }
    return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
};
export default DeleteButton