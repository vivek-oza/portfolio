import { ArrowUpRightIcon, ArrowUUpRightIcon, LinkedinLogoIcon, LinkIcon, LinktreeLogoIcon } from '@phosphor-icons/react'
import React from 'react'
import { ExternalLinkButton } from '../ui/external-link-button'
import ImageChip from './image-chip'
import { ArrowUpRight, ArrowUpRightSquareIcon } from 'lucide-react'
import { github_profile, linkedin_profile } from '@/lib/constants'

export default function ProfileCard({ image, name, caption }) {
    return (
        <div className='w-full h-full flex flex-col p-4 sm:p-5 space-y-4 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-900 transition-all duration-200 hover:shadow-md dark:hover:shadow-neutral-800/50'>
            <div className='flex flex-col items-center space-y-4'>
                <div className='w-full max-w-[200px] sm:max-w-[240px] mx-auto'>
                    <img 
                        className='w-full rounded-xl aspect-square object-cover shadow-md' 
                        src={image} 
                        alt={name} 
                    />
                </div>
                <h3 className='text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white'>{name}</h3>
                <p className='text-center text-sm sm:text-base text-neutral-700 dark:text-neutral-300'>{caption}</p>
            </div>
            
            <div className='flex justify-center items-center space-x-3 pt-2'>
                <a 
                    href={linkedin_profile} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group"
                    aria-label="LinkedIn Profile"
                >
                    <ImageChip 
                        image_src={'/skills/linkedin.png'} 
                        image_alt="LinkedIn" 
                        image_title="LinkedIn" 
                        className="
                            w-10 h-10 sm:w-12 sm:h-12 
                            bg-white dark:bg-neutral-800 
                            hover:bg-white dark:hover:bg-neutral-700 
                            transition-all duration-200 
                            shadow-sm hover:shadow-md
                            group-hover:scale-105
                        " 
                    />
                </a>
                <a 
                    href={github_profile} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group"
                    aria-label="GitHub Profile"
                >
                    <ImageChip 
                        image_src={'/skills/github.png'} 
                        image_alt="GitHub" 
                        image_title="GitHub" 
                        className="
                            w-10 h-10 sm:w-12 sm:h-12 
                            bg-white dark:bg-neutral-800 
                            hover:bg-white dark:hover:bg-neutral-700 
                            transition-all duration-200 
                            shadow-sm hover:shadow-md
                            group-hover:scale-105
                        " 
                    />
                </a>
            </div>
        </div>
    )
}
