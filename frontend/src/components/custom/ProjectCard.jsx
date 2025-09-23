import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewProjectButton } from "@/components/ui/geometric-button";

export default function ProjectCard(projectData) {
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
            className="relative p-1 overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-full rounded-none transition-all duration-300 cursor-pointer"
            onClick={toggleExpand}
        >
            {/* Collapsed State - Clickable area */}
            <div className={`p-4 transition-all duration-300 ${isExpanded ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 truncate">
                    {projectData.project_title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2">
                    {projectData.project_description}
                </p>
            </div>

            {/* Expanded State */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="p-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                                {projectData.project_title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
                                {projectData.project_description}
                            </p>

                            {/* 16:9 Image Container */}
                            <div className="relative w-full pt-[56.25%] overflow-hidden bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                                <img
                                    src={projectData.project_image}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    alt={projectData.project_title}
                                />
                                <div className="absolute inset-0 bg-grid-neutral-200 dark:bg-grid-neutral-700 [mask-image:linear-gradient(0deg,#fff,transparent)] opacity-20 dark:opacity-10"></div>
                            </div>

                            <div className="flex justify-center pt-2">
                                <ViewProjectButton
                                    toastMessage={`Opening ${projectData.project_title} soon...`}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
