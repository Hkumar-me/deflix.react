import React, { useState } from "react";
import "./App.css";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import MovieInfo from "./components/MovieInfoPage/MovieInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let title = "dewaar"
  return (
    <>
      <Routes>
        <Route path="/deflix.react/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
