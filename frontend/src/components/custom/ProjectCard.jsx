import React, { useRef, useEffect } from 'react'
import { useToast } from "@/components/ui/use-toast"

export default function ProjectCard(projectData) {
    const { toast } = useToast()
    const toastShownRef = useRef(false)

    useEffect(() => {
        return () => {
            // Clean up any toasts when component unmounts
            toast.dismiss()
        }
    }, [toast])

    const showProjectToast = () => {
        if (toastShownRef.current) return
        
        toastShownRef.current = true
        
        const toastId = 'project-toast'
        
        // Dismiss any existing toasts with the same ID
        toast.dismiss(toastId)
        
        toast.custom((t) => (
            <div className="bg-neutral-950 rounded-lg shadow-lg border border-neutral-800 p-4">
                <div className="flex items-center gap-3">
                    <div className="text-amber-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                    </div>
                    <div>
                        <div className="font-medium text-white">👋 Heads up!</div>
                        <div className="text-sm text-neutral-300">This project isn't quite ready for show and tell. I'm still putting the finishing touches on it.</div>
                    </div>
                </div>
            </div>
        ), { 
            duration: 5000,
            id: toastId,
            onDismiss: () => {
                toastShownRef.current = false
            },
            position: 'bottom-right'
        })
    }

    const handleProjectClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        showProjectToast()
    }

    return (
        <div className="text-center flex flex-col justify-between border border-neutral-200 dark:border-neutral-700 shadow-sm bg-white dark:bg-neutral-900 w-full h-full p-4 md:p-6 transition-colors">
            <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 truncate">{projectData.project_title}</div>
            <div className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-3">{projectData.project_description}</div>
            <img src={projectData.project_image} className="w-full object-cover rounded-md border border-neutral-100 dark:border-neutral-800 mb-4" alt={projectData.project_title} />
            <div className="flex flex-col space-y-2">
                <button 
                    onClick={handleProjectClick}
                    className="group inline-flex items-center justify-center gap-1 text-sm font-medium text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors"
                >
                    View Project
                    <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}
