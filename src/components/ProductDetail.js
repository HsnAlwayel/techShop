import React from "react";
import { DeleteButtonStyled, DetailWrapper } from "../styles"

const ProductDetail = (props) => {
    const product = props.product;
    const handleDelete = () => {
        props.deleteProduct(product.id);
    }
    return (
        <DetailWrapper>
            <h1>{product.name}</h1>
            <img
                src={product.image}
                alt={product.name}
            />
            <p>{product.desc}</p>
            <p>{product.price}</p>
            <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
        </DetailWrapper>
    );
};

export default ProductDetail;
