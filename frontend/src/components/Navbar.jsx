"use client";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, X, List } from "@phosphor-icons/react/dist/ssr";
import { useModeAnimation, ThemeAnimationType } from 'react-theme-switch-animation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ref: themeRef, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    globalClassName: 'dark',
    animationType: ThemeAnimationType.CIRCLE,
    duration: 600,
    easing: 'ease-in-out',
  });

  const handleThemeToggle = () => {
    const before = document.documentElement.classList.contains('dark');
    try {
      toggleSwitchTheme();
    } catch (_) {
      // Fallback immediately
      document.documentElement.classList.toggle('dark');
      return;
    }
    // Fallback if class didn't change shortly after
    setTimeout(() => {
      const after = document.documentElement.classList.contains('dark');
      if (before === after) {
        document.documentElement.classList.toggle('dark');
      }
    }, 50);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    // { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  // Close menu when clicking on a nav item
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${isScrolled ? 'top-4' : 'top-0'}`}
    >
      <div className={`mx-auto transition-[max-width] duration-300 ${isScrolled ? 'max-w-[48rem]' : 'max-w-[52rem]'}`}>
        <div className={`flex w-full items-center justify-between rounded-full px-4 py-2 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300 ${
          isScrolled
            ? 'bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-[0_0_24px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]'
            : 'bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm border border-transparent shadow-none'
        }`}>
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="relative overflow-hidden rounded-full">
                <img
                  alt="Avatar"
                  loading="lazy"
                  width="40"
                  height="40"
                  className="h-10 w-10 rounded"
                  src="/favicon.png"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="relative px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}

            <button
              ref={themeRef}
              onClick={handleThemeToggle}
              aria-pressed={isDarkMode}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex items-center justify-center p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <span className="inline-block">
                {isDarkMode ? (
                  <SunIcon size={20} className="text-neutral-700 dark:text-neutral-300" />
                ) : (
                  <MoonIcon size={20} className="text-neutral-700 dark:text-neutral-300" />
                )}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X size={24} weight="bold" />
              ) : (
                <List size={24} weight="bold" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-3 py-2 text-base font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
                >
                  {item.name}
                </a>
              ))}
              <button
                ref={themeRef}
                onClick={() => {
                  handleThemeToggle();
                  handleNavClick();
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md flex items-center"
              >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
