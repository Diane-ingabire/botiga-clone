import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import user from "../assets/user.png"
import "./dashboard_styles/DashboardView.css";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;
    return (
      <text x={x} y={y} dy={-10} fill={stroke} fontSize={12} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class DashboardView extends PureComponent {
  render() {
    return (
      <div className="dashboard-container">
        <h1>Dashboard</h1>

        {/* Cards Section */}
        <div className="cards-container">
          <div className="card">
            <h3>Total Sales</h3>
            <p>50,000</p>
          </div>
          <div className="card">
            <h3>Orders</h3>
            <p>1,245</p>
          </div>
          <div className="card">
            <h3>Active Users</h3>
            <p>785</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$120,000</p>
          </div>
        </div>

        <div className="chart-container">
          <h2>Overview</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ top: 40, right: 30, left: 50, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" height={50} tick={<CustomizedAxisTick />} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h2>Sales</h2>
          <ResponsiveContainer width="50%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" fill="#5a54f4" />
              <Bar dataKey="pv" fill="#808080" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        
        <div className="table-container">
        <h2>Latest Vendor</h2>
          <table className="chart-container">
          
            <thead>
              <tr>
                <th>User</th>
                <th>Registered On</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> <span><img src={user}/></span>John Doe</td>
                <td>2025-02-10</td>
                <td>Active</td>
              </tr>
              <tr>
                <td><span><img src={user}/></span>Jane Smith</td>
                <td>2025-02-09</td>
                <td>Expired</td>
              </tr>
              <tr>
                <td><span><img src={user}/></span>Alex Brown</td>
                <td>2025-02-08</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

