import React, { useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  let menuRef = useRef(null);

  let handleMenu = ()=>{
    menuRef.current.style.top="0";
  }
  return (
    <nav>
      <div ref={menuRef} className="menu">
      </div>
      <div className="nlogo">
        <img src="images/logo.png" alt="logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <h2 onClick={handleMenu}>Menu +</h2>
      <div className="navLinks">
        {["Home", "Movies"].map((element, index) => {
          return <Link id={index}  to="/deflix.react/home">{element}</Link>;
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
