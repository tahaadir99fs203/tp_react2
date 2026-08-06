import React from "react";

function Statistics({ clients, products, orders }) {
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalSales = orders.reduce((sum, o) => {
    return sum + o.items.reduce((sub, i) => {
      const prod = products.find(p => p.id === i.productId);
      return sub + (prod ? prod.price * i.quantity : 0);
    }, 0);
  }, 0);

  return (
    <div>
      <h2>Statistics</h2>
      <div>Total Clients: {clients.length}</div>
      <div>Total Products: {products.length}</div>
      <div>Total Stock: {totalStock}</div>
      <div>Total Sales: {totalSales}</div>
    </div>
  );
}

export default Statistics;