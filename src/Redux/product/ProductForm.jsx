import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "./productSlice";

const ProductForm = ({ selectedProduct, clearSelection }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(selectedProduct?.name || "");
    const [price, setPrice] = useState(selectedProduct?.price || "");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedProduct) {
            dispatch(updateProduct({
                id: selectedProduct.id,
                name,
                price
            }));
            clearSelection();
        } else {
            dispatch(addProduct({ name, price }));
        }

        setName("");
        setPrice("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom du produit" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Prix" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <button type="submit">
                {selectedProduct ? "Modifier" : "Ajouter"}
            </button>
        </form>
    );
};

export default ProductForm;