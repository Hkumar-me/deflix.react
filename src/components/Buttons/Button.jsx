import React, { useRef, useState } from "react";
import "./Button.css"

function Button({value}) {

  let btnRef = useRef(null);

  function handleBtnHoverOnE() {
   btnRef.current.style.color = '#fff';
   btnRef.current.style.setProperty('--before-width', '100%')
  }

  function handleBtnHoverOnL() {
   btnRef.current.style.color = '#171717';
   btnRef.current.style.setProperty('--before-width', '0%')
  }

  let [btnStyle, setBtnStyle] = useState({});



  return (
    <>
      <button
        ref={btnRef}
        className="button"
        style={{
          width: "fit-content",
          padding: "10px 20px",
          backgroundColor: "#fff",
          color: "#171717",
          borderRadius:"50px",
          border:"2px solid white"


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
