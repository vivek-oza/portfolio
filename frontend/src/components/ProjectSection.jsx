import React from 'react'
import CustomHeading from './custom/custom-heading'
import { ArrowCircleUpRightIcon } from '@phosphor-icons/react'
import ProjectCard from './custom/ProjectCard'
import { ExternalLinkButton } from "@/components/ui/external-link-button";

export default function ProjectSection() {
    const data = [
        ['Placementor - College placement portal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/1.png'],
        ['Buildship - AI website builder', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/4.png'],
        ['This portfolio - Yes I built this', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/3.png'],
        ['Digilynk - Web development agency', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/2.png'],
        ['The bachelor\’s Space - Hostel website ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/5.png'],
    ]
    return (
        <>
            <div className='flex flex-col space-y-4 border-b border-neutral-200 dark:border-neutral-700 text-start py-12'>
                <CustomHeading className={'mx-12 text-xl font-medium tracking-wide'} heading_text={'I love building things'} />
                <div className='px-12 flex flex-row justify-start space-y-2'>
                    <div className='text-start flex flex-row space-x-2 text-neutral-600 dark:text-neutral-400'>
                        <div>Explore some of my recent projects below.</div>
                        <ExternalLinkButton>
                            <em>For more, visit my GitHub profile.</em>
                        </ExternalLinkButton>
                    </div>
                </div>

                <div className='bg-neutral-200 dark:bg-neutral-700 w-full h-[1px]'></div>

                <div className="grid grid-cols-1 md:grid-cols-2 px-12 w-full">
                    {data.map(([title, desc, image], index) => (
                        <ProjectCard
                            key={index}
                            project_title={title}
                            project_description={desc}
                            project_image={image}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
