import FileNode from '@/components/FileManager/FileNode'
import React from 'react'
import path from "path";
import fs from "fs";
import { FILE_TYPE } from '@/types/filetypes';

export async function getStaticProps() {
	const filesDir = path.join(process.cwd(), "/public/files");

    function readAllFiles(dir: string): string | object {
        const files = fs.readdirSync(dir, { withFileTypes: true });
        let tree = [];
        for (const file of files) {
            if (file.isDirectory()) {
                const children: object | string = readAllFiles(path.join(dir, file.name));
                tree.push({folder: file.name, children: children});
            } else {
                tree.push(file.name);
            }
        }   
        return tree;
    }

	const fileTree = readAllFiles(filesDir);
    const props = {fileTree};
	return { props };
}

interface Props {fileTree: {[key: string]: any}}

function Files(props: Props) {
    const { fileTree } = props;

    function jsonToFile(f: FILE_TYPE) {
        if(f.folder){
            return <FileNode name={f.folder + " " + f.children.length} isFolder> {f.children.map((c: any) => jsonToFile(c))}</FileNode>
        } else {
            console.log(f);
            return <FileNode name={f.toString()} />
        }
    }

    return (
        fileTree && fileTree.map((f: FILE_TYPE) => {
            return jsonToFile(f);
        })
    )
}

export default Files
