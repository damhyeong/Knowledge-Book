import react, {useEffect, useState} from "react";
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
    [key : string] : MetaFace | PathIFace;
}

/** 해당 카테고리에 어떤 포스트가 있는지 column으로 보여준다. */
const PostList = () => {
    const {postAddress} = useParams();
    const [pathData, setPathData] = useState<PathIFace>();
    const [metaList, setMetaList] = useState<MetaFace[]>([]);
    const rootPath : string = "/Posts/"

    useEffect(() => {
        axios.get("/Posts/PathData.json").then((response) => {
            setPathData(response.data);
            console.log(response.data);

            const data : PathIFace = response.data;
            console.log("data : " + data);

            const fileNames : string[] = Object.keys(data);
            console.log("fileNames : " + fileNames);


            const nextMetaList : MetaFace[] = [];

            while(fileNames.length > 0){
                const filename = fileNames.pop() as string;
                console.log("filename:" + filename);
                const MdFile = data[filename];
                console.log("MdFile");
                console.log(MdFile);

                const info : MetaFace = {
                    title : MdFile.title as string,
                    date : MdFile.date as string,
                    keyword : MdFile.keyword as string[],
                    path : MdFile.path as string,
                }
                nextMetaList.push(info);
            }

            // for(let filename : string in fileNames){ // pathData 안의 key를 순회한다.
            //     console.log("fileName : " + filename);
            //     const info : MetaFace = {
            //         title : data[filename].title as string,
            //         date : data[filename].date as string,
            //         keyword : data[filename].keyword as string[],
            //         path : data[filename].path as string,
            //     }
            //     nextMetaList.push(info);
            // }

            setMetaList(nextMetaList);
        }).then()
        console.log(postAddress);


    }, []);

    return (
        <div className={"post-list-container"}>
            {metaList.map((meta, index) =>
                <PostTitleComponent key={index} title={meta.title} date={meta.date} keyword={meta.keyword} path={meta.path}/>
            )}

        </div>
    )
}
export default PostList;