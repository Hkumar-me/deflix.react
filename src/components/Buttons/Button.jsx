import React, { useRef, useState } from "react";
import "./Button.css"

function Button({value}) {

  let btnRef = useRef(null);

  function handleBtnHoverOnE() {
   btnRef.current.style.color = '#FE5B4A';
   btnRef.current.style.setProperty('--before-opacity', 1)
  }

  function handleBtnHoverOnL() {
   btnRef.current.style.color = '#fff';
   btnRef.current.style.setProperty('--before-opacity', 0)
  }

  // let [btnStyle, setBtnStyle] = useState({});



  return (
    <>
      <button
        ref={btnRef}
        className="button"
        style={{
          width: "fit-content",
          padding: "10px 20px",
          backgroundColor: "#FE5B4A",
          color: "#fff",
          borderRadius:"50px"


        }}
        onMouseEnter={handleBtnHoverOnE}
        onMouseLeave={handleBtnHoverOnL}
      >
       {value}
      </button>
    </>
  );
}

export default Button;
