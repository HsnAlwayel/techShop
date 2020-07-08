import React from "react";
import DeleteButton from "./Buttons/DeleteButton"
import { Link, useParams } from "react-router-dom";
//styles
import { DeleteButtonStyled, DetailWrapper } from "../styles"

const ProductDetail = (props) => {
    const { productId } = useParams();
    const product = props.products.find((product) => product.id === productId)

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
            <DeleteButton productId={product.id} deleteProduct={props.deleteProduct} />
        </DetailWrapper>
    );
};

export default ProductDetail;
