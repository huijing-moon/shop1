import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

function HeaderComponent() {

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">♡ALKONG♡</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">home</Nav.Link>
                    <Nav.Link href="#home">features</Nav.Link>
                    <Nav.Link href="#home">pricing</Nav.Link>

                </Nav>
            </Container>

        </Navbar>
    )
}

export default HeaderComponent;