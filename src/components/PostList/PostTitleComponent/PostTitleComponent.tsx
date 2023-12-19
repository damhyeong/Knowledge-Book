import react from "react";
import './styles.scss';

interface PIFace{
    key : number;
    title : string;
    date : string;
    keyword : string[];
}

const PostTitleComponent = ({key, title, date, keyword} : PIFace) => {
    return (
        <div>

        </div>
    )
}
export default PostTitleComponent;