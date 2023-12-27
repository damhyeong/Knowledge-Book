import react, {useEffect, useState} from "react";
import Markdown from "react-markdown";
import matter from "gray-matter";
import axios from "axios";
import {useParams} from "react-router-dom";
import PostKeyword from "../PostList/PostTitleComponent/PostKeyword/PostKeyword";
import './styles.scss'

import {Buffer} from "buffer";

window.Buffer = Buffer;

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
        setMarkdownPath(`/Knowledge-Book/Posts/${category}/${postAddress}.md`);
        axios.get(`/Posts/${category}/${postAddress}.md`)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                const parsed = matter(data);
                console.log(parsed);
                setContent(parsed.content);
                setMeta(parsed.data as MetaFace);
            }).finally()
    }, [postAddress, category]);

    return (
        <div className={"post-page-container"}>
            <div className={"post-page-header"}>
                <div className={"post-title"}>
                    {meta.title}
                </div>
                <div className={"post-date"}>
                    {meta.date}
                </div>
                <div className={"post-keywords"}>
                    {meta.keyword.map((keyword, index) => <PostKeyword keyword={keyword}/>)}
                </div>
            </div>
            <hr/>
            <div className={"markdown-content"}>
                <Markdown>{content}</Markdown>
            </div>

        </div>
    )
}
export default PostPage;