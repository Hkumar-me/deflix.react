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
          return <a id={index} href="#" >{element}</a>;
        })}
      </div>
      <div className="logBtns">
        <a className="btn btn-signUp" href="#">
          Sign Up
        </a>
        <a className="btn btn-signIn" href="#">
          Sign In
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
