import React from "react";
import "../css/home.css";
import pic from '../pic1.png'
import pic2 from '../pic2.jpg'
import pic3 from '../Pic3.jpg'
import { NavLink } from "react-router-dom";

const Home = ({ account }) => {
  return (
    <div className="container">
      <div id="login-type-container">
        <h1 style={{ color: "white", position: "fixed", right: 8, top: 2 }}>
          Wallet Address : 
          {account.substring(0, 6) +
            "....." +
            account.substring(account.length - 4, account.length)}
        </h1>
        <br />
        <div id="login-type">
          <h1 id="greetings">Fake Product Identification!</h1>
          <h1 id="subtitle-txt">
            This is just for testing purpose
          </h1>
          <div id="options-container">
            <NavLink to="/vendor" className="select-link">
              <div className="options">
                <img
                  src={pic}
                  alt="manufacturer"
                  className="options-image"
                />
                <h1 className="options-image-caption">Manufacturer Login</h1>
              </div>
            </NavLink>
            <NavLink to="/distributorform" className="select-link">
              <div className="options">
                <img
                  src={pic2}
                  alt="manufacturer"
                  className="options-image"
                />
                <h1 className="options-image-caption">Register Distributor</h1>
              </div>
            </NavLink>
            <NavLink to="/authenticate" className="select-link">
              <div className="options">
                <img
                  src={pic3}
                  alt="manufacturer"
                  className="options-image"
                />
                <h1 className="options-image-caption">Scanner</h1>
              </div>
            </NavLink>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
