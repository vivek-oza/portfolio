import React from 'react'

export default function ProjectCard(projectData) {
    return (
        <>
            <div className='flex flex-col justify-center items-center space-y-4 px-12 py-8'>
                <div className='text-2xl text-white'>{projectData.project_title}</div>
                <div className='text-neutral-600 dark:text-neutral-400 text-center max-w-[500px] w-full'>{projectData.project_description}</div>
                <div> <img src={projectData.project_image} className='max-w-[500px] w-full rounded' alt={projectData.project_title} /> </div>
            </div>
        </>
    )
}
