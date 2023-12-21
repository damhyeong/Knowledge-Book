import react from "react";
import './styles.scss';

interface PIFace{
    title : string;
    date : string;
    keyword : string[];
    path : string;
}

const PostTitleComponent = ({title, date, keyword, path} : PIFace) => {
    return (
        <div>
            <div>{title}</div>
            <div>{date}</div>
            <div>{keyword}</div>
            <div>{path}</div>
        </div>
    )
}
export default PostTitleComponent;