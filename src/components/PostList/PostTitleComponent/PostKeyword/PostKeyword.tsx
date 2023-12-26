import react from "react";
import './styles.scss'

interface PIFace{
    keyword : string;
}

const PostKeyword = ({keyword} : PIFace) => {
    return (
        <div className={"post-keyword-container"}>
            <div className={"keyword-border"}>
                <div className={"keyword-text"}>
                    {keyword}
                </div>
            </div>
        </div>
    )
}
export default PostKeyword;