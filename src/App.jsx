import React, { useState } from "react";
import "./App.css";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import MovieInfo from "./components/MovieInfoPage/MovieInfo/MovieInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/deflix.react/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:id" element={<MovieInfo />} />
        <Route path="login" element={<Login/>}></Route>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
