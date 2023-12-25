import react, {useCallback} from "react";
import './styles.scss';
import fetch from "node-fetch";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface PIFace{
    title : string;
    date : string;
    keyword : string[];
    path : string;
}

const PostTitleComponent = ({title, date, keyword, path} : PIFace) => {
    const navigate = useNavigate();

    const onClickPost = useCallback(() => {
        console.log(path);
        navigate("/Knowledge-Book/" + path.substring(0, path.indexOf(".md")));
        /*axios.get("/" + path)
            .then(response => response.data)
            .then(data => {console.log(data)});*/
    }, [])
    return (
        <div className={"post-title-component-container"}>
            <div className={"post-title"} onClick={onClickPost}>{title}</div>
            <div className={"post-keywords"}>{keyword}</div>
            <div className={"post-date"}>{date}</div>
            <div className={"post-path"}>{path}</div>
        </div>
    )
}
export default PostTitleComponent;