import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <div className="contactPage">
        <div className="map">
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=UNITED%20KINGDOM%20+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
        </div>

        <div className="contact_content">
          <div className="left_contact">
            <h2>Leave Us a Message</h2>
            <form>
              <div className="Name">
              <label>Name </label><br/>
              <span>
              <input type="text"  className="textbox" required /> 
              <label>First</label>
              </span>
              <span>
              <input type="text" className="textbox" required />
              <label>Last</label>
              </span>
              </div>
              <div className="email">
               <label> Email</label><br/>
               <input type="email" className="eml"  required /><br/>
               <label>Comment or Message</label><br/>
               <textarea  value="value" />
               <button >Submit</button>
              </div>
              
              
            </form>
          </div>
          <div className="right_contact">
          <h2>Our Store</h2><br/>
          <p>501-521 Fashion Ave, New York, NY 10018, USA</p>
          <div className="phone">
          <p>PHONE:</p>
          <p>+1 212 244 2681</p>
          </div>
          <div className="phone">
          <p>E-MAIL:</p>
          <p>office@example.org</p>
          </div>
          <h2>Store Hours</h2>
          <div className="phone">
          <p>Sun: Closed</p>
          <p>Mon to Sat: 10 AM – 5:30 PM</p>
          </div> 
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
