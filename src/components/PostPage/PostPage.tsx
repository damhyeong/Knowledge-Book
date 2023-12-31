import react, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";

import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
//import {dark} from "react-syntax-highlighter/dist/esm/styles/prism";
import {a11yDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import {github} from "react-syntax-highlighter/dist/esm/styles/hljs";

import matter from "gray-matter";
import axios from "axios";
import {useParams} from "react-router-dom";
import PostKeyword from "../PostList/PostTitleComponent/PostKeyword/PostKeyword";
import './styles.scss'

import {Buffer} from "buffer";
import React from "react";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Markdown from "react-markdown";

window.Buffer = Buffer;

interface MetaFace{
    title : string;
    date : string;
    keyword : string[];
}

const PostPage = () => {
    const [content, setContent] = useState<string>('');
    const [meta, setMeta] = useState<MetaFace>({
        title : 'asdf',
        date : '',
        keyword : [''],
    });
    const {postAddress, category} = useParams();

    /* 아래 코드는 jekyll 환경에서 production 될 경우, .md 파일이 아닌, 파일 명으로만 info를 가져와야 할 경우 쓴다.
    const isProduction = process.env.NODE_ENV === 'production';
    const fileExtension = isProduction ? '' : '.md';
    const path = `/Knowledge-Book/Posts/${category}/${postAddress}${fileExtension}.md`;*/
    const path = `/Knowledge-Book/Posts/${category}/${postAddress}.md`;

    const [markdownPath, setMarkdownPath] = useState('');

    useEffect(() => {
        setMarkdownPath(`/Knowledge-Book/Posts/${category}/${postAddress}`);
        axios.get(path)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                const parsed = matter(data);
                console.log(parsed);
                setContent(parsed.content);
                setMeta(parsed.data as MetaFace);
            });
    }, []);

    useEffect(() => {

    }, [meta]);

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
                    {meta.keyword.map((keyword, index) => <PostKeyword key={index} keyword={keyword}/>)}
                </div>
            </div>
            <hr/>
            <div className={"markdown-body"}>
                <ReactMarkdown
                    children={content}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code(props) {
                            const {children, className, node, ...rest} = props
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                                <SyntaxHighlighter
                                    {...rest}
                                    PreTag="div"
                                    children={String(children).replace(/\n$/, '')}
                                    language={match[1]}
                                    style={a11yDark}
                                    ref={undefined}
                                />
                            ) : (
                                <code {...rest} className={className}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                />
            </div>
        </div>

    )
}
export default PostPage;