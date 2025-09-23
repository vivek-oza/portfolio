import React from 'react';
import CustomHeading from './custom/custom-heading';
import ProjectCard from './custom/ProjectCard';
import { ExternalLinkButton } from "@/components/ui/external-link-button";
import { github_profile } from '@/lib/constants';
import toast from 'react-hot-toast';

export default function ProjectSection() {
    const showProjectToast = (e) => {
        e.preventDefault();
        
        toast('Coming soon! Working on it...', {
            duration: 3000,
            position: 'bottom-right',
            style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
                padding: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            },
        });
    };

    const data = [
        ['Placementor - College placement portal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/1.png'],
        ['Buildship - AI website builder', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/4.png'],
        ['This portfolio - Yes I built this', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/3.png'],
        ['Digilynk - Web development agency', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/2.png'],
        ['The bachelor’s Space - Hostel website ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/5.png'],
        ['Creed creations - Creative agency ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend interdum ullamcorper. Morbi vehicula tellus sit amet nibh dictum iaculis. Suspendisse ac dictum turpis, nec iaculis mi.', '/projects/6.png'],
    ]
    return (
        <div id="projects" className=" flex flex-col space-y-4 border-b border-y-neutral-200 dark:border-y-neutral-700 text-start py-12">
            <CustomHeading className={'mx-12 text-xl font-medium tracking-wide'} heading_text={'I love building things'} />
            <div className='flex flex-col space-y-4'>
                <div className='px-12 text-start flex flex-row flex-wrap gap-2 text-neutral-600 dark:text-neutral-400'>
                    <div>Explore some of my recent projects below.</div>
                    <ExternalLinkButton 
                        href={github_profile}
                        onClick={showProjectToast}
                    >
                        <em>For more, visit my GitHub profile.</em>
                    </ExternalLinkButton>
                </div>

                <div className='bg-neutral-200 dark:bg-neutral-700 w-full h-[1px]'></div>

                <div className="px-12 grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
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
