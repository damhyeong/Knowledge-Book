import react, {useEffect, useState} from "react";
import './styles.scss';
import {Navigation} from './Navigation';

import {useNavigate} from "react-router-dom";
import axios from "axios/index";

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <div className={"side-bar-container"}>
            <Navigation
                activeItemId={"/Knowledge-Book"}
                onSelect={(itemId) => {
                    navigate(`/Knowledge-Book${itemId}`);
                }}
                items={[
                    {
                        title : "Main",
                        itemId : "/",
                    },
                    {
                        title : "Introduce",
                        itemId : "/introduce",
                    },
                    {
                        title : "Posts",
                        itemId : "/Posts",
                        subNav : [
                            {
                                title : "Docker",
                                itemId : "/Posts/Docker",
                            },
                            {
                                title : "Spring",
                                itemId : "/Posts/Spring"
                            }
                        ]
                    },
                ]}
            />
        </div>
    )
}
export default SideBar