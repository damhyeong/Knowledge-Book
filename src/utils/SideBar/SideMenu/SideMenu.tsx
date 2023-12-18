import react, {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './styles.scss'

interface PIFace {
    title : string;
    itemId : string;
    subNav? : PIFace[];
}

const SideMenu = ({title, itemId, subNav} : PIFace) => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState<boolean>(false);


    const onNavigate = useCallback((itemId : string) => {
        navigate(`/Knowledge-Book${itemId}`);
    }, []);

    const onToggle = useCallback(() => {
        setToggle(!toggle);
    }, [toggle]);

    if(!subNav){
        return (
            <div
                className={"side-menu-container"}
            >
                <div
                    className={"side-title"}
                    onClick={() => onNavigate(itemId)}
                >
                    {title} 마지막
                </div>
            </div>
        )
    } else {
        return (
            <div className={"side-menu-container"}>
                <div className={"side-title"} onClick={onToggle}>
                    <div className={"title-text"}>
                        {title}
                    </div>
                    <div className={"show-button"}>
                        {toggle ?  ("^") : ("v")}
                    </div>
                </div>
                <div className={"sub-menus"} hidden={!toggle}>
                    {subNav.map((item : PIFace) =>

                        (<SideMenu title={item.title} itemId={item.itemId} subNav={item.subNav}/>)) }
                </div>
            </div>
        )
    }
}
export default SideMenu;