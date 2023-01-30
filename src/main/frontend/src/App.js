import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import ProductMain from "./page/product/ProductMain";
import {Link, Route, Router, Routes} from "react-router-dom";
import HeaderComponent from "./component/header/HeaderComponent";
import Home from "./page/basic/Home";
import About from "./page/basic/About";
import ProductView from "./page/product/ProductView";
import './App.css';
function App() {

  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductMain />} />
          <Route path="/product/create" element={<ProductView />} />
      </Routes>
  );
}

export default App;