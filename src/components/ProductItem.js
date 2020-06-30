import React from "react";

//Styles
import styles from "../styles";
import { ProductImage } from "../styles"
// import products from "../products";

const ProductItem = (props) => {
    const product = props.product;
    return (
        <ProductImage>
            <img alt={product.name} src={product.image} />
            <p >{product.name}</p>
            <p className="product-price">{product.price} KD</p>
        </ProductImage>
    );
};

/* 
//         <div style={styles.product} key={product.id}>
//             <img src={product.image} alt={product.name} style={styles.productImage} />
//             <p style={styles.text}> {product.name}</p>
//             <p style={styles.text}>{product.price} KD</p>
//         </div>

//     );

// }; */

export default ProductItem;