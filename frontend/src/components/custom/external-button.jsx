import { ArrowCircleUpRightIcon, ArrowRightIcon } from '@phosphor-icons/react';
import { ArrowUpRightIcon } from 'lucide-react';

export function ExternalButton({ className = '', children }) {
    return (
        <a
            href="#"
            className={`group relative text-neutral-600 cursor-pointer flex items-center dark:text-neutral-400 ${className}`}
        >
            <span className="relative  group-hover:text-white transition-all duration-300">
                {children}
                <span className='absolute z-10 bottom-0 left-0 w-0 h-[1%] bg-white transition-all duration-300 group-hover:w-full'></span>
                {/* <span className='absolute z-0 bottom-0 left-0 w-full h-[1px] bg-current transition-all duration-300 group-hover:w-full'></span> */}
            </span>
            <ArrowRightIcon
                className='-ms-1 opacity-0 group-hover:opacity-100 inline-block items-center group-hover:translate-x-2 group-hover:text-white transition-all duration-300'
            />
        </a>
    );
}
