import { ArrowUpRightIcon, ArrowUUpRightIcon, LinkedinLogoIcon, LinkIcon, LinktreeLogoIcon } from '@phosphor-icons/react'
import React from 'react'
import { ExternalLinkButton } from '../ui/external-link-button'
import ImageChip from './image-chip'
import { ArrowUpRight, ArrowUpRightSquareIcon } from 'lucide-react'

export default function ProfileCard({ image, name, caption }) {
    return (
        <>
            <div className='flex flex-col space-y-2 rounded-xl flex-wrap w-[300px] border bg-neutral-200 dark:bg-neutral-900 px-0 py-2'>
                <div className='flex space-y-2 text-center flex-col'>
                    <img className='size-[280px] mx-auto rounded-lg' src={image} alt={name} />
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
                                <img className='size-8 rounded' src="/logo.png" alt="My Socials" />
                            </ExternalLinkButton>
                        </div>
                    </div> */}
                </div>
                <div className='text-center max-w-[300px] mx-auto'>{caption}</div>
                <div className='mx-auto group flex flex-row items-center space-x-2 text-neutral-600 dark:text-neutral-400'>
                    <a href="https://linkedin.com/in/vivek-oza" target="_blank" rel="noopener noreferrer"> <ImageChip image_src={'/skills/linkedin.png'} image_alt="My Socials" image_title="LinkedIn" className={'dark:bg-neutral-800 bg-white dark:hover:bg-neutral-600 dark:hover:text-white hover:text-black hover:bg-white transition p-2'} /></a>
                    <a href="https://github.com/vivek-oza" target="_blank" rel="noopener noreferrer"> <ImageChip image_src={'/skills/github.png'} image_alt="My Socials" image_title="Github" className={'dark:bg-neutral-800 bg-white dark:hover:bg-neutral-600 dark:hover:text-white hover:text-black hover:bg-white transition p-2'} /></a>
                </div>
            </div>
        </>
    )
}
