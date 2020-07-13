import React, { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../styles"
// Stores
import productsStore from "../stores/ProductStore";

const ProductModal = ({ isOpen, closeModal }) => {
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

    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: "",
        image: "",
        id: 100,
        slug: "newItem"
    });

    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        productsStore.createProduct(product);
        closeModal();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h3>New Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col-6">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="col-6">
                        <label>Price</label>
                        <input type="number" min="1" name="price" className="form-control" onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type="text" name="image" className="form-control" onChange={handleChange} required />
                </div>
                <CreateButtonStyled className="btn float-right">Create</CreateButtonStyled>
            </form>
        </Modal>

    )
};

export default ProductModal;