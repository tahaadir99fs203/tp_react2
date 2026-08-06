import React from "react";

const ProductList = ({ products, onProductSelect }) => {
    return (
        <ul>
            {products.map(product => (
                <li key={product.id} onClick={() => onProductSelect(product)}>
                    {product.name}
                </li>
            ))}
        </ul>
    );
};

export default ProductList;