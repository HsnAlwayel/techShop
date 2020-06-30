import React from "react";

//Styles
import styles from "../styles";
// import products from "../products";

const ProductItem = (props) => {
    const product = props.product;
    return (
        <div style={styles.product}>
            <img style={styles.productImage} alt={product.name} src={product.image} />
            <p style={styles.text}>{product.name}</p>
            <p style={styles.text}>{product.price} KD</p>
        </div>
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