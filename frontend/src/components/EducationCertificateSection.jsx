import React from 'react'
import CustomHeading from './custom/custom-heading'

export default function EducationCertificateSection() {
    return (
        <>
            <div className='flex flex-col space-y-4 border-y border-y-neutral-200 dark:border-y-neutral-800 text-start p-12'>
                <CustomHeading className={'text-xl font-medium tracking-wide'} heading_text={'Education and Certificates'} />
                <div className='text-start text-lg text-white'>Education</div>
            </div>
        </>
    )
}
