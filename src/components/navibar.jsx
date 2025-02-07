import React from "react";
import "../styles/navbar.css";
const navibar = () =>{
 const[form, setForm ]= useState(false);
 const handleForm = ()=>{
    setForm(!form)
 }
 return(
<>
<section className="navigation">
    {form && <LoginForm handleForm= {handleForm}/> }
</section>
<div><button onClick={handleForm}></button>
</div>

</>
 )
}
export default navibar;