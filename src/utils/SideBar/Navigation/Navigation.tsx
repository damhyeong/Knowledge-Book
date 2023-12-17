import react from "react";
import './styles.scss';
import SideMenu from "../SideMenu/SideMenu";

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

    return (
        <div className={"side-bar-container"}>
            {
                items.map((item : Item) => (
                    <SideMenu title={item.title} itemId={item.itemId} onSelect={onSelect}/>
                ))
            }
        </div>
    )
}
export default Navigation;