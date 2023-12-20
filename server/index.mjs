import fs from "fs/promises";
import path from "path";
import {dirname, join} from "path";

import {fileURLToPath} from "url";
import matter from "gray-matter";
import fetch from "node-fetch";

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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getPostListInformation = async (rootPath = "Posts/", root = "") => {
    const returnThing = {};

    await fs.readdirSync((rootPath + root)).forEach((file) => {
        console.log(file);

        /*if(path.extname(file) === ".md"){ // 디렉토리가 아니므로, 재귀의 마지막이다.
            // .md파일의 메타 정보를 읽은 후, metaList에 넣는다.
            fetch(file).then(response => response.text())
                .then(text => {
                    const parsed = matter(text);
                    const meta = parsed.data;
                    const returnInfo = {
                         [file] : {
                            title : meta.title,
                            date : meta.date,
                            keyword : meta.keyword,
                        }
                    }

                })
        } else { // 디렉토리이므로, 재귀호출한다.

        }*/
    });

    return nextMetaList;
}
/*

const testGetPostListInformation = async (rootPath = "../public/Posts/") => {
    const metaFileList = {};

    await fs.readdirSync((rootPath)).forEach((file) => {
        console.log("file : " + file); // 경로명이 포함되지 않은 파일명(확장자 포함됨).

        if(path.extname(file) === ".md"){ // 디렉토리가 아니므로, 재귀의 마지막이다.
            // .md파일의 메타 정보를 읽은 후, metaList에 넣는다.
            let content;
            fs.readFile(rootPath + "/" + file, "utf8", (err, data) => {
                console.log("err : " + err);
                console.log("data" + data);
                // content = data;
                const parsed = matter(data);
                const meta = parsed.data;
                const transPath = rootPath.substring(rootPath.indexOf("Posts")) + "/" + file;
                metaFileList[file] = {
                    title : meta.title,
                    date : meta.date,
                    keyword : meta.keyword,
                    path : transPath
                }
            });

        }else{ // 디렉토리이므로, 재귀호출한다.
            metaFileList[file] = testGetPostListInformation(rootPath + file + "/");
        }
    });
    return metaFileList;
}

const pathData = await testGetPostListInformation().then((response) =>{
    console.log("response");
    console.log(response);
});
*/

async function testGetPostListInformation(rootPath = "../public/Posts/") {
    const metaFileList = {};
    const files = await fs.readdir(rootPath);

    for (const file of files) {
        const fullPath = path.join(rootPath, file);
        const stat = await fs.stat(fullPath);

        if (stat.isFile() && path.extname(file) === ".md") {
            const content = await fs.readFile(fullPath, 'utf8');
            const parsed = matter(content);
            const meta = parsed.data;
            const transPath = fullPath.substring(fullPath.indexOf("Posts"));

            metaFileList[file] = {
                title: meta.title,
                date: meta.date,
                keyword: meta.keyword,
                path: transPath
            };
        } else if (stat.isDirectory()) {
            metaFileList[file] = await testGetPostListInformation(fullPath);
        }
    }

    return metaFileList;
}
async function main() {
    const pathData = await testGetPostListInformation();
    console.log(pathData);

    // JSON 파일로 저장
    const jsonFilePath = path.join(__dirname, '../public/Posts/PathData.json');
    await fs.writeFile(jsonFilePath, JSON.stringify(pathData, null, 2));
    console.log('PathData.json has been saved!');
}

main();