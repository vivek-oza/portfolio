import { ArrowCircleUpRightIcon, ArrowRightIcon } from '@phosphor-icons/react';
import { ArrowUpRightIcon } from 'lucide-react';

export function ExternalButton({ className = '', children, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative font-semibold text-neutral-600 cursor-pointer flex items-center dark:text-neutral-400 ${className}`}
        >
            <span className="relative group-hover:text-white transition-all duration-300">
                {children}
                <span className='absolute z-10 bottom-0 left-0 w-0 h-[4.5%] bg-white transition-all duration-300 group-hover:w-full'></span>
                <span className='absolute z-0 bottom-0 left-0 w-full h-[0.5px] bg-current transition-all duration-300 group-hover:w-full'></span>
            </span>
            <ArrowRightIcon
            weight='bold'
                className='-ms-1 opacity-0 group-hover:opacity-100 inline-block items-center group-hover:translate-x-2 group-hover:text-white transition-all duration-300'
            />
        </a>
    );
}
