import react from "react";

interface PIFace {
    title : string;
    itemId : string;
    onSelect : (itemId : string) => void;
    subNav? : PIFace[];
}

const SideMenu = ({title, itemId, onSelect, subNav} : PIFace) => {
    const isLast : boolean = (subNav ===  undefined); // 하위 메뉴가 없는 마지막 메뉴일 경우, Link를 활성화 시키기 위함임.

    if(isLast){
        return (
            <div
                className={"side-menu-container"}
                onClick={() => onSelect(itemId)}
            >
                <div className={"side-title"}>
                    {title}
                </div>
            </div>
        )
    } else {
        return (
            <div className={"side-menu-container"}>
                <div>
                    <div className={"side-title"}>
                        {title}
                    </div>
                    <div>
                        // isToggle 속성을 넣어 여기에 ^ 혹은 v 버튼을 넣는다.
                    </div>
                </div>
                <div className={"subMenus"}>

                </div>
            </div>
        )
    }
}