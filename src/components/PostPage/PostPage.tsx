import react, {useEffect, useState} from "react";
import Markdown from "react-markdown";
import matter from "gray-matter";
import * as marked from 'marked';
import {Buffer} from "buffer";
import {MarkdownMeta} from "../../types/interface";
import axios from "axios";
import {useParams} from "react-router-dom";

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
        setMarkdownPath(`/Posts/${category}/${postAddress}.md`);
        axios.get(`/Posts/${category}/${postAddress}.md`)
            .then(response => response.data)
            .then(data => {
                console.log(data);

                const parsed = matter(data);
                console.log(parsed);
                setContent(parsed.content);
                setMeta(parsed.data as MetaFace);

            }).finally()
    }, [postAddress, category, content]);

    return (
        <div>
            <div>
                {markdownPath} - velog 보고 하자.
            </div>
            <div>
                <Markdown>{content}</Markdown>
            </div>

        </div>
    )
}
export default PostPage;