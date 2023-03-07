import React, {useCallback, useEffect, useState} from "react";
import {Badge, Button, Container, Form, InputGroup} from "react-bootstrap";
import axios from "axios";
import HeaderComponent from "../../component/header/HeaderComponent";
import Swal from 'sweetalert2';
import {useParams} from "react-router-dom";


function ProductDetailView (props) {

    const baseUrl = "http://localhost:8080"
    const [values, setValues]= useState(
        {
            productNm :"",
            price :"",
            description :"",
            category :"",
        }
    )

    const params = useParams();
    console.log('params====' + params)

    const productId = params.productId
    console.log(productId)

    useEffect(()=> {
        const fetchPost = async ()=> {
            let res = await axios
                .get(baseUrl + "/page/product/view/" + productId)
                .then((response) => {
                    setValues(response.data);
                })
        }
        fetchPost();

        }, []);

    const onChange= (e) => {
        const {name, value} = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }


    const onReset= ()=>{
        setValues({
            productNm :"",
            price :"",
            description :"",
            category :"",
        })
    }



const saveQuestion= (e) => {
        e.preventDefault();
        Swal.fire({
            title: '저장하시겠습니까?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '등록'
        }).then((result) => {
                axios.post('http://localhost:8080/page/product/save',
                    {
                        productNm :values.productNm,
                        price :values.price,
                        description :values.description,
                        category :values.category,
                    },
                    {
                        headers: {
                            'Content-type': 'application/json',
                            'Accept': 'application/json'
                        }
                    }
                )
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((response) => {
                        console.log('Error!')
                    });
            }

        )
    }

    console.log('values===='+values);
    console.log('values===='+values);


    return (
        <>
            <HeaderComponent></HeaderComponent>
            <h5>
                상품등록 <Badge pill bg="dark">New</Badge>
            </h5>
            <Container>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>상품명</Form.Label>
                        <Form.Control
                            type="text"
                            id="productNm"
                            name="productNm"
                            value={values.productNm}
                            onChange={onChange}
                            placeholder="상품명을 입력해주세요"/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>카테고리</Form.Label>
                        <Form.Control
                            type="text"
                            id="category"
                            name="category"
                            value={values.category}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>상품 가격</Form.Label>
                        <Form.Control
                            type="number"
                            id="price"
                            name="price"
                            value={values.price}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>상품 설명</Form.Label>
                        <Form.Control
                            type="textarea"
                            id="description"
                            name="description"
                            value={values.description}
                            onChange={onChange}
                        />
                    </Form.Group>
                </Form>
            </Container>
            <Button variant="light" onClick={onReset}>초기화</Button>
            <Button variant="light">목록</Button>
            <Button onClick={saveQuestion} > 저장</Button>
        </>
    )
}
export default ProductDetailView;
