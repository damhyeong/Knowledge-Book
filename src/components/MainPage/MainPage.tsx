import react from 'react';
import './styles.scss';
import {Link} from "react-router-dom";
import SideBar from '../../utils/SideBar/SideBar'

const MainPage = () => {
    return (
        <div className={"main-page-container"}>
            <div className={"side-bar"}>
                <SideBar/>
            </div>
            <div className={"source-container"}>
                <div className={"text-container"}>
                    <h2>Testing MainPage at src/components/Mainpage/Mainpage.tsx</h2>
                    <h1><Link to={"/Knowledge-Book/introduce"}>Introduce Link!</Link></h1>
                </div>
            </div>

        </div>
    )
}
export default MainPage;