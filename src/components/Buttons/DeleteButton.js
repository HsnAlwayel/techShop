import React from "react";

//Styling 
import { DeleteButtonStyled } from "../../styles"
import { useHistory } from "react-router-dom";
const DeleteButton = (props) => {
    const history = useHistory();

    const handleDelete = () => {
        props.deleteProduct(props.productId);
        history.push("/products")
    }
    return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
};
export default DeleteButton