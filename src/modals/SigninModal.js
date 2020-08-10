import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import authStore from "../stores/authStore";

//Styles
import { CreateButtonStyled } from "../styles"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const SigninModal = ({ isOpen, closeModal, oldUser }) => {
    const [user, setUser] = useState(
        {
            username: "",
            password: "",
        }
    )

    const handleChange = (event) => setUser({ ...user, [event.target.name]: event.target.value });


    const handleSubmit = (event) => {
        event.preventDefault();
        authStore.signin(user);
        closeModal();
    };

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3>Signin</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            name="username"
                            value={user.username}
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            name="password"
                            value={user.password}
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                    <CreateButtonStyled className="btn float-right" type="submit">
                        Sign up
                    </CreateButtonStyled>
                </form>
            </Modal>
        </div>

    )
};

export default SigninModal;