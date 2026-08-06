import { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './exam/Navbar';
import Home from './exam/Home';
import ClientsList from './exam/ClientsList';
import AddClient from './exam/AddClient';
import EditClient from './exam/EditClient';
import ProductsList from './exam/ProductsList';
import AddProduct from './exam/AddProduct';
import OrdersList from './exam/OrdersList';
import AddOrder from './exam/AddOrder';
import OrderDetails from './exam/OrderDetails';
import Statistics from './exam/Statistics';
import NotFound from './exam/NotFound';

const initialData = {
  clients: [
    { id: 1, name: 'Ali', city: 'Casa' },
    { id: 2, name: 'Sara', city: 'Rabat' },
  ],
  products: [
    { id: 101, name: 'Laptop', price: 8000, stock: 10 },
    { id: 102, name: 'Mouse', price: 120, stock: 50 },
  ],
  orders: [
    {
      id: 9001,
      clientId: 1,
      items: [
        { productId: 101, quantity: 1 },
        { productId: 102, quantity: 2 },
      ],
      date: '2025-01-01',
    },
  ],
};

const applyStockChange = (products, productId, quantity) =>
  products.map((product) =>
    product.id === Number(productId)
      ? { ...product, stock: product.stock - Number(quantity) }
      : product
  );

function App() {
  const [data, setData] = useState(initialData);

  const addClient = (client) => {
    setData((prev) => ({
      ...prev,
      clients: [...prev.clients, { ...client, id: Date.now() }],
    }));
  };

  const updateClient = (updatedClient) => {
    setData((prev) => ({
      ...prev,
      clients: prev.clients.map((client) =>
        client.id === Number(updatedClient.id) ? { ...client, ...updatedClient } : client
      ),
    }));
  };

  const deleteClient = (id) => {
    setData((prev) => ({
      ...prev,
      clients: prev.clients.filter((client) => client.id !== Number(id)),
      orders: prev.orders.filter((order) => order.clientId !== Number(id)),
    }));
  };

  const filterClientsByCity = (city, collection = data.clients) => {
    if (!city) return collection;
    return collection.filter((client) =>
      client.city.toLowerCase().includes(city.toLowerCase())
    );
  };

  const addProduct = (product) => {
    setData((prev) => ({
      ...prev,
      products: [...prev.products, { ...product, id: Date.now(), price: Number(product.price), stock: Number(product.stock) }],
    }));
  };

  const deleteProduct = (productId) => {
    setData((prev) => ({
      ...prev,
      products: prev.products.filter((product) => product.id !== Number(productId)),
    }));
  };

  const filterProductsByName = (name, collection = data.products) => {
    if (!name) return collection;
    return collection.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  const filterProductsByMaxPrice = (maxPrice, collection = data.products) => {
    if (!maxPrice) return collection;
    const parsed = Number(maxPrice);
    if (Number.isNaN(parsed)) return collection;
    return collection.filter((product) => product.price <= parsed);
  };

  const filterProductsByPriceRange = (min, max, collection = data.products) => {
    const hasMin = min !== undefined && min !== '' && !Number.isNaN(Number(min));
    const hasMax = max !== undefined && max !== '' && !Number.isNaN(Number(max));

    if (!hasMin && !hasMax) return collection;

    return collection.filter((product) => {
      const meetsMin = hasMin ? product.price >= Number(min) : true;
      const meetsMax = hasMax ? product.price <= Number(max) : true;
      return meetsMin && meetsMax;
    });
  };

  const getProductById = (id) => data.products.find((product) => product.id === Number(id));

  const isAvailable = (productId, quantity) => {
    const product = getProductById(productId);
    if (!product) return false;
    return product.stock >= Number(quantity);
  };

  const updateStock = (productId, quantity) => {
    setData((prev) => ({
      ...prev,
      products: applyStockChange(prev.products, productId, quantity),
    }));
  };

  const addOrder = (order) => {
    const allAvailable = order.items.every((item) =>
      isAvailable(item.productId, item.quantity)
    );

    if (!allAvailable) {
      throw new Error('Stock insuffisant pour certains produits');
    }

    setData((prev) => {
      const newOrder = {
        ...order,
        id: Date.now(),
        clientId: Number(order.clientId),
        items: order.items.map((item) => ({
          productId: Number(item.productId),
          quantity: Number(item.quantity),
        })),
        date: order.date || new Date().toISOString().split('T')[0],
      };

      const updatedProducts = newOrder.items.reduce(
        (acc, item) => applyStockChange(acc, item.productId, item.quantity),
        prev.products
      );

      return {
        ...prev,
        orders: [...prev.orders, newOrder],
        products: updatedProducts,
      };
    });
  };

  const filterOrdersByClient = (clientId, collection = data.orders) => {
    if (!clientId) return collection;
    return collection.filter((order) => order.clientId === Number(clientId));
  };

  const calculateLineTotal = (productId, quantity) => {
    const product = getProductById(productId);
    if (!product) return 0;
    return Number(quantity) * product.price;
  };

  const calculateOrderTotal = (orderId) => {
    const order = data.orders.find((item) => item.id === Number(orderId));
    if (!order) return 0;
    return order.items.reduce(
      (total, item) => total + calculateLineTotal(item.productId, item.quantity),
      0
    );
  };

  const calculateTotalStock = () =>
    data.products.reduce((sum, product) => sum + Number(product.stock), 0);

  const calculateTotalSales = () =>
    data.orders.reduce((sum, order) => sum + calculateOrderTotal(order.id), 0);

  const countOrdersByClient = (clientId) =>
    data.orders.filter((order) => order.clientId === Number(clientId)).length;

  const getOutOfStockProducts = () =>
    data.products.filter((product) => product.stock <= 0);

  const getLowStockProducts = (threshold = 5) =>
    data.products.filter((product) => product.stock > 0 && product.stock <= threshold);

  const getTopProducts = () => {
    const salesByProduct = data.orders.reduce((acc, order) => {
      order.items.forEach((item) => {
        acc[item.productId] = (acc[item.productId] || 0) + Number(item.quantity);
      });
      return acc;
    }, {});

    return Object.entries(salesByProduct)
      .map(([productId, quantity]) => {
        const product = getProductById(productId);
        return product ? { ...product, sold: quantity } : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.sold - a.sold)
      .slice(0, 3);
  };

  const statsSnapshot = useMemo(
    () => ({
      totalStock: calculateTotalStock(),
      totalSales: calculateTotalSales(),
      outOfStock: getOutOfStockProducts().length,
      ordersPerClient: data.clients.map((client) => ({
        client,
        orders: countOrdersByClient(client.id),
      })),
    }),
    [data]
  );

  return (
    <div className="exam-app">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                clients={data.clients}
                products={data.products}
                orders={data.orders}
                statsSnapshot={statsSnapshot}
              />
            }
          />
          <Route
            path="/clients"
            element={
              <ClientsList
                clients={data.clients}
                onDelete={deleteClient}
                filterClientsByCity={filterClientsByCity}
              />
            }
          />
          <Route path="/clients/add" element={<AddClient onAdd={addClient} />} />
          <Route
            path="/clients/edit/:id"
            element={<EditClient clients={data.clients} onUpdate={updateClient} />}
          />
          <Route
            path="/products"
            element={
              <ProductsList
                products={data.products}
                onDelete={deleteProduct}
                filterProductsByName={filterProductsByName}
                filterProductsByMaxPrice={filterProductsByMaxPrice}
                filterProductsByPriceRange={filterProductsByPriceRange}
              />
            }
          />
          <Route path="/products/add" element={<AddProduct onAdd={addProduct} />} />
          <Route
            path="/orders"
            element={
              <OrdersList
                orders={data.orders}
                clients={data.clients}
                products={data.products}
                filterOrdersByClient={filterOrdersByClient}
                calculateOrderTotal={calculateOrderTotal}
              />
            }
          />
          <Route
            path="/orders/add"
            element={
              <AddOrder
                clients={data.clients}
                products={data.products}
                onAdd={addOrder}
                isAvailable={isAvailable}
                updateStock={updateStock}
              />
            }
          />
          <Route
            path="/orders/:id"
            element={
              <OrderDetails
                orders={data.orders}
                clients={data.clients}
                products={data.products}
                calculateLineTotal={calculateLineTotal}
                calculateOrderTotal={calculateOrderTotal}
              />
            }
          />
          <Route
            path="/statistics"
            element={
              <Statistics
                clients={data.clients}
                products={data.products}
                orders={data.orders}
                calculateTotalStock={calculateTotalStock}
                calculateTotalSales={calculateTotalSales}
                getOutOfStockProducts={getOutOfStockProducts}
                getLowStockProducts={getLowStockProducts}
                getTopProducts={getTopProducts}
                countOrdersByClient={countOrdersByClient}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      </div>
    );
}

export default App;