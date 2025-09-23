import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@phosphor-icons/react';

const ArrowIcon = ({ className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={`inline-block transition-transform duration-300 ${className}`}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export function GeometricButton({ 
  children, 
  onClick, 
  className = '',
  showToast = false,
  toastMessage = 'Action completed',
  variant = 'default',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    
    if (showToast && typeof window !== 'undefined') {
      import('react-hot-toast').then(({ default: toast }) => {
        toast(toastMessage, {
          duration: 3000,
          position: 'bottom-right',
          style: {
            background: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
            padding: '16px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        });
      });
    }
  };

  const baseStyles = 'group relative px-6 py-3 font-medium text-sm inline-flex items-center justify-center gap-2';
  const variants = {
    default: 'bg-neutral-100 dark:bg-neutral-800/50 hover:bg-neutral-200 dark:hover:bg-neutral-700/50 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white',
    primary: 'bg-neutral-100 dark:bg-neutral-800/50 hover:bg-neutral-200 dark:hover:bg-neutral-700/50 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white',
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <motion.button
      onClick={handleClick}
      className={`${baseStyles} ${currentVariant} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {iconPosition === 'left' && Icon && (
          <span className="inline-flex mr-2 transition-transform duration-300 group-hover:translate-x-1">
            <Icon size={16} />
          </span>
        )}
        {children}
        {iconPosition === 'right' && (Icon ? (
          <span className="inline-flex ml-2 transition-transform duration-300 group-hover:translate-x-1">
            <Icon size={16} />
          </span>
        ) : (
          <span className="inline-flex ml-2 transition-transform duration-300 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        ))}
      </span>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-neutral-200 dark:bg-grid-neutral-800 [mask-image:linear-gradient(0deg,#fff,transparent)] opacity-20 dark:opacity-10"></div>
        </div>
        {/* Animated border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-neutral-300 dark:group-hover:border-neutral-600 transition-all duration-300">
          <div className="absolute -top-[2px] -left-[2px] w-3 h-3 border-t-2 border-l-2 border-neutral-400 dark:border-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -top-[2px] -right-[2px] w-3 h-3 border-t-2 border-r-2 border-neutral-400 dark:border-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -bottom-[2px] -left-[2px] w-3 h-3 border-b-2 border-l-2 border-neutral-400 dark:border-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -bottom-[2px] -right-[2px] w-3 h-3 border-b-2 border-r-2 border-neutral-400 dark:border-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </motion.button>
  );
}

// Create a specific button for View Project that can be used in ProjectCard
export function ViewProjectButton({ children = 'View Project', className = '', ...props }) {
  return (
    <GeometricButton 
      className={`w-full max-w-[180px] py-2 text-sm ${className}`}
      showToast={true}
      {...props}
    >
      {children}
    </GeometricButton>
  );
}

// Create a specific button for Send Message that can be used in ContactForm
export function SendMessageButton({ children = 'Send Message', className = '', isLoading = false, ...props }) {
  return (
    <GeometricButton 
      className={`w-full py-4 ${className}`}
      variant="primary"
      icon={isLoading ? null : ArrowRightIcon}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <Spinner className="animate-spin" size={20} />
          Sending...
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          {children}
          <span className="text-xs opacity-80">(Demo)</span>
        </span>
      )}
    </GeometricButton>
  );
}
