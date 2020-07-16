import React from "react";

//Store
import productStore from "../../stores/ProductStore";

//Styling 
import { DeleteButtonStyled } from "../../styles"

const DeleteButton = ({ productId }) => {

    const handleDelete = () => productStore.deleteProduct(productId);

    return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
};
export default DeleteButton