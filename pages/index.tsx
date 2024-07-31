import React from "react";
import path from "path";
import { ImgCategory } from "../components/ImgCategory";
import fs from "fs";
import { useSession } from "next-auth/react";
import LoginButton from "@/components/LoginButton";

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

	const { data: session, status } = useSession();
	console.log(session);

    return (
		<div className="bg-gray-950">
			<LoginButton />
			{categoryNames && categoryNames.map(n => {
				return (<ImgCategory categoryName={n} imgs={props[n]} key={n}/>);
			})}
		</div>
    );
};


