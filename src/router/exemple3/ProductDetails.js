import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const { productId, category, subcategory} = useParams();
    return (
        <div>
            <h2>Details du Produit</h2>
            <p>ID du Produit : {productId}</p>
            <p>Categorie : {category}</p>
            <p>Sous-categorie : {subcategory}</p>
        </div>
    ) ;
}