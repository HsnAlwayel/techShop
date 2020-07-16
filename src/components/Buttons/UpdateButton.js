import React, { useState } from "react";

//Components
import ProductModal from "../../modals/ProductModal"

// Styling
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <>
            <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>;
            <ProductModal isOpen={isOpen} closeModal={closeModal} oldProduct={product} />
        </>
    )
};

export default UpdateButton;