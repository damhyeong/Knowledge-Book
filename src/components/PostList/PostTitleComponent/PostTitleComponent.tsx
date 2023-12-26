import react, {useCallback} from "react";
import './styles.scss';
import {useNavigate} from "react-router-dom";
import PostKeyword from "./PostKeyword/PostKeyword";

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
    }, [path])
    return (
        <div className={"post-title-component-container"}>
            <div className={"post-title"} onClick={onClickPost}>{title}</div>
            <div className={"post-keywords"}>
                {keyword.map(
                    (keyword, index) => <PostKeyword key={index} keyword={keyword}/>
                )}
            </div>
            <div className={"post-date"}>{date}</div>
            <hr/>
        </div>
    )
}
export default PostTitleComponent;