import react, {useEffect, useState} from "react";
import marked from "marked";
import matter from "gray-matter";
import {MarkdownMeta} from "../../types/interface";

const PostPage = () => {
    const [content, setContnet] = useState<string>('');
    const [meta, setMeta] = useState({});

    //
    useEffect(() => {

    }, []);
}