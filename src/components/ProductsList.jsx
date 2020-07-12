import React from "react";
import Product from "./Product.jsx";

function ProductList({ data, handleClick }) {
    const prodList =
        data.results &&
        data.results
            .filter((product, index) => index <= 3)
            .map((product) => (
                <Product item={product} handleClick={handleClick} />
            ));
    return <div className="product-container">{prodList}</div>;
}

export default ProductList;
