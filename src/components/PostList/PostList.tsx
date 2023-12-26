import react, {useEffect, useState} from "react";
import './styles.scss'
import {useParams} from "react-router-dom";
import PostTitleComponent from "./PostTitleComponent/PostTitleComponent";
import axios from "axios";

interface MetaFace{
    title : string;
    date : string;
    keyword : string[];
    path : string;
}

interface PathIFace{
    [key : string] : MetaFace | PathIFace[];
}

/** 해당 카테고리에 어떤 포스트가 있는지 column으로 보여준다.
 *  단, Docker, Spring 등 한 차례의 Directory 후 Markdown 파일이 위치해야 한다.
 *  추후, useParams를 사용해서 '/'를 토큰으로 분류하여 접속할 수 있도록 해야 함. -> 블로그 기능 구현
 * */
const PostList = () => {
    const {category} = useParams();
    const [metaList, setMetaList] = useState<MetaFace[]>([]);

    useEffect(() => {
        axios.get("/Knowledge-Book/Posts/PathData.json").then((response) => {

            const data : PathIFace = response.data; // Docker, Spring 데이터

            // const fileNames : string[] = Object.keys(data);
            const fileNames : string[] = Object.keys(data[category as string]); // [1_Docker..., 2_Docker...];

            const innerContent = data[category as string]; // Docker 정보 가져옴. { 1_md : { ... } , 2_md : { ... } }

            const nextMetaList : MetaFace[] = [];


            while(fileNames.length > 0){
                const filename = fileNames.pop() as string;

                // @ts-ignore
                const MdFile = innerContent[filename] as MetaFace;

                const info : MetaFace = {
                    title : MdFile.title as string,
                    date : MdFile.date as string,
                    keyword : MdFile.keyword as string[],
                    path : MdFile.path as string,
                }
                nextMetaList.push(info);
            }

            setMetaList(nextMetaList);
        })

    }, [category]);


    return (
        <div className={"post-list-container"}>
            <div className={"list-center-container"}>
                {metaList.map((meta, index) =>
                    <PostTitleComponent key={index} title={meta.title} date={meta.date} keyword={meta.keyword} path={meta.path}/>
                )}
            </div>
        </div>
    )
}
export default PostList;