import HeaderComponent from "../../component/header/HeaderComponent";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <>
        <HeaderComponent></HeaderComponent>
        <div>
            <h1>HOME</h1>
            <p>Manage System</p>
            <Link to="/about">about....</Link>
            <div>
            <Link to="/product">Mange product...</Link>
            </div>
        </div>
        </>
    )
}

export default Home;