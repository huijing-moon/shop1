import HeaderComponent from "../../component/header/HeaderComponent";
import {Link} from "react-router-dom";
import {Card, Container} from "react-bootstrap";

const Home = () => {
    return(
        <>
        <HeaderComponent></HeaderComponent>
            <Container>
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Header>HOME</Card.Header>
                <Card.Body>
                    <Card.Title>SHOP Manage System</Card.Title>
                    <Card.Text>
                        <Link to="/about">about....</Link>
                        <div>
                            <Link to="/product">Mange product...</Link>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            </Container>
        </>
    )
}

export default Home;