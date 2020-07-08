import React from "react";
//Styles
import styles from "../styles";
import { ProductImage, DeleteButtonStyled } from "../styles"
import DeleteButton from "./Buttons/DeleteButton"
import { Link } from "react-router-dom";

const ProductItem = (props) => {
    const product = props.product;

    return (
        <ProductImage>
            <Link to={`/products/${product.id}`}>
                <img alt={product.name}
                    src={product.image}
                />
            </Link>
            <p >{product.name}</p>
            <p className="product-price">{product.price} KD</p>
            <DeleteButton productId={product.id} deleteProduct={props.deleteProduct} />
        </ProductImage>
    );
};

export default ProductItem;