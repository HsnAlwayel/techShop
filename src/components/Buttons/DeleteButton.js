import React from "react";

//Store
import productStore from "../../stores/ProductStore";
import vendorStore from "../../stores/VendorStore"

//Styling 
import { DeleteButtonStyled } from "../../styles"

const DeleteButton = ({ productId, vendorId }) => {

    const handleDelete = () => {
        if (productId) {
            productStore.deleteProduct(productId);
        } else {
            vendorStore.deleteVendor(vendorId);
        }
    }

    return (
        <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    )
};
export default DeleteButton