import React from "react";
import "../styles/vendors.css";

import tenthimg from "../assets/tenthimg.webp";
import elevenimg from "../assets/elevenimg.webp";
import twelveimg from "../assets/twelveimg.webp";
import thirteenimg from "../assets/thirteenimg.webp";
import fourteenimg from "../assets/fourteenimg.webp";
import { VscListFilter } from "react-icons/vsc";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { VscThreeBars } from "react-icons/vsc";

const Vendors = () => { 
    const vendor = [
        { id: 2, name: "Jessica's Store", city: "New York", country: "United States", rate: 5, image: tenthimg, profile: tenthimg },
        { id: 3, name: "Santa Monica's Store", city: "New York", country: "United States", rate: 5, image: elevenimg, profile: elevenimg },
        { id: 4, name: "Digital Good's Store", city: "New York", country: "United States", rate: 5, image: twelveimg, profile: twelveimg },
        { id: 5, name: "The Glass Store", city: "New York", country: "United States", rate: 5, image: thirteenimg, profile: thirteenimg },
        { id: 6, name: "The Glass Store", city: "New York", country: "United States", rate: 5, image: fourteenimg, profile: fourteenimg },
    ];

    return (
        <>
            <div className="mystore">
                <div><h1 className="store_header">Store Lists</h1></div>

                {/* Store Banner */}
                <div className="store_banner">
                    <p>Total stores showing: {vendor.length} </p>
                    <div className="store_banner_right">
                        <button className="filter"> <VscListFilter />   Filter   </button>
                        <span>  Sort by:  </span>
                        <select className="sort-dropdown">
                            <option>Most Recent</option>
                            <option>Highest Rated</option>
                        </select>   <span className="banner_icons">   <HiMiniSquares2X2 />   <VscThreeBars /> </span> 
                    </div>
                </div>
                <br/>

               
                
                 
                
            </div>
        </>
    );
}

export default Vendors;
