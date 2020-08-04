import React from "react";

//Components
import { Link, useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import ProductList from "./ProductList"
import AddButton from "./Buttons/AddButton";
import DeleteButton from "./Buttons/DeleteButton"
import UpdateButton from "./Buttons/UpdateButton";

//Stores
import vendorStore from "../stores/VendorStore";
import productStore from "../stores/ProductStore";

//Styles
import { DetailWrapper } from "../styles"

const VendorDetail = () => {
    const { vendorId } = useParams();
    const vendor = vendorStore.vendors.find((vendor) => vendor.id === +vendorId)

    const products = vendor.products.map((product) =>
        productStore.getProductById(product.id)
    ).filter((product) => product)

    console.log(products);

    if (!vendor) return <Redirect to="/vendors" />

    return (
        <div className="row">
            <div className="container">
                <DetailWrapper className="col-12">
                    <Link to="/vendors">
                        <p>Back to vendors</p>
                    </Link>
                    <h1>{vendor.name}</h1>
                    <img
                        src={vendor.image}
                        alt={vendor.name}
                    />
                    <UpdateButton vendor={vendor} />
                    <DeleteButton vendorId={vendorId} />
                </DetailWrapper>
            </div>
            <div className="col-12">
                <ProductList products={products} />
                <AddButton vendor={vendor} />
            </div>
        </div>
    );
};

export default observer(VendorDetail);
