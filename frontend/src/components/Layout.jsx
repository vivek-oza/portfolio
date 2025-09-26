import { contact_mail, github_profile, linkedin_profile } from '@/lib/constants';
import { Navbar } from './Navbar';
import { EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { Toaster } from 'react-hot-toast';
import DecorativeSection from './DecorativeSection';

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
        <footer className="mx-12 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main footer content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Left section */}
              <div className="relative p-4 bg-neutral-200 dark:bg-neutral-800">
                {/* Pixel corners */}
                <div className="absolute w-1.5 h-1.5 bg-black dark:bg-white -left-0.5 -top-0.5"></div>
                <div className="absolute w-1.5 h-1.5 bg-black dark:bg-white -right-0.5 -top-0.5"></div>
                <div className="absolute w-1.5 h-1.5 bg-black dark:bg-white -left-0.5 -bottom-0.5"></div>
                <div className="absolute w-1.5 h-1.5 bg-black dark:bg-white -right-0.5 -bottom-0.5"></div>

                <h3 className="font-pixelify text-4xl mb-2 text-neutral-800 dark:text-white">vo</h3>
                <p className="text-base text-wrap text-neutral-600 dark:text-neutral-300">
                  I make digital experiences better with clean code and thoughtful design.
                </p>
              </div>

              {/* Middle section - Navigation */}
              <div className="relative p-4 bg-neutral-200 dark:bg-neutral-800">
                <div className="absolute w-1.5 h-1.5 bg-black dark:bg-white -left-0.5 -top-0.5"></div>
                <div className="absolute w-1.5 h-1.5 bg-black dark:bg-white -right-0.5 -top-0.5"></div>
                <div className="absolute w-1.5 h-1.5 bg-black dark:bg-white -left-0.5 -bottom-0.5"></div>
                <div className="absolute w-1.5 h-1.5 bg-black dark:bg-white -right-0.5 -bottom-0.5"></div>

                <h3 className="font-pixelify text-2xl mb-2 text-neutral-800 dark:text-white">Quick Links</h3>
                <ul className="space-y-1.5">
                  {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-sm text-neutral-600 hover:font-bold dark:text-neutral-300 dark:hover:text-white transition-all duration-100"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right section - Socials */}
              <div className="relative p-4 bg-neutral-200 dark:bg-neutral-800">
                <div className="absolute w-1.5 h-1.5 bg-black dark:bg-white -left-0.5 -top-0.5"></div>
                <div className="absolute w-1.5 h-1.5 bg-black dark:bg-white -right-0.5 -top-0.5"></div>
                <div className="absolute w-1.5 h-1.5 bg-black dark:bg-white -left-0.5 -bottom-0.5"></div>
                <div className="absolute w-1.5 h-1.5 bg-black dark:bg-white -right-0.5 -bottom-0.5"></div>

                <h3 className="font-pixelify text-2xl mb-2 text-neutral-800 dark:text-white">Connect</h3>
                <div className="flex justify-center space-x-2">
                  {[
                    { icon: <LinkedinLogoIcon size={28} className='' />, url: linkedin_profile },
                    { icon: <GithubLogoIcon size={28} className='' />, url: github_profile },
                    { icon: <EnvelopeSimpleIcon size={28} className='' />, url: contact_mail }
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-neutral-200 dark:bg-neutral-900  hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="pt-4">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 dark:text-neutral-400">
                <p className="mb-2 md:mb-0">
                  &copy; {new Date().getFullYear()} Vivek's Portfolio. Built with love by
                </p>
                {/* <div className="flex space-x-4">
                  <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
                    Privacy
                  </a>
                  <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
                    Terms
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};