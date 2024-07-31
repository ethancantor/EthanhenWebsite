import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

interface Props {
    href: string;
    className?: string;
    children: ReactNode
}

function MyLink(props: Props) {
    let {href, className, children} = props;

    const path = usePathname();
    console.log(path, href);

    if(!className) className = `text-sm font-semibold leading-6 me-16 ${path === (`/${href}`) || path === href ? 'text-orange-500' : 'text-white'}`;

    return (
        <Link href={href} className={className}>{children}</Link>
    )
}

export default MyLink
