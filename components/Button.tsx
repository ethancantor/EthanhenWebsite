import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode | string;
    onClick?: Function;
}

export const Button = (props: Props) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => props.onClick ? props.onClick() : console.log('click')}>
            {props.children}
        </button>
    )
}
