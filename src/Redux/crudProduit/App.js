import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, updateProduct, deleteProduct } from "./actions";

function App() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState({ libelle: '', prix: 0, quantite: 0 });

    const handleAddProduct = () => {
        dispatch(addProduct({ ...newProduct, id: Date.now() }));
        setNewProduct({ libelle: '', prix: 0, quantite: 0 });
    };

    const handleUpdateProduct = (id, updatedProduct) => {
        dispatch(updateProduct(id, updatedProduct));
    };

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
    };

    return (
        <div>
            <h1>Liste des Produits</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.libelle} - {product.prix} - {product.quantite}
                        <button onClick={() => handleUpdateProduct(product.id, { ...product, quantite: product.quantite + 1 })}>Augmenter Quantite</button>
                        <button onClick={() => handleDeleteProduct(product.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <h2>Ajouter un Produit</h2>
            <label>Libelle: </label>
            <input type="text" value={newProduct.libelle} onChange={(e) => setNewProduct({ ...newProduct, libelle: e.target.value })} />
            <br />
            <label>Prix: </label>
            <input type="number" value={newProduct.prix} onChange={(e) => setNewProduct({ ...newProduct, prix: Number(e.target.value) })} />
            <br />
            <label>Quantite: </label>
            <input type="number" value={newProduct.quantite} onChange={(e) => setNewProduct({ ...newProduct, quantite: Number(e.target.value) })} />
            <br />
            <button onClick={handleAddProduct}>Ajouter</button>
        </div>
    );
}

export default App;