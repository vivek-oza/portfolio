import React from 'react'
import { useToast } from "@/components/ui/use-toast"
import { ExternalLinkButton } from "@/components/ui/external-link-button"

export default function ProjectCard(projectData) {
    const { toast } = useToast()
    
    const handleProjectClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        toast({
            title: "Project Preview",
            description: "This project isn't quite ready for show and tell. I'm still putting the finishing touches on it.",
            variant: "default",
            duration: 5000,
        })
    }

    return (
        <div className="text-center flex flex-col justify-between border border-neutral-200 dark:border-neutral-700 shadow-sm bg-white dark:bg-neutral-900 w-full h-full p-4 md:p-6 transition-colors">
            <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 truncate">{projectData.project_title}</div>
            <div className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-3">{projectData.project_description}</div>
            <img src={projectData.project_image} className="w-full object-cover rounded-md border border-neutral-100 dark:border-neutral-800 mb-4" alt={projectData.project_title} />
            <div className="flex justify-center mt-2">
                <ExternalLinkButton 
                    onClick={handleProjectClick}
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                    View Project
                </ExternalLinkButton>
            </div>
        </div>
    )
}
