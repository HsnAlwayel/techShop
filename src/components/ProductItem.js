import React from "react";
//Styles
import styles from "../styles";
import { ProductImage, DeleteButtonStyled } from "../styles"
import DeleteButton from "./Buttons/DeleteButton"
import { Link } from "react-router-dom";

const ProductItem = ({ product, deleteProduct }) => {

    return (
        <ProductImage className="col-lg-4 col-md-4 col-sm-4">
            <Link to={`/products/${product.id}`}>
                <img alt={product.name}
                    src={product.image}
                />
            </Link>
            <p >{product.name}</p>
            <p className="product-price">{product.price} KD</p>
            <DeleteButton productId={product.id} deleteProduct={deleteProduct} />
        </ProductImage>
    );
};

export default ProductItem;