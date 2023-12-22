import react, {useCallback} from "react";
import './styles.scss';

interface PIFace{
    title : string;
    date : string;
    keyword : string[];
    path : string;
}

const PostTitleComponent = ({title, date, keyword, path} : PIFace) => {

    const onClickPost = useCallback(() => {

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