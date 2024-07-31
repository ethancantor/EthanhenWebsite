import React from 'react'
import LoginButton from './LoginButton'
import MyLink from './MyLink';

export default function Header() {

    return (
        <header className="bg-gray-900 mb-5 absolute w-screen overflow-x-hidden">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
                <MyLink href='/'>Home</MyLink>
                <MyLink href="gallery">Gallery</MyLink>
                <MyLink href="files">Files</MyLink>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <LoginButton />
                </div>
            </nav>
        </header>
    )
}
