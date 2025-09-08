import React from 'react'
import CustomHeading from './custom/custom-heading'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'

export default function AboutSection() {
    return (
        <div className='flex flex-col space-y-4 border-b border-y-neutral-200 dark:border-y-neutral-700 text-start px-12'>
            <div className='flex flex-row flex-wrap md:flex-nowrap   space-x-8'>
                <div className='py-12 flex flex-col space-y-8'>
                    <CustomHeading className={"text-xl font-medium tracking-wide"} heading_text={'Something about me'} />
                    <div className="flex flex-col space-y-4 text-neutral-600 dark:text-neutral-400">
                        <div className='text-3xl dark:text-white'>Hey! I'm Vivek</div>
                        <div>
                            A passionate software developer with a love for building clean, functional web applications. I thrive on solving problems and continuously learning new technologies across the full stack.
                            When I'm not coding, I'm probably learning about the next tech trend or planning my next project.
                            <br />
                            <br />
                            <em> Always open to new challenges and connections! </em>
                            Let's build something amazing together.
                        </div>
                    </div>
                    <div className='flex flex-row items-center space-x-6'>
                        <a href="#" className='flex flex-row group items-center space-x-2 relative text-neutral-700 dark:text-neutral-300'>
                            <div className='relative'>
                                Let's Connect
                                <span className='absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full'></span>
                            </div>
                            <ArrowRightIcon className='inline-block transition-transform duration-300 group-hover:translate-x-1' />
                        </a>
                        <a href="#" className='flex flex-row group items-center space-x-2 relative text-neutral-700 dark:text-neutral-300'>
                            <div className='relative'>
                                Download CV
                                <span className='absolute bottom-0 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full'></span>
                            </div>
                            <ArrowRightIcon className='inline-block transition-transform duration-300 group-hover:translate-x-1' />
                        </a>
                    </div>
                </div>
                <div className='flex py-12 items-center justify-center md:border-x border-x-neutral-200 border-x-0 dark:border-x-neutral-700'>
                    <img className='max-w-full w-[1200px]' src="/logo.png" alt="" />
                </div>
            </div>
        </div>
    );
};