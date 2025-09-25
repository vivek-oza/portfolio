import React from 'react'
import CustomHeading from './custom/custom-heading'
import ProfileCard from './custom/profile-card'
import ContactForm from './custom/contact-form'
import { ExternalLinkButton } from './ui/external-link-button'

export default function ContactSection() {
    return (
        <div id="contact" className='flex flex-col space-y-4 border-b border-neutral-200 dark:border-neutral-700 text-start py-12 px-12'>
            <CustomHeading className={'text-xl font-medium tracking-wide mb-10'} heading_text={'Find me here'} />
            <div className='flex flex-row  md:space-x-4 md:space-y-0 space-y-4 space-x-0 items-start px-12'>
                <div className=''>
                    <ProfileCard image={"/logo.svg"} name="Vivek Oza" caption="Check my socials or send me a message." />
                </div>
                <div className=' bg-neutral-200 dark:bg-neutral-900 border p-4 rounded-xl w-full h-full'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
