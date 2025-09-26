import { ArrowUpRightIcon, ArrowUUpRightIcon, LinkedinLogoIcon, LinkIcon, LinktreeLogoIcon } from '@phosphor-icons/react'
import React from 'react'
import { ExternalLinkButton } from '../ui/external-link-button'
import { ArrowUpRight, ArrowUpRightSquareIcon } from 'lucide-react'
import { github_profile, linkedin_profile } from '@/lib/constants'
import ImageChip from './image-chip'

export default function ProfileCard({ image, name, caption }) {
    return (
        <div className='flex min-w-[300px] flex-col p-2 py-4 space-y-2 rounded-xl flex-wrap border bg-neutral-200 dark:bg-neutral-900'>
            <div className='flex space-y-2 text-center flex-col'>
                <img className='w-[280px] rounded-xl aspect-square py-0 mx-auto' src={image} alt={name} />
                <div className='text-3xl font-semibold'>{name}</div>
            </div>
            <div className='text-center text-wrap mx-auto'>{caption}</div>
            <div className='mx-auto flex flex-row items-center space-x-2 text-neutral-600 dark:text-neutral-400'>
                <a href={linkedin_profile} target="_blank" rel="noopener noreferrer" className="group" aria-label="LinkedIn Profile">
                    <ImageChip 
                        image_src={'/skills/linkedin.png'} 
                        image_alt="LinkedIn"
                        className="
                            bg-white dark:bg-neutral-800 
                            hover:bg-white dark:hover:bg-neutral-700 
                            transition-all duration-200 
                            shadow-sm hover:shadow-md
                            group-hover:scale-105
                        "
                    />
                </a>
                <a href={github_profile} target="_blank" rel="noopener noreferrer" className="group" aria-label="GitHub Profile">
                    <ImageChip 
                        image_src={'/skills/github.png'} 
                        image_alt="GitHub"
                        className="
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
