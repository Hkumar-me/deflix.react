import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nlogo">
        <img src="images/logo.png" alt="logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navLinks">
        {["Home", "Movies"].map((element, index) => {
          return <a id={index} href="#">{element}</a>;
        })}
      </div>
      <div className="logBtns">
        <a key="0" className="btn btn-signUp" href="#">
          Sign Up
        </a>
        <a key="1" className="btn btn-signIn" href="#">
          Sign In
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
