import React from "react";
import "../Dashboard/dashboard_styles/Topselling.css"; 
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





const Topselling = () => {
 
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
        <div className="shop-header1">
          <h1 className="shop-text1">Shop</h1>
      
        </div>
        <div className="shop-content1">

           
            <div className="shop_items1">
               {shops.map((myshop, index) => (
                <div key={index} className="shop_item1"> 
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
          


                

         
       
      </div>
    </div>
  </>
  ); 
};

export default Topselling;
