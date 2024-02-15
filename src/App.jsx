import Navbar from "./components/Navbar/Navbar";
import React, { useState } from "react";
import MainSlider from "./components/MainSlider/MainSlider";
import Contents from "./components/Contents/Contents";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {


  return (
    <>
      <main>
        <div id="main" >
          <Navbar />
          <MainSlider />
          <Contents/>
        </div>
          <Footer />
      </main>
    </>
  );
}

export default App;
