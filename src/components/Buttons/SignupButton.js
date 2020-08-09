import React, { useState } from "react";

//Modal
import SignupModal from "../../modals/SignupModal";

//Styles
import { AuthButtonStyled } from "../../styles";

const SignupButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    return (
        <>
            <AuthButtonStyled onClick={openModal}>Sign up</AuthButtonStyled>
            <SignupModal isOpen={isOpen} closeModal={closeModal} />
        </>
    );
};

export default SignupButton;