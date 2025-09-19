import React from 'react'
import CustomHeading from './custom/custom-heading'
import { ArrowCircleUpRightIcon } from '@phosphor-icons/react'
import ProjectCard from './custom/ProjectCard'
import { ExternalLinkButton } from "@/components/ui/external-link-button";
import { github_profile } from '@/lib/constants';

export default function ProjectSection() {
    const data = [
        ['Placementor - College placement portal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/1.png'],
        ['Buildship - AI website builder', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/4.png'],
        ['This portfolio - Yes I built this', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/3.png'],
        ['Digilynk - Web development agency', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/2.png'],
        ['The bachelor’s Space - Hostel website ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/5.png'],
        ['Creed creations - Creative agency ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/6.png'],
    ]
    return (
        <div id="projects" className="flex flex-col space-y-4 border-b border-y-neutral-200 dark:border-y-neutral-700 text-start px-12">
            <CustomHeading className={'mx-12 text-xl font-medium tracking-wide'} heading_text={'I love building things'} />
            <div className='px-12 flex flex-col space-y-4'>
                <div className='text-start flex flex-row flex-wrap gap-2 text-neutral-600 dark:text-neutral-400'>
                    <div>Explore some of my recent projects below.</div>
                    <ExternalLinkButton href={github_profile}>
                        <em>For more, visit my GitHub profile.</em>
                    </ExternalLinkButton>
                </div>

                <div className='bg-neutral-200 dark:bg-neutral-700 w-full h-[1px]'></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
        </div>
    )
}
