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
    const { vendorSlug } = useParams();
    const vendor = vendorStore.vendors.find((vendor) => vendor.slug === vendorSlug)

    if (!vendor) return <Redirect to="/" />

    let products = []
    if (vendor.products) {
        products = vendor.products
            .map((product) => productStore.getProductById(product.id))
            .filter((product) => product);
    }

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
                    <DeleteButton vendorId={vendor.Id} />
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
