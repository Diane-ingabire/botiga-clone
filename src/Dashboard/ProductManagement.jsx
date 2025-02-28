import React, { useState } from "react";
import "../Dashboard/dashboard_styles/ProductManagement.css";
import user from "../assets/user.png";

const ProductManagement = () => {
const paymentHistoryData = [
  {
    id: 1,
    user: "Dianne Russell",
    image: user,
    email: "osgoodwy@gmail.com",
    transactionId: "9562415412263",
    amount: "$29.00",
    paymentMethod: "Bank",
    date: "24 Jun 2024",
    status: "Pending"
  },
  {
    id: 2,
    user: "Wade Warren",
    image: user,
    email: "redaniel@gmail.com",
    transactionId: "9562415412263",
    amount: "$29.00",
    paymentMethod: "Bank",
    date: "24 Jun 2024",
    status: "Active"
  },
  {
    id: 3,
    user: "Albert Flores",
    image: user,
    email: "seema@gmail.com",
    transactionId: "9562415412263",
    amount: "$29.00",
    paymentMethod: "Bank",
    date: "24 Jun 2024",
    status: "Active"
  },
  {
    id: 4,
    user: "Bessie Cooper",
    image: user,
    email: "hamli@gmail.com",
    transactionId: "9562415412263",
    amount: "$29.00",
    paymentMethod: "Bank",
    date: "24 Jun 2024",
    status: "Active"
  },
  {
    id: 5,
    user: "Arlene McCoy",
    image: user,
    email: "zitka@mail.ru",
    transactionId: "9562415412263",
    amount: "$29.00",
    paymentMethod: "Cash",
    date: "24 Jun 2024",
    status: "pending"
  }
];
  const categories = [
    { name: "Electronics" },
    { name: "Fashion" },
    { name: "Body Lotion" }
  ];

  return (
    <div className="product-management-container">
      <div className="header-section">
        <h2 className="page-title">Product Management</h2>
        <button className="add-edit-button">Add / Edit Product</button>
      </div>

      <div className="category-tags">
        {categories.map((cat) => (
          <span key={cat.name} className="tag">
            {cat.name}
          </span>
        ))}
      </div>

      <h3 className="section-title">Inventory Tracking</h3>

    <div className="table-container">
    <div className="table-header">
      <h2>Payment History</h2>
      <a href="#" className="view-all">View All</a>
    </div>
    <table className="payment-table">
      <thead>
        <tr>
          <th>Users</th>
          <th>Email</th>
          <th>Transaction ID</th>
          <th>Amount</th>
          <th>Payment Method</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {paymentHistoryData.map((payment) => (
          <tr key={payment.id}>
            <td className="user-cell">
              <div className="user-info">
              <img src={payment.image} alt={payment.user} className="product-image" />
                <span>{payment.user}</span>
              </div>
            </td>
            <td>{payment.email}</td>
            <td>{payment.transactionId}</td>
            <td>{payment.amount}</td>
            <td>{payment.paymentMethod}</td>
            <td>{payment.date}</td>
            <td>
              <span className={`status-badge ${payment.status.toLowerCase()}`}>
                {payment.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
    </div>
  );
};

export default ProductManagement;
