import react from "react";
import {Outlet} from "react-router-dom"
import {SideBar} from "../../utils/SideBar";
import './styles.scss';


const Home = () => {
    return (
        <div className={"home-container"}>
            <div className={"side-bar"}>
                <SideBar/>
            </div>
            <div className={"content-section"}>
                <Outlet/>
            </div>
        </div>
    )
}
export default Home;