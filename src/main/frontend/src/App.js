import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import ProductMain from "./page/product/ProductMain";
import {Link, Route, Router, Routes} from "react-router-dom";
import HeaderComponent from "./component/header/HeaderComponent";
import Home from "./page/basic/Home";
import About from "./page/basic/About";
function App() {
  // const [hello, setHello] = useState('')
  //
  // useEffect(() => {
  //   axios.get('/')
  //       .then(response => setHello(response.data))
  //       .catch(error => console.log(error))
  // }, []);

  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductMain />} />
      </Routes>
  );
}

export default App;