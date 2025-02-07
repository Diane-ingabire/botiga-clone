import React from "react"
import { IoMdClose } from "react-icons/io";
import '../styles/login.css';
const LoginForm =( { handleForm}) =>{
    return(
        <div className="formcontainer">
        <IoMdClose onClick={handleForm} />
        <form action="">  
            <input type="text" Placeholder="enter name"/>
            <input type="text" Placeholder="enter name"/>
            <buttorn type="login">Login</buttorn>
            </form>

        </div>
    )
}
export default   LoginForm;