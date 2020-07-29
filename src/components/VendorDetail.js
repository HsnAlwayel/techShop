import React from "react";
import DeleteButton from "./Buttons/DeleteButton"
import { Link, useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import ProductList from "./ProductList"
//Stores
import vendorStore from "../stores/VendorStore";

//Styles
import { DetailWrapper } from "../styles"

const VendorDetail = () => {
    const { vendorId } = useParams();
    const vendor = vendorStore.vendors.find((vendor) => vendor.id === +vendorId)

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
                    <DeleteButton vendorId={vendor.id} />
                </DetailWrapper>
            </div>
            <div className="col-12">
                <ProductList products={vendor.products} />
            </div>
        </div>
    );
};

export default observer(VendorDetail);
