import react, {useEffect, useState} from "react";
import marked from "marked";
import matter from "gray-matter";
import {MarkdownMeta} from "../../types/interface";
import axios from "axios";
import {useParams} from "react-router-dom";

const PostPage = () => {
    const [content, setContnet] = useState<string>('');
    const [meta, setMeta] = useState({});
    const {postAddress, category} = useParams();
    const [markdownPath, setMarkdownPath] = useState('');

    useEffect(() => {
        setMarkdownPath(`/Posts/${category}/${postAddress}.md`);
        console.log("postAddress : " + postAddress);
        console.log("category : " + category)

    }, []);
    useEffect(() => {
        console.log(markdownPath);
        axios.get(`/Posts/${category}/${postAddress}.md`)
            .then(response => response.data)
            .then(data => {console.log(data)})
    }, []);

    return (
        <div>
            {markdownPath}
        </div>
    )
}
export default PostPage;