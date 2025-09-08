import React from 'react'

export default function ImageChip({ image_src, image_alt, image_title }) {
    return (
        <div className='inline-block m-2 cursor-pointer'>
            <div className='flex justify-between items-center flex-row hover:bg-neutral-200 dark:hover:bg-neutral-800 space-x-3 rounded p-1 border border-neutral-800 w-fit h-fi' >
                <div>
                    <img className='size-8 rounded' src={image_src} alt={image_alt} />
                </div>
                <div>
                    {image_title}
                </div>

            </div >
        </div >
    )
}
