import React, { useState } from "react";

//Components
import ProductModal from "../../modals/ProductModal";

//Style
import { BsPlusCircle } from "react-icons/bs";
import VendorModal from "../../modals/VendorModal";

const AddButton = ({ vendorId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <BsPlusCircle
                className="float-right"
                size="2em"
                onClick={() => setIsOpen(true)}
            />
            {vendorId ? (
                <ProductModal isOpen={isOpen} closeModal={closeModal} vendorId={vendorId} />
            ) : (
                    <VendorModal isOpen={isOpen} closeModal={closeModal} />
                )
            }
        </div>
    );
};

export default AddButton;