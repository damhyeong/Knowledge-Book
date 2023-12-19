import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * dfs 방식으로 json에 정보를 추가하는 식으로 해야 한다.
 *
 * 상위 폴더 : {하위 폴더, ...} -> 즉시 재귀호출 -> 하위 폴더 : {.md, ...} 파일 이런 식으로.
 *
 * 폴더와 마크다운 파일명은 전부 string이다.
 * .md 파일 또한 마지막이 아니며, {title : string, date : string, keyword : string[]}을 가지게 한다.
 * ```
 * example.md : {
 *     title,
 *     date,
 *     keyword,
 *     path,
 * }
 * ```
 * */

export const getPostListInformation = async (root = "") => {
    const rootPath = "Posts/" // public 폴더부터 시작.
    const nextMetaList = {};

    await fs.readdirSync((rootPath + root)).forEach((file) => {
        if(path.extname(file) === ".md"){ // 디렉토리가 아니므로, 재귀의 마지막이다.
            // .md파일의 메타 정보를 읽은 후, metaList에 넣는다.
            fetch(file).then(response => response.text())
                .then(text => {
                    const parsed = matter(text);
                    const meta = parsed.data;
                    nextMetaList.push(meta);
                })
        } else { // 디렉토리이므로, 재귀호출한다.

        }
    });

    return nextMetaList;
}
