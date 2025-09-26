import React from 'react'

export default function CustomHeading({ heading_text, className }) {
    return (
        <div className={`px-4 relative py-2 bg-neutral-200 dark:bg-neutral-700 w-fit ${className}`}>
            <span className="dark:text-white text-xl font-medium">{heading_text}</span>
            <div className='size-1 -left-0.5 -bottom-0.5 absolute bg-black dark:bg-white rounded-full'></div>
            <div className='size-1 -right-0.5 -bottom-0.5 absolute bg-black dark:bg-white rounded-full'></div>
            <div className='size-1 -left-0.5 -top-0.5 absolute bg-black dark:bg-white rounded-full'></div>
            <div className='size-1 -right-0.5 -top-0.5 absolute bg-black dark:bg-white rounded-full'></div>
        </div>
    )
}
