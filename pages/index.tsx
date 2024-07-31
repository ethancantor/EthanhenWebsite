import React from "react";

export default function Home() {

    return (
		<div className="bg-gray-950 flex-1 w-screen lg:mx-0 lg:flex-auto justify-center lg:text-center flex h-screen">	
			<div className='m-auto'>
				<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">ethanhen.com</h2>
				<p className="mt-6 text-lg leading-8 text-gray-300">Designed by Ethan Cantor.</p>
				<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
					<a href="gallery" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Gallery</a>
					<a href="files" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Files </a>
				</div>
			</div>
		</div>
    );
};


