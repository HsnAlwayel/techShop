import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

//Components
import ProductModal from "../../modals/ProductModal";
import ProductsModal from "../../modals/ProductsModal";
import VendorModal from "../../modals/VendorModal";

//Style
import { BsPlusCircle } from "react-icons/bs";

const AddButton = ({ vendorId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    let location = useLocation();

    switch (location.pathname) {
        case `/vendors`:
            return (<div>
                <BsPlusCircle className="float-right" size="2em" onClick={() => setIsOpen(true)}
                />
                <VendorModal isOpen={isOpen} closeModal={closeModal} />
            </div>
            ); break;

        case `/vendors/${vendorId}`:
            return (<div>
                <BsPlusCircle className="float-right" size="2em" onClick={() => setIsOpen(true)}
                />
                <ProductModal isOpen={isOpen} closeModal={closeModal} />
            </div>
            ); break;
        case `/products`:
            return (<div>
                <BsPlusCircle className="float-right" size="2em" onClick={() => setIsOpen(true)}
                />
                <ProductsModal isOpen={isOpen} closeModal={closeModal} />
            </div>); break;
    }
}




//     }
//     return (
//         <div>
//             <BsPlusCircle
//                 className="float-right"
//                 size="2em"
//                 onClick={() => setIsOpen(true)}
//             />

//             {console.log(location.pathname)}
//             {vendorId ? (

//                 <ProductModal isOpen={isOpen} closeModal={closeModal} vendorId={vendorId} />
//             ) : (
//                     <VendorModal isOpen={isOpen} closeModal={closeModal} />
//                 )
//             }
//         </div>
//     );
// };

export default AddButton;