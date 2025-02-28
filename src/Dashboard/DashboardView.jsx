import React, { PureComponent } from "react";
import { FaStoreAlt } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import user from "../assets/user.png";

import "./dashboard_styles/DashboardView.css";


const cardsData = [
  {
    id: 1,
    title: " Sales",
    description: "Building scalable web applications.",
    image: "https://via.placeholder.com/150",
    color: "#DFEEF4",
    icon:<FaStoreAlt />,
  },
  {
    id: 2,
    title: "Orders",
    description: "Creating user-friendly interfaces.",
    image: "https://via.placeholder.com/150",
    color: "#BEEDEE",
    icon: <MdOutlineBorderColor />,
  },
  {
    id: 3,
    title: "Customers",
    description: "Tracking and optimizing performance.",
    image: "https://via.placeholder.com/150",
    color: "#C0E0F2",
    icon: <FaPeopleGroup />,
  },
  {
    id: 4,
    title: "Vendors",
    description: "Configuring and customizing systems.",
    image: "https://via.placeholder.com/150",
    color: "#9BD5EF",
    icon: <BsPeopleFill />,
  },
];


const salesData = [
  { name: "Week 1", sales: 10000 },
  { name: "Week 2", sales: 15000 },
  { name: "Week 3", sales: 12000 },
  { name: "Week 4", sales: 18000 }
];

const bestSellingProducts = [
  { name: "Electronics", sales: 120 },
  { name: "Fashion", sales: 95 },
  { name: "Body lotion", sales: 75 },
  { name: "Shoes", sales: 60 }
];


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


export default class DashboardView extends PureComponent {
  render() {
    return (
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div className="cards-container">
      {cardsData.map((card) => (
        <div className="card" key={card.id} style={{ backgroundColor: card.color }}>
          <div className="micon">{card.icon}<br/>
          <button>View More</button>
          </div>
          <div className="mword">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          </div>
         
          
        </div>
      ))}
    </div>
            <div className="middleView">
            <div className="chart-container-view1">
            <h2>Sales Trends</h2>
          <select className="view_selectbox">
            <option>Today</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
          <ResponsiveContainer width="70%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>

         


        </div>
           <div className="right_sideview">
           <div className="right_sideview_up">
            <h2>Revenue</h2>
           </div>
           <div className="right_sideview_down">
           <p>$500,000</p>
           </div>
           </div>

           

            </div>

            


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

    
<div className="chart-container-view2">
          <h2>Best-Selling Products</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bestSellingProducts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#5a54f4" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      

       
      </div>
    );
  }
}