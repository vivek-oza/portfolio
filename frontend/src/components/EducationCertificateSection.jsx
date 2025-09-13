import React from 'react'
import CustomHeading from './custom/custom-heading'
import ImageChip from './custom/image-chip'
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr'
import { ExternalButton } from './custom/external-button'

export default function EducationCertificateSection() {
    return (
        <>
            <div className='flex flex-col space-y-8 border-b border-y-neutral-200 dark:border-y-neutral-700 text-start py-12'>
                <CustomHeading className={'mx-12 text-xl font-medium tracking-wide'} heading_text={'Education and Certificates'} />
                <div className='px-12 flex flex-col justify-start space-y-2'>
                    <div className='text-start text-lg dark:text-white'>Education</div>
                    <div className='text-neutral-600 dark:text-neutral-400 flex flex-row justify-between items-center'>
                        <div>Bachelors in Computer Science</div>
                        <div>KSV,Gandhinagar</div>
                    </div>
                </div>

                <div className='bg-neutral-200 dark:bg-neutral-700 w-full h-[1px]'></div>

                <div className='px-12 flex flex-col justify-start space-y-2'>
                    <div className='text-start text-lg dark:text-white '>Certificates</div>
                    <div className="flex flex-col space-y-0 ">
                        <a href="#" className='group text-neutral-600 dark:text-neutral-400 flex flex-row justify-between items-center'>
                            {/* <div className='relative'>
                                SQL(Basic) Certification exam
                                <div className='absolute bottom-0 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover:w-full'></div>
                                <ArrowRightIcon size={16} className='inline-block absolute top-3.5 -translate-y-1/2 transition-transform duration-300 -translate-x-5 -z-10 group-hover:translate-x-1 group-hover:z-10' />
                            </div> */}
                            <ExternalButton>
                                SQL(Basic) Certification exam
                            </ExternalButton>
                            <div>
                                <ImageChip image_src='/skills/hackerrank.png' image_title='HackerRank' image_alt='HackerRank' />
                            </div>
                        </a>
                        <a href="#" className='group text-neutral-600 dark:text-neutral-400 flex flex-row justify-between items-center'>
                            <ExternalButton>
                                Python (Basic) Certification exam
                            </ExternalButton>
                            <div>
                                <ImageChip image_src='/skills/hackerrank.png' image_title='HackerRank' image_alt='HackerRank' />
                            </div>
                        </a>
                        <a href="#" className='group text-neutral-600 dark:text-neutral-400 flex flex-row justify-between items-center'>
                            <ExternalButton>
                                Fundamentals of Java
                            </ExternalButton>
                            <div>
                                <ImageChip image_src='/skills/scaler.png' image_title='Scaler' image_alt='Scaler' />
                            </div>
                        </a>
                        <a href="#" className='group text-neutral-600 dark:text-neutral-400 flex flex-row justify-between items-center'>
                            <ExternalButton>
                                Basics of MySQL
                            </ExternalButton>
                            <div>
                                <ImageChip image_src='/skills/scaler.png' image_title='Scaler' image_alt='Scaler' />
                            </div>
                        </a>
                    </div>
                </div>


            </div>
        </>
    )
}
