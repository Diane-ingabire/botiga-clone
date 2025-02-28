import React, { useState } from "react";
import "../Dashboard/dashboard_styles/orders.css"; // Ensure the path is correct

const Orders = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [customerFilter, setCustomerFilter] = useState("");

  // Sample orders data (replace with API data)
  const orders = [
    { id: "ORD1234", customer: "John Doe", date: "2025-02-17", status: "Shipped", total: "$120.00" },
    { id: "ORD1235", customer: "Jane Smith", date: "2025-02-16", status: "Pending", total: "$75.50" },
    { id: "ORD1236", customer: "Alice Johnson", date: "2025-02-15", status: "Delivered", total: "$210.90" },
    { id: "ORD1237", customer: "Bob Martin", date: "2025-02-14", status: "Cancelled", total: "$50.00" },
  ];

  // Calculate totals
  const totalOrders = orders.length;
  const totalCancelled = orders.filter(order => order.status === "Cancelled").length;
  const totalPending = orders.filter(order => order.status === "Pending").length;
  const totalDelivered = orders.filter(order => order.status === "Delivered").length;

  return (
    <div className="orders-dashboard-container">
      {/* Summary Cards */}
      <div className="orders-cards-container">
        <div className="orders-total-orders">
          <h3>Total Orders</h3>
          <p>{totalOrders}</p>
        </div>
        <div className="orders-cancelled-orders">
          <h3>Cancelled Orders</h3>
          <p>{totalCancelled}</p>
        </div>
        <div className="orders-pending-orders">
          <h3>Pending Orders</h3>
          <p>{totalPending}</p>
        </div>
        <div className="orders-delivered-orders">
          <h3>Delivered Orders</h3>
          <p>{totalDelivered}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="orders-filter-container">
        <label>
          Filter by Status:
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Shipped">Shipped</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
            <option value="Delivered">Delivered</option>
          </select>
        </label>
        <label>
          Date Range:
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
          />
          to
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          />
        </label>
        <label>
          Customer:
          <input
            type="text"
            value={customerFilter}
            placeholder="Search by customer name"
            onChange={(e) => setCustomerFilter(e.target.value)}
          />
        </label>
      </div>

      {/* Orders Table */}
      <div className="orders-table-container">
        <h2>Orders</h2>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .filter((order) => {
                const matchesStatus = statusFilter === "All" || order.status === statusFilter;
                const matchesDate =
                  (!dateRange.start || new Date(order.date) >= new Date(dateRange.start)) &&
                  (!dateRange.end || new Date(order.date) <= new Date(dateRange.end));
                const matchesCustomer = order.customer.toLowerCase().includes(customerFilter.toLowerCase());
                return matchesStatus && matchesDate && matchesCustomer;
              })
              .map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td className={`orders-status orders-${order.status.toLowerCase()}`}>{order.status}</td>
                  <td>{order.total}</td>
                  <td>
                    <button className="orders-btn orders-details-btn">View</button>
                    <button className="orders-btn orders-delete-btn">Cancel</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
