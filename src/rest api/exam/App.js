import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";
import ClientsList from "./clientlist";
import AddClient from "./addclient";
import EditClient from "./editclient";
import ProductsList from "./produits";
import AddProduct from "./addproduct";
import OrdersList from "./orderlist";
import AddOrder from "./addorder";
import OrderDetails from "./orderdetail";
import Statistics from "./statistics";
import NotFound from "./notfound";

function App() {
  const [data, setData] = useState({
    clients: [
      { id: 1, name: "Ali", city: "Casa" },
      { id: 2, name: "Sara", city: "Rabat" }
    ],
    products: [
      { id: 101, name: "Laptop", price: 8000, stock: 10 },
      { id: 102, name: "Mouse", price: 120, stock: 50 }
    ],
    orders: [
      {
        id: 9001,
        clientId: 1,
        items: [
          { productId: 101, quantity: 1 },
          { productId: 102, quantity: 2 }
        ],
        date: "2025-01-01"
      }
    ]
  });

  // ----- Clients -----
  function addClient(newClient) {
    setData(prev => ({
      ...prev,
      clients: [...prev.clients, { id: Date.now(), ...newClient }]
    }));
  }

  function updateClient(updatedClient) {
    setData(prev => ({
      ...prev,
      clients: prev.clients.map(c => c.id === updatedClient.id ? updatedClient : c)
    }));
  }

  function deleteClient(id) {
    setData(prev => ({
      ...prev,
      clients: prev.clients.filter(c => c.id !== id)
    }));
  }

  function filterClientsByCity(city) {
    return data.clients.filter(c => c.city.toLowerCase() === city.toLowerCase());
  }

  // ----- Products -----
  function addProduct(newProduct) {
    setData(prev => ({
      ...prev,
      products: [...prev.products, { id: Date.now(), ...newProduct }]
    }));
  }

  function deleteProduct(id) {
    setData(prev => ({
      ...prev,
      products: prev.products.filter(p => p.id !== id)
    }));
  }

  function filterProductsByName(name) {
    return data.products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  }

  function filterProductsByMaxPrice(maxPrice) {
    return data.products.filter(p => p.price <= maxPrice);
  }

  function filterProductsByPriceRange(min, max) {
    return data.products.filter(p => p.price >= min && p.price <= max);
  }

  function getOutOfStockProducts() {
    return data.products.filter(p => p.stock === 0);
  }

  function getLowStockProducts(threshold) {
    return data.products.filter(p => p.stock < threshold);
  }

  function getTopProducts() {
    const counts = {};
    data.orders.forEach(o => o.items.forEach(i => {
      counts[i.productId] = (counts[i.productId] || 0) + i.quantity;
    }));
    return Object.entries(counts)
      .sort((a,b) => b[1]-a[1])
      .slice(0,3)
      .map(([id]) => data.products.find(p => p.id === parseInt(id)));
  }

  // ----- Orders -----
  function isAvailable(productId, quantity) {
    const product = data.products.find(p => p.id === productId);
    return product && product.stock >= quantity;
  }

  function updateStock(productId, quantity) {
    setData(prev => ({
      ...prev,
      products: prev.products.map(p => p.id === productId ? { ...p, stock: p.stock - quantity } : p)
    }));
  }

  function addOrder(newOrder) {
    for (let item of newOrder.items) {
      if (!isAvailable(item.productId, item.quantity)) {
        alert("Produit indisponible ou stock insuffisant");
        return;
      }
    }
    setData(prev => ({
      ...prev,
      orders: [...prev.orders, { id: Date.now(), ...newOrder }]
    }));
    newOrder.items.forEach(item => updateStock(item.productId, item.quantity));
  }

  function filterOrdersByClient(clientId) {
    return data.orders.filter(o => o.clientId === clientId);
  }

  function calculateOrderTotal(orderId) {
    const order = data.orders.find(o => o.id === orderId);
    return order ? order.items.reduce((sum, i) => {
      const prod = data.products.find(p => p.id === i.productId);
      return sum + (prod ? prod.price * i.quantity : 0);
    }, 0) : 0;
  }

  function calculateLineTotal(productId, quantity) {
    const product = data.products.find(p => p.id === productId);
    return product ? product.price * quantity : 0;
  }

  function calculateTotalStock() {
    return data.products.reduce((sum, p) => sum + p.stock, 0);
  }

  function calculateTotalSales() {
    return data.orders.reduce((sum, o) => sum + calculateOrderTotal(o.id), 0);
  }

  function countOrdersByClient(clientId) {
    return data.orders.filter(o => o.clientId === clientId).length;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<ClientsList clients={data.clients} onDelete={deleteClient} />} />
        <Route path="/clients/add" element={<AddClient onAdd={addClient} />} />
        <Route path="/clients/edit/:id" element={<EditClient clients={data.clients} onUpdate={updateClient} />} />
        <Route path="/products" element={<ProductsList products={data.products} onDelete={deleteProduct} />} />
        <Route path="/products/add" element={<AddProduct onAdd={addProduct} />} />
        <Route path="/orders" element={<OrdersList orders={data.orders} clients={data.clients} products={data.products} />} />
        <Route path="/orders/add" element={<AddOrder clients={data.clients} products={data.products} onAdd={addOrder} />} />
        <Route path="/orders/:id" element={<OrderDetails orders={data.orders} clients={data.clients} products={data.products} />} />
        <Route path="/statistics" element={<Statistics clients={data.clients} products={data.products} orders={data.orders} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;