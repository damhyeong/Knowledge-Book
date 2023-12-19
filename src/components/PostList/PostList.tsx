import react, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PostTitleComponent from "./PostTitleComponent/PostTitleComponent";
import fs from 'fs' // 직접 마크다운 파일을 읽어 메타정보를 List화 시켜야 한다.
import matter from 'gray-matter';
import path from "path";

interface MetaFace{
    title : string;
    date : string;
    keyword : string[];
}

/** 해당 카테고리에 어떤 포스트가 있는지 column으로 보여준다. */
const PostList = () => {
    const {postAddress} = useParams();
    const [metaList, setMetaList] = useState<MetaFace[]>([]);
    const rootPath : string = "/Posts/"

    useEffect(() => {
        const nextMetaList : MetaFace[] = [];
        console.log(rootPath + postAddress);

        // server Folder의 함수 사용. -> src/ 폴더 내부에서 fs, path와 같은 시스템을 건드리는 함수를 쓸 수 없음.

        setMetaList(nextMetaList);
    }, []);

    return (
        <div className={"post-list-container"}>
            {metaList.map((meta, index) =>
                <PostTitleComponent key={index} title={meta.title} date={meta.date} keyword={meta.keyword}/>
            )}

        </div>
    )
}
export default PostList;