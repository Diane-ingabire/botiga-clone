import React from "react";
import "../styles/home.css"; 
import firstimg from "../assets/firstimg.webp";
import secondimg from "../assets/secondimg.webp";
import thirdimg from "../assets/thirdimg.webp";
import fourthimg from "../assets/fourthimg.webp";
import fifthimg from "../assets/fifthimg.webp";
import sixthimg from "../assets/sixthimg.webp";
import sevenimg from "../assets/sevenimg.webp";
import eightimg from "../assets/eightimg.webp";
import nineimg from "../assets/nineimg.webp";
import tenthimg from "../assets/tenthimg.webp";
import elevenimg from "../assets/elevenimg.webp";
import twelveimg from "../assets/twelveimg.webp";
import thirteenimg from "../assets/thirteenimg.webp";
import fourteenimg from "../assets/fourteenimg.webp";

import { FaStar, FaCircle } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Home = () => {
  const categories = [
    { name: "Body Lotion", image: firstimg },
    { name: "Sports", image: secondimg },
    { name: "Computer Gadgets", image: thirdimg },
    { name: "Electronics", image: fourthimg },
    { name: "Watch", image: fifthimg },
    { name: "Women Clothes", image: sixthimg },
  ];

  const products = [
    { name: "All In One Bottle", price: "$22.00 - $55.00", image: sevenimg, rating: 3, colors: ["#8B7D6B", "#D9D9D9", "#FFFFFF"] },
    { name: "Amazon Alexa", price: "$49.00 - $69.00", image: eightimg, rating: 5, colors: ["#BEB7A4", "#FFFFFF"] },
    { name: "Headset Gamer Legion", price: "$22.00 - $55.00", image: nineimg, rating: 4, colors: ["#8B7D6B", "#D9D9D9", "#FFFFFF"] },
  ];

  const vendors = [
    { name: "Santa Monica's Store", location: "New York, NY", image: tenthimg},
    { name: "Josh Doe's Store", location: "New York, NY", image: elevenimg },
    { name: "Digital Good's Store", location: "New York, NY", image: twelveimg },
  ];
  
  const vendor1 = [
    { name: "Santa Monica's Store", location: "New York, NY", image: thirteenimg },
    { name: "Josh Doe's Store", location: "New York, NY", image: fourteenimg },
    { name: "Digital Good's Store", location: "New York, NY", image: twelveimg },
  ];

  return (
    <div className="Home">
      <div className="content">
        <div className="left_content">
          <ul>
            <li>Electronics</li>
            <li>Computer Science</li>
            <li>Fashion</li>
            <li>Body Location</li>
            <li>Sport</li>
            <li>Women Clothes</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>

        <div className="right_content">
          <h2>
            Explore our latest and <br /> greatest electronics
          </h2>
          <div className="button">
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>

      <br />
      <h1>Popular Categories</h1>
      <div className="image_container">
        {categories.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} style={{ width: "160px", height: "160px", padding: "1%", margin: "1%" }} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      <br />
      <h1>New Arrival Products</h1>
      <div className="products_container">
        {products.map((product, index) => (
          <div key={index} className="product_card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>

            <div className="star">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} style={{ color: i < product.rating ? "gold" : "grey" }} />
              ))}
            </div>

            <div className="Circle">
              {product.colors.map((color, i) => (
                <FaCircle key={i} style={{ color, marginRight: "5px" }} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button>SHOP NOW</button>
      </div>

      <br />
      <h1>Our Vendor List</h1>
      <div className="vendor_container">
        {vendor1.map((vendor, index) => (
          <div key={index} className="vendor_card">
            <img src={vendor.image} alt={vendor.name} />
            <div className="vendor">
            <h3>{vendor.name}</h3>
            <p>{vendor.location}</p>
            <div className="arrow">
            <IoIosArrowDroprightCircle />
            </div>
            
            </div>
         
           
          </div>
        ))}
      </div>
     <br/>
      <div className="vendor_container">
        {vendors.map((vendor, index) => (
          <div key={index} className="vendor_card">
            <img src={vendor.image} alt={vendor.name} />
            <div></div>
            <h3>{vendor.name}</h3>
            <p>{vendor.location}</p>
            <div className="arrow">
            <IoIosArrowDroprightCircle />
            </div>
            
           
          </div>
        ))}
         <div className="button">
        <button>SEE ALL VENDORS</button>
      </div>

      <br/>
      </div>
     
      
    </div>
    
  );
};

export default Home;
