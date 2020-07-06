import React from "react";
//Styles
import styles from "../styles";
import { ProductImage, DeleteButtonStyled } from "../styles"

const ProductItem = (props) => {
    const product = props.product;
    const handleDelete = () => {
        props.deleteProduct(product.id);
    }
    return (
        <ProductImage>
            <img alt={product.name}
                src={product.image}
                onClick={() => props.selectProduct(product.id)} />
            <p >{product.name}</p>
            <p className="product-price">{product.price} KD</p>
            <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
        </ProductImage>
    );
};

export default ProductItem;