import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import ProductMain from "./page/product/ProductMain";
import {Route, Router} from "react-router-dom";
import ProductView from "./page/product/ProductView";

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
      <div>
          <ProductMain/>

      </div>

  );
}

export default App;