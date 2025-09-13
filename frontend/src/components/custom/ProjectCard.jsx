import React from 'react'
import { ExternalLinkButton } from "@/components/ui/external-link-button"
import { LinkIcon } from "@phosphor-icons/react"

export default function ProjectCard(projectData) {
    return (
        <>
            <div className="text-center flex flex-col justify-between border border-neutral-200 dark:border-neutral-700 shadow-sm bg-white dark:bg-neutral-900 w-full h-full p-4 md:p-6 transition-colors">
                <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 truncate">{projectData.project_title}</div>
                <div className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-3">{projectData.project_description}</div>
                <img src={projectData.project_image} className="w-full object-cover rounded-md border border-neutral-100 dark:border-neutral-800 mb-4" alt={projectData.project_title} />
                <div className="flex flex-col space-y-2">
                    <ExternalLinkButton className="justify-center">
                        View Project
                    </ExternalLinkButton>
                </div>
            </div>
        </>
    )
}
