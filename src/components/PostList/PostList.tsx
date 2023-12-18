import react, {useState} from "react";
import PostTitleComponent from "./PostTitleComponent/PostTitleComponent";
import fs from "fs"; // 직접 마크다운 파일을 읽어 메타정보를 List화 시켜야 한다.
import {useParams} from "react-router-dom";
import "../../../src/"

interface MetaFace{
    title : string;
    date : string;
    keyword : string[];
}

/** 해당 카테고리에 어떤 포스트가 있는지 column으로 보여준다. */
const PostList = () => {
    const params = useParams();
    const [metaList, setMetaList] = useState();
    const rootPath : string = "../"

    return (
        <div className={"post-list-container"}>
            <PostTitleComponent key={} title={} date={} keyword={}/>
        </div>
    )
}
export default PostList;