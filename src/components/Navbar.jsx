import React from "react";
import { useState } from "react";
import { FaUser, FaShoppingCart, FaHeart, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; 
import { FaSearch } from "react-icons/fa";
import UsestateHook from "./UsestateHook";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const[model, setmodel]=  useState(false);
  const handleloginform = ()=>{
    setmodel(!model)
  }
  const[form, setForm ]= useState(false);
  const handleForm = ()=>{
     setForm(!form)
  }
  return (
    <>
    <nav className="navbar">
      {model  && <UsestateHook handleloginform={handleloginform}/>}
      {form && <LoginForm handleForm= {handleForm}/> }
      <div className="navbar-container">
        <Link to="/"><h1 className="logo">Botiga</h1></Link>
       
       
        <div className="search-container">
          <div className="Selectbox">
          <select className="category-select">
            <option value="Sports">All Categories</option>
            <option value="Fashion">Uncategoried</option>
            <option value="Electronics">Electronics</option>
          </select>
          </div>
         
          <div>
          <input type="text" placeholder="Search products..." className="search-input" />
          <FaSearch />
          <button className="search-button"></button>
          </div>
          
        </div>

        {/* Right Section: Icons */}
        <div className="icons-container">
          <FaUser className="icon" onClick={handleloginform} />
        
          <div className="cart-container">
            <FaShoppingCart className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="wishlist-container">
            <FaHeart className="icon" />
            <span className="badge">0</span>
          </div>
          
        </div>
      </div>

      {/* Bottom Section: Menu */}
      <div className="menu-bar">
        <div className="menu-container">
          <div className="trending">
            <span>Trending Categories</span> ▼
          </div>
          <div className="menu-links">
            
            <Link to="/"><li>Home</li></Link>
            <Link to="Shop"><li>Shop</li></Link>
            <Link to="Vendors"><li>Vendors</li></Link>
            <Link to="Blog"><li>Blog</li></Link>
            <Link to="Contact"><li>Contact</li></Link>
            {/* <Link to="UsestateHook"><li>Hook</li></Link> */}
            
            
           
          </div>
          
           {/* <button onClick={handleForm}>login</button>  */}
          <div className="phone-container">
            <FaPhone className="iconphne" />
            <span className="phone-number">800-123-4567</span>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;





