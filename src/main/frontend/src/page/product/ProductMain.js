import React from "react";
import ProductList from "./ProductList";
import {BrowserRouter} from "react-router-dom";

const ProductMain = props => {
    return (
        <>
            <BrowserRouter>
            <ProductList />
            </BrowserRouter>
        </>
    )
}

export default ProductMain;