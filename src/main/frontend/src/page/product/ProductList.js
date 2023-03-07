import React, {useEffect, useState} from "react";
import {Badge, Button, Container, NavLink, Table} from "react-bootstrap";
import CommonTable from "../../component/table/CommonTable";
import CommonTableRow from "../../component/table/CommonTableRow";
import CommonTableCoulumn from "../../component/table/CommonTableCoulumn";
import HeaderComponent from "../../component/header/HeaderComponent";
import axios from "axios";
import {BrowserRouter, Link, Route, useNavigate} from "react-router-dom";

function ProductList (props) {

    const baseUrl = "http://localhost:8080"

    const [product, setProduct] = useState(null);


    console.log(props)

    const getProduct= async () =>{
        setProduct(null);
        await axios
            .get(baseUrl + "/page/product/list")
            .then((response) => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    useEffect(() => {
        getProduct();
    },[]);


    if(!product) return null;


    return (

        <>
            <HeaderComponent></HeaderComponent>
            <h5>
                상품목록   <Badge pill bg="dark">New</Badge>
            </h5>
            <div>
                <Link to="/product/create"><Button>상품 등록 </Button></Link>
            </div>

            <Container>
            <CommonTable headerName={['품번', '품명','카테고리','설명', '가격', '등록일','수정일','관리']}>
                {product.map(products => (
                <CommonTableRow>
                    <CommonTableCoulumn key={products.productId}>{products.productId}</CommonTableCoulumn>
                    <CommonTableCoulumn>{products.productNm}</CommonTableCoulumn>
                    <CommonTableCoulumn>{products.category}</CommonTableCoulumn>
                    <CommonTableCoulumn>{products.description}</CommonTableCoulumn>
                    <CommonTableCoulumn>{products.price}</CommonTableCoulumn>
                    <CommonTableCoulumn key={products.created}>{products.created}</CommonTableCoulumn>
                    <CommonTableCoulumn>{products.modified}</CommonTableCoulumn>
                    <CommonTableCoulumn><Link to={{pathname:`/product/detail/${products.productId}`}}>
                        <Button>관리</Button></Link></CommonTableCoulumn>
                </CommonTableRow>
                ))}
            </CommonTable>
            </Container>

        </>
    )

}
export default ProductList;