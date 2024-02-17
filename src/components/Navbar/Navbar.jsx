import React, { useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  let menuRef = useRef(null);
  let flag = 0;
  let handleMenu = () => {
    if (flag === 0) {
      menuRef.current.style.top = "0%";
      flag = 1;
    } else {
      menuRef.current.style.top = "-100%";
      flag = 0;
    }
  };
  return (
    <>
     
      <nav>
        <div className="nlogo">
          <img src="images/logo.png" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <h2 onClick={handleMenu} className="menuIcon">
          Menu +
        </h2>
        <div className="navLinks">
          {["Home", "Movies"].map((element, index) => {
            return (
              <Link id={index} to="/deflix.react/home">
                {element}
              </Link>
            );
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
        <div ref={menuRef} className="menu">
          <div className="menu-links">
          <div className="links1">
          {["Home", "Movies"].map((element, index) => {
            return (
              <Link id={index}  to="/deflix.react/home">
                <h2>{element}</h2>
              </Link>
              
            );
          })}
          </div>
          <div className="menuBtns">
            <button className="menuBtn upBtn">
              Sign Up
            </button>
            <button className="menuBtn inBtn">
              Sign In
            </button>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
