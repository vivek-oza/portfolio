import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubLogo, ArrowSquareOut, CaretDown, CaretUp, } from '@phosphor-icons/react';

// Geometric Button Component
const GeometricButton = ({ children, className = '', ...props }) => (
    <button
        className={`relative px-4 py-2 bg-transparent text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 border border-neutral-300 dark:border-neutral-600 rounded-sm flex items-center justify-center gap-2 ${className}`}
        {...props}
    >
        <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
            {children}
        </span>
    </button>
);

export default function ProjectCard({
    project_title = 'Project Title',
    project_description = 'A brief description of the project will appear here',
    project_image,
    technologies = ['Tech 1', 'Tech 2', 'Tech 3'],
    github_url,
    live_url,
    loading = false
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleExpand = (e) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            ref={cardRef}
            className="group relative overflow-hidden bg-white dark:bg-neutral-900 w-full transition-all duration-300 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
            onClick={toggleExpand}
        >
            {/* Corner borders - only show on hover */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neutral-300 dark:border-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neutral-300 dark:border-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neutral-300 dark:border-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-neutral-300 dark:border-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Collapsed State - Single Line */}
            <div className={`flex items-center p-4 space-x-4 ${isExpanded ? 'border-b border-neutral-100 dark:border-neutral-800' : ''}`}>
                <div className="flex-grow min-w-0">
                    {loading ? (
                        <>
                            <div className="h-5 w-3/4 bg-neutral-200 dark:bg-neutral-700 rounded mb-2 animate-pulse"></div>
                            <div className="h-3 w-full bg-neutral-100 dark:bg-neutral-800 rounded animate-pulse"></div>
                        </>
                    ) : (
                        <>
                            <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100 truncate">
                                {project_title}
                            </h3>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
                                {project_description}
                            </p>
                        </>
                    )}
                </div>

                {/* Expand/Collapse Icon */}
                <div className="flex-shrink-0 text-neutral-400 dark:text-neutral-500">
                    {loading ? (
                        <div className="w-5 h-5 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
                    ) : isExpanded ? (
                        <CaretUp size={20} weight="bold" />
                    ) : (
                        <CaretDown size={20} weight="bold" />
                    )}
                </div>
            </div>

            {/* Expanded State */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="p-4 pt-3"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                {/* Project Description */}
                                {loading ? (
                                    <div className="space-y-3">
                                        <div className="h-4 w-full bg-neutral-100 dark:bg-neutral-800 rounded animate-pulse"></div>
                                        <div className="h-4 w-5/6 bg-neutral-100 dark:bg-neutral-800 rounded animate-pulse"></div>
                                        <div className="h-4 w-4/6 bg-neutral-100 dark:bg-neutral-800 rounded animate-pulse"></div>
                                    </div>
                                ) : (
                                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                                        {project_description}
                                    </p>
                                )}

                                {/* Technologies */}
                                {loading ? (
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="h-8 w-16 bg-neutral-100 dark:bg-neutral-800 rounded animate-pulse"></div>
                                        ))}
                                    </div>
                                ) : technologies && technologies.length > 0 ? (
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {technologies.map((tech, index) => (
                                            <div key={index} className="inline-block cursor-pointer group/techchip">
                                                <div className="relative flex items-center px-3 py-1.5 text-xs font-medium 
                                                    bg-white/80 dark:bg-neutral-800/80 
                                                    text-neutral-700 dark:text-neutral-300 
                                                    border border-neutral-300 dark:border-neutral-700
                                                    hover:bg-neutral-100 dark:hover:bg-neutral-700/90
                                                    transition-all duration-300 rounded-sm">
                                                    {tech}
                                                    {/* Corner Borders */}
                                                    <div className="absolute inset-0 border-1 border-transparent group-hover/techchip:border-neutral-300 dark:group-hover/techchip:border-neutral-600 transition-all duration-300 rounded-sm">
                                                        <div className="absolute -top-[1.5px] -left-[1.5px] w-1.5 h-1.5 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-500 opacity-0 group-hover/techchip:opacity-100 transition-opacity duration-300"></div>
                                                        <div className="absolute -top-[1.5px] -right-[1.5px] w-1.5 h-1.5 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-500 opacity-0 group-hover/techchip:opacity-100 transition-opacity duration-300"></div>
                                                        <div className="absolute -bottom-[1.5px] -left-[1.5px] w-1.5 h-1.5 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-500 opacity-0 group-hover/techchip:opacity-100 transition-opacity duration-300"></div>
                                                        <div className="absolute -bottom-[1.5px] -right-[1.5px] w-1.5 h-1.5 border-b-2 border-r-2 border-neutral-400 dark:border-neutral-500 opacity-0 group-hover/techchip:opacity-100 transition-opacity duration-300"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}

                                {/* Action Buttons */}
                                <div className="flex items-center gap-4 pt-4">
                                    {loading ? (
                                        <>
                                            <div className="w-24 h-10 bg-neutral-100 dark:bg-neutral-800 rounded animate-pulse"></div>
                                            <div className="w-24 h-10 bg-neutral-100 dark:bg-neutral-800 rounded animate-pulse"></div>
                                        </>
                                    ) : (
                                        <>
                                            {github_url && (
                                                <a
                                                    href={github_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group inline-block"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <GeometricButton className="hover:scale-105 transition-transform">
                                                        <GithubLogo size={16} weight="bold" />
                                                        <span>GitHub</span>
                                                    </GeometricButton>
                                                </a>
                                            )}
                                            {live_url && (
                                                <a
                                                    href={live_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group inline-block"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <GeometricButton className="hover:scale-105 transition-transform">
                                                        <ArrowSquareOut size={16} weight="bold" />
                                                        <span>Live Demo</span>
                                                    </GeometricButton>
                                                </a>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Project Image */}
                            <div className="relative w-full aspect-video bg-neutral-100 dark:bg-neutral-800 rounded-md overflow-hidden group-has-[img]:hover:ring-1 group-has-[img]:hover:ring-neutral-300 dark:group-has-[img]:hover:ring-neutral-600 transition-all duration-300">
                                {loading ? (
                                    <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 animate-pulse"></div>
                                ) : project_image ? (
                                    <img
                                        src={project_image}
                                        alt={project_title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-700">
                                        <span className="text-sm text-neutral-500">Project Preview</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* <div className='w-full border-b border-neutral-200 dark:border-neutral-700'></div> */}

        </div>
    );
}
