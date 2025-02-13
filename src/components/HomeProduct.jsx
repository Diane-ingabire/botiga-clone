import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { data } from "react-router-dom";
import "../styles/HomeProduct.css";

const HomeProduct = () => {
    const { register, handleSubmit } = useForm();

    const send =(data) => {
        const { productTitle, images, productPrice, productContent } = data;
        const formData = new FormData();

        formData.append('productTitle', productTitle);
        formData.append('images', images[0]); 
        formData.append('productPrice', productPrice);
        formData.append('productContent', productContent);

        try {
            const results =axios.post(`https://botiga-kvf9.onrender.com/product/createProduct`,formData,
                {
                    headers:{
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            
        } catch (error) {
            console.log( error);
        }
    }

    return (
        <div className="container">
            <form className="forms" onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="Product Title" {...register("productTitle", { required: true })} /><br />
                <input type="file" {...register("images", { required: true })} /><br />
                <input type="text" placeholder="Product Content" {...register("productContent", { required: true })} /><br />
                <input type="text" placeholder="Product Price" {...register("productPrice", { required: true })} /><br />
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default HomeProduct;
