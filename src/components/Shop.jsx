import React from "react";
import "../styles/shop.css"; 
import shop55 from "../assets/shop55.webp";
import shop4 from "../assets/shop4.webp";
import shop6 from "../assets/shop6.webp";
import shop7 from "../assets/shop7.webp";
import shop8 from "../assets/shop8.webp";
import eightimg from "../assets/eightimg.webp";
import sevenimg from "../assets/sevenimg.webp";
import shop9 from "../assets/shop9.webp";

import { FaCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { Bs1CircleFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";



const Shop = () => {
 
  const shops = [
    { name: "All In One Bottle", Price:"$22.00 - $55.00" , image: eightimg , rating:3  },
    { name: "All In One Bottle", Price:"$22.00 - $55.00" , image: sevenimg, rating:5  },
    { name: "All In One Bottle", Price:"$22.00 - $55.00" , image: shop9, rating:4   },
    { name: "All In One Bottle", Price:"$22.00 - $55.00" , image: shop4, rating:5   },
    { name: "All In One Bottle", Price:"$22.00 - $55.00" , image: shop55, rating:5   },
    { name: "All In One Bottle", Price:"$22.00 - $55.00" , image: shop6, rating:5   },
    { name: "All In One Bottle", Price:"$22.00 - $55.00" , image: shop7, rating:5   },
    { name: "All In One Bottle", Price:"$22.00 - $55.00" , image: shop8, rating:4   },
    { name: "All In One Bottle", Price:"$22.00 - $55.00" , image: shop9, rating:5   },
  ]
  
  
  

  return (
  <>
    <div>
        <div className="shop-header">
          <h1 className="shop-text">Shop</h1>
      
        </div>
        <div className="shop-content">
          <div className="left-shop-content">
            <div className="list">
              <h3>Categories</h3>
            <ul>
            <li>Body Lotion (1)</li>
            <li>Computer Gadget(3)</li>
            <li>Electronics (5)</li>
            <li>Fashion (3)</li>
            <li>General (1)</li>
            <li>Shoes (2)</li>
            <li>Sport (3)</li>
            <li>Watch (1)</li>
            <li>Women Clothes (3)</li>
           </ul>
           <br/><br/>
           <hr style={{ color:"#dddddd" }}/>
            </div>
            <br/>
            <div className="list2">
              <h3>Color</h3><br/>
              <FaCircle style={{ color: "#A3A3A3", fontSize: "30px" }} />
              <FaCircle style={{ color: "#a27a5c", fontSize: "30px"}} />
              <FaCircle style={{ color: "#dddddd", fontSize: "30px"}} />
              <FaCircle style={{ color: "grey", fontSize: "30px"}} />
              <br/><br/><hr style={{ color:"#dddddd" }}/>
            </div>
            <br/>
            <div className="list3">
              <h3>Rating</h3>
              <div className="Rating">
                <div><span style={{color:"#ffa441"}}> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>(8)</div>
                <div> <span style={{color:"#ffa441"}}><FaStar /><FaStar /><FaStar /><FaStar /></span> <span style={{color:"#dddddd"}} ><FaStar /></span>(4)</div>
                <div><span style={{color:"#ffa441"}}><FaStar /><FaStar /><FaStar /></span> <span style={{color:"#dddddd"}} ><FaStar /><FaStar /></span>(1)</div>
                <br/><br/><hr style={{ color:"#dddddd" }}/>
              </div>
            </div><br/>
            <div  className="list4">
              <h3>Price</h3>
              <FaCircle/> <FaCircle/><br/>
              <div className="list4_textbox">
              <input type="text " placeholder="$0" className="list4_textbox1"/>
              <input type="text " placeholder="$79" className="list4_textbox2"/>
              </div>
              
            </div>
          </div>
          
          <div className="right-shop-content">
           <div className="right-shop-content-top">
              <p>Showing 1–9 of 13 results</p>
              <select className="select-box">
              <option >Default Sorting</option>
              <option >Sort by popularity</option>
              <option >Sort by average rating</option>
              <option >Sort by latest</option>
              <option >Sort by price: low to high</option>
              <option >Sort by price: high to low</option>
             </select>  <FaListUl />  <BsGrid3X3GapFill />
            </div>
            <hr/>
            <div className="shop_items">
               {shops.map((myshop, index) => (
                <div key={index} className="shop_item"> 
                 <img src={myshop.image} alt={myshop.name} />
                  <h3>{myshop.name}</h3>
                  <p>{myshop.Price}</p> 
                  <div className="stars">
                {[...Array(5)].map((_,i)=>
                (<FaStar key={i} color={i < myshop.rating ? "#ffa441" : "#dddddd"}/>

                )
                )}

              </div>
              <div className="circles">
                {[...Array(5)].map((_,i)=>
                (<FaCircle key={i} color={i < myshop.rating ? "#ffa441" : "#dddddd"}/>

                )
                )}

              </div>
                </div> 
             ))}
            
            </div>
            <div className="shop_last_icon">
              <h3>Price</h3>
            <Bs1CircleFill />  <Bs2CircleFill /> <BsArrowRight />
            </div>


                

          </div>
           
       
      </div>
    </div>
  </>
  ); 
};

export default Shop;
