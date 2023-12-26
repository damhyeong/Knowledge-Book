import react, {useEffect, useState} from "react";
import './styles.scss';
import SideMenu from "../SideMenu/SideMenu";
import axios from "axios";

interface Item {
    title : string;
    itemId : string;
    subNav? : Item[];
}


interface PIFace{
    activeItemId : string; // 기본 주소
    onSelect : (itemId : string) => void; // 기본 주소 + props로 전해진 itemId를 더한 주소로 이동.
    items : Item[]; // 사이드바에 클릭 할 메뉴 혹은 카테고리들.
}

const Navigation = ({activeItemId, onSelect, items} : PIFace) => {
    const [pathData, setPathData] = useState({});

    useEffect(() => {
        axios.get("/Knowledge-Book/Posts/PathData.json").then((response) => {
            console.log(response.data);
            console.log(response.data);
            setPathData(response.data);
        })
    }, []);

    return (
        <div className={"navigation-container"}>
            {
                items.map((item : Item, index) =>
                    <SideMenu key={index} title={item.title} itemId={item.itemId} subNav={item.subNav}/>
                )
            }
        </div>
    )
}
export default Navigation;