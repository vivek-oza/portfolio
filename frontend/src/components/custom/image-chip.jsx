import React from 'react'

export default function ImageChip({ image_src, image_alt, image_title, className }) {
    return (
        <div className='inline-block m-2 cursor-pointer group'>
            <div className={`${className} relative flex justify-between items-center flex-row hover:bg-neutral-200 dark:hover:bg-neutral-800 space-x-3 rounded p-1 border border-neutral-500 dark:border-neutral-700 w-fit h-fit transition-all duration-300`}>
                <div>
                    <img className='w-[32px] rounded aspect-square' src={image_src} alt={image_alt} />
                </div>
                <div>
                    {image_title}
                </div>
                {/* Corner Borders */}
                <div className="absolute inset-0 border-1 border-transparent group-hover:border-neutral-300 dark:group-hover:border-neutral-600 transition-all duration-300 rounded">
                    <div className="absolute -top-[1.5px] -left-[1.5px] w-2 h-2 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -top-[1.5px] -right-[1.5px] w-2 h-2 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-[1.5px] -left-[1.5px] w-2 h-2 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-[1.5px] -right-[1.5px] w-2 h-2 border-b-2 border-r-2 border-neutral-400 dark:border-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>
        </div>
    )
}
