import react, {useEffect, useState} from "react";
import marked from "marked";
import matter from "gray-matter";
import {MarkdownMeta} from "../../types/interface";
import axios from "axios";
import {useParams} from "react-router-dom";

const PostPage = () => {
    const [content, setContnet] = useState<string>('');
    const [meta, setMeta] = useState({});
    const {postAddress} = useParams();
    const [markdownPath, setMarkdownPath] = useState('');

    useEffect(() => {
        setMarkdownPath(`/Posts/${postAddress}.md`)

        axios.get(markdownPath as string)
            .then(response => response.data)
            .then(data => {console.log(data)})
    }, []);
    useEffect(() => {

    }, []);

    return (
        <div>
            asdf
        </div>
    )
}
export default PostPage;