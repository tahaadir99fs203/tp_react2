import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

const App = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div>
            <h1>Product Management</h1>

            <ProductForm onProductAdd={handleAddProduct} />
            <ProductList products={products} onProductSelect={handleSelectProduct} />
            {selectedProduct && <ProductDetails product={selectedProduct} />}
        </div>
    );
};

export default App;