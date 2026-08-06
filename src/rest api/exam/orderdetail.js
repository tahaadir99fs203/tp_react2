import React from "react";
import { useParams } from "react-router-dom";

function OrderDetails({ orders, clients, products }) {
  const { id } = useParams();
  const order = orders.find(o => o.id === parseInt(id));
  if (!order) return <div>Order not found</div>;

  const client = clients.find(c => c.id === order.clientId);

  function calculateLineTotal(productId, quantity) {
    const product = products.find(p => p.id === productId);
    return product ? product.price * quantity : 0;
  }

  return (
    <div>
      <h2>Order Details</h2>
      <div>Client: {client?.name}</div>
      <div>Date: {order.date}</div>
      <ul>
        {order.items.map((item, index) => {
          const product = products.find(p => p.id === item.productId);
          return (
            <li key={index}>
              {product?.name} - Qty: {item.quantity} - Total: {calculateLineTotal(item.productId, item.quantity)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OrderDetails;