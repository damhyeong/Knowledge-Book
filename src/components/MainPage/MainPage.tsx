import react from 'react';
import './styles.scss';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div className={"main-page-container"}>
            <h2>Testing MainPage at src/components/Mainpage/Mainpage.tsx</h2>
            <h1><Link to={"/Introduce/"}>Introduce Link!</Link></h1>
        </div>
    )
}
export default MainPage;