import FileNode from '@/components/FileManager/FileNode'
import React from 'react'
import path from "path";
import fs from "fs";
import { folder } from '@/components/icons/icons.index';

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

    console.log(fileTree);

    return (
        <FileNode name='test' isFolder><FileNode name='test2' isFolder/></FileNode>
    )
}

export default Files
