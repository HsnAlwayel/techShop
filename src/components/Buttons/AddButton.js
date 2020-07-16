import React, { useState } from "react";

//Components
import ProductModal from "../../modals/ProductModal";

//Style
import { BsPlusCircle } from "react-icons/bs";

const AddButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);

    return (
        <>
            <BsPlusCircle
                className="float-right"
                size="2em"
                onClick={() => setIsOpen(true)}
            />
            <ProductModal isOpen={isOpen} closeModal={closeModal} />
        </>
    );
};

export default AddButton;