import { ArrowCircleUpRightIcon } from '@phosphor-icons/react';
import { ArrowUpRightIcon } from 'lucide-react';
import { ArrowRight, ArrowSquareUpRight } from 'phosphor-react';

export function ExternalLinkButton({ className = '', children, href, download }) {
    return (
        <a
            target='_blank'
            href={href}
            download={download}
            className={`group relative px-1 py-0.5 dark:bg-neutral-700 rounded bg-neutral-300 text-neutral-800 cursor-pointer flex items-center dark:text-neutral-500 ${className}`}
        >
            <span className="relative text-neutral-300  group-hover:text-black dark:group-hover:text-white transition-all duration-300">
                {children}
                <span className='absolute z-10 bottom-0 left-0 w-0 h-[1px] dark:bg-white bg-black transition-all duration-300 group-hover:w-full'></span>
                <span className='absolute z-0 bottom-0 left-0 w-full h-[1px] dark:bg-neutral-600 bg-black transition-all duration-300 group-hover:w-full'></span>
            </span>
            <ArrowRight
                className='inline-block absolute size-8 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 items-center top-0 right-0 group-hover:text-white transition-all duration-200'
                    
            />
        </a>
    );
}
