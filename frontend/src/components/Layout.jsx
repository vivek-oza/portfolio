import { contact_mail, github_profile, linkedin_profile } from '@/lib/constants';
import { Navbar } from './Navbar';
import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { Toaster } from 'react-hot-toast';

export function Layout({ children }) {
  return (
    <div className="min-h-screen max-w-4xl mx-auto bg-white dark:bg-neutral-900">
      <Toaster 
        position="bottom-right"
        toastOptions={{
          className: '!bg-neutral-50 dark:!bg-neutral-900',
          duration: 5000,
          style: {
            background: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
            padding: '16px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 9999,
          },
          success: {
            className: '!bg-green-50 dark:!bg-green-900/30',
            iconTheme: {
              primary: 'hsl(142.1 76.2% 36.3%)',
              secondary: 'white',
            },
          },
          error: {
            className: '!bg-red-50 dark:!bg-red-900/30',
            iconTheme: {
              primary: 'hsl(0 84.2% 60.2%)',
              secondary: 'white',
            },
          },
          loading: {
            className: '!bg-blue-50 dark:!bg-blue-900/30',
          },
        }}
      />
      <main className="relative">
        <Navbar />
        <div className="absolute top-0 right-0 h-full w-4 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8"></div>
        <div className="absolute top-0 left-0 h-full w-4 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8"></div>
        {children}
        <footer className="bg-neutral-100 border-y px-12 dark:border-neutral-700 dark:bg-neutral-800/20 py-4 mt-20">
          <div className="mx-auto w-full max-w-4xl px-4 md:px-8 text-center text-neutral-600 dark:text-neutral-400">
            <div className='flex flex-col items-center justify-center space-y-1'>
              {/* <div className='flex items-center space-x-1'>
                <div> Built with love</div>
                <HeartStraightIcon size={22} color="#dc143c" weight="fill" />
                <div className='flex flex-row items-center space-x-1'>
                  <div>by vivek. (I got little inspired</div>
                  <div>
                    <SmileyWinkIcon size={22} color="#fecd3b" weight="fill" />
                  </div>
                  <div>)</div>
                </div>
              </div> */}
              <div className='flex w-full items-center justify-between'>
                <div>&copy; 2025 Vivek's Portfolio. Built with love by vivek. </div>
                <div>
                  <ul className='flex flex-row space-x-2'>
                    <a target='_blank' href={linkedin_profile}><li> <div className='p-2 aspect-square flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 rounded'> <LinkedinLogoIcon size={24} /> </div> </li></a>
                    <a target='_blank' href={github_profile}><li> <div className='p-2 aspect-square flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 rounded'> <GithubLogoIcon size={24} /> </div> </li></a>
                    <a target='_blank' href={contact_mail}><li> <div className='p-2 aspect-square flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 rounded'> <EnvelopeSimpleIcon size={24} /> </div> </li></a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

    </div>
  );
};