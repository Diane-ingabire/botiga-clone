import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./Home";
import "../styles/singlecard.css"

function Singlecard() {
    const { id } = useParams();
    const product = products.find((product) => product.id == id);

    return (
        <div className="single_contaijner">
            <img src={product.image} alt={product.name} />
            <div className="right"><h2>{product.name}</h2>
            <div className="Description"><p>{product.Description}</p></div>
            </div>
            
            <div></div>
        </div>
    );
}

export default Singlecard;
