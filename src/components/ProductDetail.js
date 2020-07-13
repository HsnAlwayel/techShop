import React from "react";
import DeleteButton from "./Buttons/DeleteButton"
import { Link, useParams, Redirect } from "react-router-dom";
// Stores
import productsStore from "../stores/ProductStore";
//styles
import { DeleteButtonStyled, DetailWrapper } from "../styles"

const ProductDetail = () => {
    const { productId } = useParams();
    const product = productsStore.products.find((product) => product.id === productId)
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
            <DeleteButton productId={product.id} />
        </DetailWrapper>
    );
};

export default ProductDetail;
