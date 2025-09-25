import { ArrowUpRightIcon, ArrowUUpRightIcon, LinkedinLogoIcon, LinkIcon, LinktreeLogoIcon } from '@phosphor-icons/react'
import React from 'react'
import { ExternalLinkButton } from '../ui/external-link-button'
import ImageChip from './image-chip'
import { ArrowUpRight, ArrowUpRightSquareIcon } from 'lucide-react'
import { github_profile, linkedin_profile } from '@/lib/constants'

export default function ProfileCard({ image, name, caption }) {
    return (
        <>
            <div className='flex min-w-[300px] flex-col p-2 space-y-2 rounded-xl flex-wrap border bg-neutral-200 dark:bg-neutral-900'>
                <div className='flex space-y-2 text-center flex-col'>
                    <img className='w-[280px] rounded-xl aspect-square py-0 mx-auto' src={image} alt={name} />
                    <div className='text-3xl font-semibold'>{name}</div>
                    {/* <div className='flex flex-row space-x-1'>
                        <LinkedinLogoIcon weight='fill' size={32} />
                    </div> */}
                    {/* <div className='flex flex-row items-center space-x-4 mt-4'>
                        <div className='flex flex-row items-center space-x-2 text-neutral-600 dark:text-neutral-400'>
                            <div>Feeling talkative?</div>
                            <ExternalLinkButton href="#">
                                Send me a message
                            </ExternalLinkButton>
                        </div>
                        <div className='flex flex-row items-center space-x-2 text-neutral-600 dark:text-neutral-400'>
                            <div>Follow me on socials</div> 
                            <ExternalLinkButton href="#">
                                <img className='size-8 rounded' src="/logo.svg" alt="My Socials" />
                            </ExternalLinkButton>
                        </div>
                    </div> */}
                </div>
                <div className='text-center text-wrap mx-auto'>{caption}</div>
                <div className='mx-auto flex flex-row items-center space-x-2 text-neutral-600 dark:text-neutral-400'>
                    <a href={linkedin_profile} target="_blank" rel="noopener noreferrer"> <ImageChip image_src={'/skills/linkedin.png'} image_alt="My Socials" image_title="LinkedIn" className={'dark:bg-neutral-800 bg-white dark:hover:bg-neutral-600 dark:hover:text-white hover:text-black hover:bg-white transition p-2'} /></a>
                    <a href={github_profile} target="_blank" rel="noopener noreferrer"> <ImageChip image_src={'/skills/github.png'} image_alt="My Socials" image_title="Github" className={'dark:bg-neutral-800 bg-white dark:hover:bg-neutral-600 dark:hover:text-white hover:text-black hover:bg-white transition p-2'} /></a>
                </div>
            </div>
        </>
    )
}
