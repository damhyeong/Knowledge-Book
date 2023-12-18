import react from "react";
import './styles.scss';
import {Navigation} from './Navigation';

import {useNavigate} from "react-router-dom";

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
                        title : "Introduce",
                        itemId : "/introduce",
                    },
                    {
                        title : "Posts",
                        itemId : "/posts",
                        subNav : [
                            {
                                title : "Docker",
                                itemId : "/posts/docker",
                            },
                            {
                                title : "testSubNav",
                                itemId : "/posts/testing"
                            }
                        ]
                    },
                    {
                        title : "testing",
                        itemId : "/asdf"
                    }
                ]}
            />
        </div>
    )
}
export default SideBar