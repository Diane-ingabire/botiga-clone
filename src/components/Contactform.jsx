import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../styles/HomeProduct.css";

const Contactform = () => {
    const { register, handleSubmit } =useForm();

    const send = async (data) => {
        const { names, email, subject, message } = data;
        const formData = new FormData();

        formData.append("names", names);
        formData.append("email", email);
        formData.append("subject", subject);
        formData.append("message", message);

        try {
            const results = await axios.post("https://botiga-kvf9.onrender.com/contact/createContact", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            
        } catch (error) {
            
        }
    };

    return (
        <div className="container">
            <form className="forms" onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="names" {...register("names", { required: true })} /><br />
                <input type="text" placeholder="email" {...register("email", { required: true })} /><br />
                <input type="text" placeholder="subject" {...register("subject", { required: true })} /><br />
                <textarea placeholder="message" {...register("message", { required: true })}></textarea><br />
                <button type="submit">Contact Us</button>
            </form>
        </div>
    );
};

export default Contactform;
