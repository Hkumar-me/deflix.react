import React from "react";
import "./Login.css";
import Button from "../Buttons/Button";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <div className="login-top">
            <h1>Welcome Back!</h1>
            <div className="lt-inputs flex">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="rem-pass flex ">
              <div className="flex items-center justify-center">
                <input type="checkbox" name="rememberMe" />
                <label htmlFor="rememberMe" className="text-black font-normal">Remember me</label>
              </div>
              <h2 className="font-bold text-black underline cursor-pointer">Forgot Password?</h2>
            </div>
            <div className="login-btn">
            <Button value={"Sign In"} />
            </div>
          </div>
          <div className="login-bottom">
            <div className="lb-part1">
              <p className="text-black font-normal">Or sign in with</p>
              <div className="login-options">
                <a href="#"><img src="./images/googleLogo.png" alt="" width="200px"/></a>
              </div>
            </div>
            <div className="lb-part2">
              <h2 className="text-black font-normal">First Time Here?</h2>
              <h2 className="font-bold text-black underline cursor-pointer">Create Account</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
