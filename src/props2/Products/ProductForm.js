import React, { useState } from "react";

const ProductForm = ({ onProductAdd }) => {
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: 0 });

    const handleAdd = () => {
        if (newProduct.name.trim() !== '' && newProduct.description.trim() !== '') {
            onProductAdd({ ...newProduct, id: Date.now() });
            setNewProduct({ name: '', description: '', price: 0 });
        }
    };

    return (
        <div>
            <label>Name: </label>
            <input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />

            <label>Description: </label>
            <input
            type="text"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />

            <label>Price: </label>
            <input
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
            />

            <button onClick={handleAdd}>
                Add Product
            </button>
        </div>
    );
};

export default ProductForm;