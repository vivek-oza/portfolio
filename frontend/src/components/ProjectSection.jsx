import React from 'react';
import CustomHeading from './custom/custom-heading';
import ProjectCard from './custom/ProjectCard';
import { ExternalLinkButton } from "@/components/ui/external-link-button";
import { github_profile } from '@/lib/constants';
import toast from 'react-hot-toast';
import { ExternalButton } from './custom/external-button';

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

    const projects = [
        {
            title: 'Placementor - College Placement Portal',
            description: 'A comprehensive platform connecting students with companies for campus placements. Features include resume building, job postings, and interview scheduling.',
            image: '/projects/1.png',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind CSS'],
            github_url: 'https://github.com/vivek-oza/placementor',
            live_url: 'https://placementor-demo.vercel.app'
        },
        {
            title: 'Buildship - AI Website Builder',
            description: 'A no-code platform that uses AI to generate responsive websites from natural language descriptions. Includes drag-and-drop editing and custom domain support.',
            image: '/projects/4.png',
            technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
            github_url: 'https://github.com/vivek-oza/buildship',
            live_url: 'https://buildship-ai.vercel.app'
        },
        {
            title: 'Portfolio Website',
            description: 'My personal portfolio website built with modern web technologies to showcase my projects, skills, and experience in an interactive and visually appealing way.',
            image: '/projects/3.png',
            technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'Shadcn/UI'],
            github_url: 'https://github.com/vivek-oza/portfolio',
            live_url: 'https://vivekoza.vercel.app'
        },
        {
            title: 'Digilynk - Web Development Agency',
            description: 'A modern website for a digital marketing and web development agency, featuring service showcases, case studies, and client testimonials.',
            image: '/projects/2.png',
            technologies: ['React', 'Gatsby', 'GraphQL', 'Styled Components', 'Contentful'],
            github_url: 'https://github.com/vivek-oza/digilynk',
            live_url: 'https://digilynk.agency'
        },
        {
            title: 'The Bachelor\'s Space - Hostel Management',
            description: 'A platform for students to find and book hostels, with features like virtual tours, roommate matching, and online rent payment.',
            image: '/projects/5.png',
            technologies: ['React Native', 'Firebase', 'Redux', 'Stripe', 'Google Maps API'],
            github_url: 'https://github.com/vivek-oza/bachelors-space',
            live_url: 'https://bachelors-space.web.app'
        },
        {
            title: 'Creed Creations - Creative Agency',
            description: 'A dynamic portfolio website for a creative agency specializing in branding, web design, and digital marketing services.',
            image: '/projects/6.png',
            technologies: ['Vue.js', 'Nuxt.js', 'GSAP', 'Three.js', 'Sass'],
            github_url: 'https://github.com/vivek-oza/creed-creations',
            live_url: 'https://creedcreations.agency'
        }
    ];
    return (
        <div id="projects" className=" flex flex-col space-y-4 border-b border-y-neutral-200 dark:border-y-neutral-700 text-start py-12">
            <CustomHeading className={'mx-12 text-xl font-medium tracking-wide'} heading_text={'I love building things'} />
            <div className='flex flex-col space-y-4'>
                <div className='px-12 text-start flex flex-row flex-wrap gap-2 text-neutral-600 dark:text-neutral-400'>
                    <div>Explore some of my recent projects below.</div>
                    <ExternalButton
                        href={github_profile}
                        onClick={showProjectToast}
                    >
                        <em>For more, visit my GitHub profile.</em>
                    </ExternalButton>
                </div>

                <div className='bg-neutral-200 dark:bg-neutral-700 w-full h-[1px]'></div>

                <div className="px-12 grid grid-cols-1 md:grid-cols-1 gap-3 w-full">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project_title={project.title}
                            project_description={project.description}
                            project_image={project.image}
                            technologies={project.technologies}
                            github_url={project.github_url}
                            live_url={project.live_url}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
