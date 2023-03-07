import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import ProductMain from "./page/product/ProductMain";
import {Link, Route, Router, Routes} from "react-router-dom";
import HeaderComponent from "./component/header/HeaderComponent";
import Home from "./page/basic/Home";
import About from "./page/basic/About";
import ProductCreateView from "./page/product/ProductCreateView";
import './App.css';
import ProductDetailView from "./page/product/ProductDetailView";
import ProductList from "./page/product/ProductList";
function App() {

  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductMain />} />
          <Route path="/product/list" element={<ProductList />} />
          <Route path="/product/create" element={<ProductCreateView />} />
          <Route path="/product/detail/:productId" element={<ProductDetailView />} />
      </Routes>
  );
}

export default App;