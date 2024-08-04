import Image from 'next/image';
import React, { ReactNode, useState } from 'react'
import { folder, file } from '../icons/icons.index';

interface Props {
    name: string;
    isFolder?: boolean;
    children?: ReactNode;
}

function FileNode(props: Props) {
    const { name, isFolder, children } = props;

    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <div className='cursor-pointer'>
            <div className='flex flex-row'>
                <Image height={50} width={50} src={isFolder ? folder : file} alt={name} onClick={() => setExpanded(!expanded)}/>
                <div className='pt-4 ps-1'>{name}</div>
            </div>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out 
                    ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`
                }
                >
                <div className='overflow-hidden'>
                    <div className='ms-10'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileNode
