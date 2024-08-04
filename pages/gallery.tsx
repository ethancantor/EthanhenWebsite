import React from "react";
import path from "path";
import fs from "fs";
import Header from "@/components/Header";
import { ImgCategory } from "../components/ImgCategory";

export async function getStaticProps() {
	const imageDir = path.join(process.cwd(), "/public/gallery");
	const imgCateoryNames = fs.readdirSync(imageDir);

	const props: {[key: string]: any} = {};

	for(const categoryName of imgCateoryNames){
		props[categoryName] = fs.readdirSync(imageDir + '/' + categoryName);
	}
	return { props };
}

export default function Gallery(props: {[key: string]: string[]}) {
	const categoryNames = Object.keys(props);

    return (
        <div className="flex flex-col border border-white w-screen h-screen">
            <Header />
            <div className="bg-gray-950 mt-20 overflow-x-hidden">
                {categoryNames && categoryNames.map(n => {
                    return (<ImgCategory categoryName={n} imgs={props[n]} key={n} />);
                })}
            </div>
        </div>
    );
};


