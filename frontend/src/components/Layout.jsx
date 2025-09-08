import { Navbar } from './Navbar';

export function Layout({ children }) {
  return (
    <div className="min-h-screen max-w-4xl mx-auto bg-white dark:bg-neutral-900">

      <main className="relative">
        <Navbar />
        <div className="absolute top-0 right-0 h-full w-4 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8"></div>
        <div className="absolute top-0 left-0 h-full w-4 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-8"></div>
        {children}
        <footer className="bg-neutral-100 border-y dark:border-neutral-700 dark:bg-neutral-800/20 py-4 mt-20">
          <div className="mx-auto w-full max-w-4xl px-4 md:px-8 text-center text-neutral-600 dark:text-neutral-400">
            <p>&copy; 2025 Vivek Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </main>

    </div>
  );
};