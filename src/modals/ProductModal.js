import React, { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../styles"
// Stores
import productsStore from "../stores/ProductStore";

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

const ProductModal = ({ isOpen, closeModal, oldProduct }) => {
    const [product, setProduct] = useState(
        oldProduct ? oldProduct : {
            name: "",
            price: 0,
            description: "",
            image: "",
        }
    )

    const handleChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        productsStore[oldProduct ? "updateProduct" : "createProduct"](product);
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
                        <input type="text" name="name" className="form-control" onChange={handleChange} required value={product.name} />
                    </div>
                    <div className="col-6">
                        <label>Price</label>
                        <input type="number" min="1" name="price" className="form-control" onChange={handleChange} required value={product.price} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="desc" className="form-control" onChange={handleChange} required value={product.desc} />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input type="text" name="image" className="form-control" onChange={handleChange} required value={product.image} />
                </div>
                <CreateButtonStyled className="btn float-right">Save</CreateButtonStyled>
            </form>
        </Modal>

    )
};

export default ProductModal;