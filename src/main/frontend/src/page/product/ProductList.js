import React, {useEffect} from "react";
import {Table} from "react-bootstrap";
import CommonTable from "../../component/table/CommonTable";
import CommonTableRow from "../../component/table/CommonTableRow";
import CommonTableCoulumn from "../../component/table/CommonTableCoulumn";
import HeaderComponent from "../../component/header/HeaderComponent";
import axios from "axios";

function ProductList () {
    const baseUrl = "http://localhost:8080"
    // const [product] = useState();


    useEffect(() => {
        getProduct();
    },[]);

    async function getProduct(){
        await axios
            .get(baseUrl + "/page/product/list")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) =>{
                console.log(error);
            })
    }


    return (
        <>
            <HeaderComponent></HeaderComponent>
            <CommonTable headerName={['번호', '카테고리','품번','품명', '가격', '등록일']}>
                <CommonTableRow>
                    <CommonTableCoulumn>1</CommonTableCoulumn>
                    <CommonTableCoulumn>소품</CommonTableCoulumn>
                    <CommonTableCoulumn>3423497</CommonTableCoulumn>
                    <CommonTableCoulumn>머그컵</CommonTableCoulumn>
                    <CommonTableCoulumn>25.0</CommonTableCoulumn>
                    <CommonTableCoulumn>2022-01-22</CommonTableCoulumn>
                </CommonTableRow>
                <CommonTableRow>
                    <CommonTableCoulumn>2</CommonTableCoulumn>
                    <CommonTableCoulumn>소품</CommonTableCoulumn>
                    <CommonTableCoulumn>3423497</CommonTableCoulumn>
                    <CommonTableCoulumn>jkhjhkjh</CommonTableCoulumn>
                    <CommonTableCoulumn>25.0</CommonTableCoulumn>
                    <CommonTableCoulumn>2022-01-22</CommonTableCoulumn>
                </CommonTableRow>
            </CommonTable>
        </>
    )
}
export default ProductList;