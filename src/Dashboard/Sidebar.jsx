import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard_styles/Sidebar.css";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";

const Sidebar = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isOverviewDropdownOpen, setIsOverviewDropdownOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="logo_header">
        <h2 className="logo">Botiga</h2>
      </div>

      <div
        onClick={() => setIsOverviewDropdownOpen(!isOverviewDropdownOpen)}
        className="dropdown-toggle1"
      >
       <AiOutlineHome /> Dashboard 
      </div>

      {isOverviewDropdownOpen && (
  <div className="submenu">
  <div className="item ai"><Link to="/dashboard">OverView</Link></div>
  <div className="item crm"><Link to="/Orders">Orders</Link></div>
  <div className="item ecommerce"><Link to="/Sales_Summary">Sales Summary</Link></div>
  <div className="item cryptocurrency"><Link to="/Topselling">Top Selling Products</Link></div>
  <div className="item investment"><Link to="/category/investment">Investment</Link></div>

</div>

     
      )}

      <p className="menu-heading">Application</p>
      <div className="menu-item"><MdOutlineBorderColor /><Link to="/ProductManagement" className="mylink">Manage Products</Link></div>
      <div className="menu-item"><FaShoppingCart /><Link to="/vendors" className="mylink">Vendors</Link></div>

      <div
        onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
        className="dropdown-toggle"
      >
        Manage Products
      </div>
      {isProductDropdownOpen && (
        <div className="submenu">
          <div><Link to="/products/transported">Transported</Link></div>
          <div><Link to="/products/in-process">In Process</Link></div>
          <div><Link to="/products/delivered">Delivered</Link></div>
        </div>
      )}

      <div className="downapp">
        <div className="menu-item"><AiOutlineMail /> <Link to="/Email" className="mylink">Email</Link></div>
        <div className="menu-item"><IoChatbubbleEllipsesOutline /><Link to="/messages" className="mylink">Messages</Link></div>
        <div className="menu-item"><CiSettings /><Link to="/settings" className="mylink">Settings</Link></div>
      </div>
    </div>
  );
};

export default Sidebar;
