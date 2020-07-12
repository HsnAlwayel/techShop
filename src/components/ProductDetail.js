import React from "react";
import DeleteButton from "./Buttons/DeleteButton"
import { Link, useParams, Redirect } from "react-router-dom";
//styles
import { DeleteButtonStyled, DetailWrapper } from "../styles"

const ProductDetail = ({ products, deleteProduct }) => {
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId)
    if (!product) return <Redirect to="/products" />

    return (
        <DetailWrapper>
            <Link to="/products">
                <p>Back to products</p>
            </Link>
            <h1>{product.name}</h1>
            <img
                src={product.image}
                alt={product.name}
            />
            <p>{product.desc}</p>
            <p>{product.price}</p>
            <DeleteButton productId={product.id} deleteProduct={deleteProduct} />
        </DetailWrapper>
    );
};

export default ProductDetail;
