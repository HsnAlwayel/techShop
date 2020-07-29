import React from 'react';
import { Route, Switch } from "react-router";

//Components
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail"
import Home from "./Home";
import VendorList from './VendorList';
import VendorDetail from './VendorDetail';

// Stores
import productStore from "../stores/ProductStore";

const Routes = () => {
    return (
        <Switch>
            <Route path="/vendors/:vendorId">
                <VendorDetail />
            </Route>
            <Route path="/vendors">
                <VendorList />
            </Route>
            <Route path="/products/:productId">
                <ProductDetail />
            </Route>
            <Route path="/products">
                <ProductList products={productStore.products} />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes;