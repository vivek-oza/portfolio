import React from 'react'

export default function HeaderSection() {
    return (
        <>
            <div className='flex flex-col space-y-4 py-4 border-y text-start px-12 dark:border-neutral-800'>
                <div className='text-4xl'>Vivek oza</div>
                <div className='text-neutral-600 dark:text-neutral-400'>
                    Full-stack developer & vibe coder who translates caffeine into clean code.
                    <br /> My websites work and actually look good.
                    <br /> <i>Open to job opportunities worldwide.</i>
                </div>

            </div>
        </>
    )
}
