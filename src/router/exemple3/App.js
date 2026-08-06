import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/product/123/electronics/laptops">Laptop 123</Link></li>
                        <li><Link to="/product/456/clothing/shirts">Chemise 456</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/product/:productId/:category/:subcategory" element={<ProductDetails />} />
                </Routes>
            </div>
        </Router>
    );
}