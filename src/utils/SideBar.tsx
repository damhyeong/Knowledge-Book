import react from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import {Navigation} from "react-minimal-side-navigation";
import {useNavigate} from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navigation
                activeItemId={"/Knowledge-Book/Posts"}
                onSelect={({itemId}) => {
                    navigate(`/Knowledge-Book/${itemId}`);
                }}
                items={[
                    {
                        title : "Introduce",
                        itemId : "/Introduce",
                    }
                ]}
            />
        </div>
    )
}
export default SideBar