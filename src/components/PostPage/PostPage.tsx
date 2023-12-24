import react, {useEffect, useState} from "react";
import Markdown from "react-markdown";
import matter from "gray-matter";
import {MarkdownMeta} from "../../types/interface";
import axios from "axios";
import {useParams} from "react-router-dom";

interface MetaFace{
    title : string;
    date : string;
    keyword : string[];
}

const PostPage = () => {
    const [content, setContent] = useState<string>('');
    const [meta, setMeta] = useState<MetaFace>({
        title : '',
        date : '',
        keyword : [''],
    });
    const {postAddress, category} = useParams();
    const [markdownPath, setMarkdownPath] = useState('');

    useEffect(() => {
        setMarkdownPath(`/Posts/${category}/${postAddress}.md`);
        axios.get(`/Posts/${category}/${postAddress}.md`)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                const parsed = matter(data);
                setMeta(parsed.data as MetaFace);
                setContent(parsed.content);
                //setContent(marked(parsed.content))
                console.log(parsed.data);
                console.log(parsed.content);
            }).catch(error => console.error('error fetching markdown : ', error))
    }, [postAddress, category, content]);

    return (
        <div>
            <div>
                {markdownPath}
            </div>
            <div>

            </div>
            <Markdown>{content}</Markdown>
        </div>
    )
}
export default PostPage;