import React, { useState } from "react";
import ProductModal from "../../modals/ProductModal";
import { BsPlusCircle } from "react-icons/bs";

const AddButton = ({ createProduct }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <>
            <BsPlusCircle
                className="float-right"
                size="2em"
                onClick={() => setIsOpen(true)}
            />
            <ProductModal isOpen={isOpen} closeModal={closeModal} createProduct={createProduct} />
        </>
    );
};

export default AddButton;