import react, {useEffect, useState} from 'react';
import './styles.scss';
import {Link} from "react-router-dom";
import {SideBar} from "../../utils/SideBar/index"
import reactLogo from "./ImageSrc/logo512.png"
import fetch from "node-fetch";
import axios from 'axios';

const MainPage = () => {

    return (
        <div className={"main-page-container"}>

            <div className={"source-container"}>
                <div className={"text-container"}>
                    <h2>Ready To Show My Site By Making React.ts</h2>
                    <img className={"react-icon"} src={reactLogo} alt={"react-icon"}/>
                    <h1><Link to={"/Knowledge-Book/introduce"}>Introduce Link!</Link></h1>
                </div>
            </div>

        </div>
    )
}
export default MainPage;