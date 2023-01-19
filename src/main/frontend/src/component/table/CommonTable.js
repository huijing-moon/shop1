import React from "react";
import {Table} from "react-bootstrap";

const CommonTable = props => {

    const {headerName, children} =props;

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                {
                    headerName.map((item, index) =>{
                        return (
                            <td key ={index}>{item}</td>
                        )
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                children
            }
            </tbody>
        </Table>
    )
}

export default CommonTable;
