import React from "react";
import {Table} from "react-bootstrap";

const ProductList = props => {
    return (
        <>
            <Table>
                <thead>
                <tr>
                    <th>번호</th>
                    <th>카테고리</th>
                    <th>품번</th>
                    <th>품명</th>
                    <th>가격</th>
                    <th>등록일</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>소품</td>
                    <td>1</td>
                    <td>2023-03-01</td>
                    <td>2023-03-01</td>
                    <td>1</td>
                </tr>
                </tbody>
            </Table>
        </>
    )
}
export default ProductList;