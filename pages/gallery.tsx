import React from "react";
import path from "path";
import { ImgCategory } from "../components/ImgCategory";

const fs = require("fs");
export async function getStaticProps() {
	const imageDir = path.join(process.cwd(), "/public/gallery");
	const imgCateoryNames = fs.readdirSync(imageDir, (err: Error, imgCategoryNames: string[]) => {
		return imgCategoryNames;
	});

	const props: {[key: string]: any} = {};

	for(const categoryName of imgCateoryNames){
		props[categoryName] = fs.readdirSync(imageDir + '/' + categoryName, (err: Error, imgFileNames: string[]) => {
			return imgFileNames;
		})
	}
	return { props };
}

export default function Gallery(props: {[key: string]: string[]}) {
	const categoryNames = Object.keys(props);
    return (
		categoryNames && categoryNames.map(n => {
			return (<ImgCategory categoryName={n} imgs={props[n]}/>);
		})
    );
};


