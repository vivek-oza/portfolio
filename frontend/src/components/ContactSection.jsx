import React from 'react'
import CustomHeading from './custom/custom-heading'
import ProfileCard from './custom/profile-card'
import ContactForm from './custom/contact-form'

export default function ContactSection() {
    return (
        <section id="contact" className='w-full border-b border-neutral-200 dark:border-neutral-700 py-8 sm:py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <CustomHeading 
                    className="text-xl font-medium tracking-wide mb-8 sm:mb-12 text-center sm:text-left" 
                    heading_text='Find me here' 
                />
                
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 w-full'>
                    {/* Profile Card - Full width on mobile, 1/3 on larger screens */}
                    <div className='w-full lg:w-1/3 xl:w-1/4'>
                        <ProfileCard 
                            image={"/logo.svg"} 
                            name="Vivek Oza" 
                            caption="Check my socials or send me a message." 
                        />
                    </div>
                    
                    {/* Contact Form - Full width on mobile, 2/3 on larger screens */}
                    <div className='w-full lg:w-2/3 xl:w-3/4 bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 p-4 sm:p-6 rounded-xl'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
