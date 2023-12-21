import react, {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {HiArrowDown, HiArrowUp} from 'react-icons/hi2'
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

    const [numOfFile, setNumOfFile] = useState<number>(0);

    useEffect(() => {
        // 파일 시스템을 이용해 Knowled-Book/Category
    }, [])

    if(!subNav){
        return (
            <div
                className={"side-menu-container"}
            >
                <div
                    className={"side-title"}
                    onClick={() => onNavigate(itemId)}
                >
                    {title}
                </div>
                <hr/>
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
                        {toggle ?  (<HiArrowUp/>) : (<HiArrowDown/>)}
                    </div>
                </div>
                <div className={"sub-menus"} hidden={!toggle}>
                    {subNav.map((item : PIFace, index) =>

                        (<SideMenu key={index} title={item.title} itemId={item.itemId} subNav={item.subNav}/>)) }
                </div>
                <hr/>
            </div>
        )
    }
}
export default SideMenu;