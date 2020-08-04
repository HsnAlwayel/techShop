import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

//Components
import ProductModal from "../../modals/ProductModal";
import VendorModal from "../../modals/VendorModal";

//Style
import { BsPlusCircle } from "react-icons/bs";

const AddButton = ({ vendor }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    let location = useLocation();

    return (
        <div>
            <BsPlusCircle
                className="float-right"
                size="2em"
                onClick={() => setIsOpen(true)}
            />

            {console.log(location.pathname)}
            {vendor ? (

                <ProductModal isOpen={isOpen} closeModal={closeModal} vendor={vendor} />
            ) : (
                    <VendorModal isOpen={isOpen} closeModal={closeModal} />
                )
            }
        </div>
    );
};

//     switch (location.pathname) {
//         case `/vendors`:
//             return (<div>
//                 <BsPlusCircle className="float-right" size="2em" onClick={() => setIsOpen(true)}
//                 />
//                 <VendorModal isOpen={isOpen} closeModal={closeModal} />
//             </div>
//             );

//         case `/vendors/${vendor}`:
//             return (<div>
//                 <BsPlusCircle className="float-right" size="2em" onClick={() => setIsOpen(true)}
//                 />
//                 <ProductModal isOpen={isOpen} closeModal={closeModal} vendor={vendor} />
//             </div>
//             );
//         case `/products`:
//             return (<div>
//                 <BsPlusCircle className="float-right" size="2em" onClick={() => setIsOpen(true)}
//                 />
//                 <ProductsModal isOpen={isOpen} closeModal={closeModal} />
//             </div>);
//     }
// }




export default AddButton;