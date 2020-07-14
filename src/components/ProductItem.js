import React from "react";
import { observer } from "mobx-react";
//Styles
import styles from "../styles";
import { ProductImage, DeleteButtonStyled } from "../styles"
import DeleteButton from "./Buttons/DeleteButton"
import { Link } from "react-router-dom";
import UpdateButton from "./Buttons/UpdateButton";

const ProductItem = ({ product }) => {

    return (
        <ProductImage className="col-lg-4 col-md-4 col-sm-4">
            <Link to={`/products/${product.id}`}>
                <img alt={product.name}
                    src={product.image}
                />
            </Link>
            <p >{product.name}</p>
            <p className="product-price">{product.price} KD</p>
            <UpdateButton product={product} />
            <DeleteButton productId={product.id} />
        </ProductImage>
    );
};

export default observer(ProductItem);
