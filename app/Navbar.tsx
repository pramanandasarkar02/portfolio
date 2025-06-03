"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog'},
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
    
  ];

  if (!mounted) {
    return null;
  }

  return (
    <nav className={`sticky top-0 z-50 transition-colors duration-300
      ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 
        theme === 'hacker' ? 'bg-black text-green-400' : 
        'bg-white/80 text-gray-900'} backdrop-blur-sm shadow-sm`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className={`text-xl font-bold 
              ${theme === 'dark' ? 'text-white' : 
                theme === 'hacker' ? 'text-green-400' : 
                'text-gray-900'}`}>
              Pramananda Sarkar
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${theme === 'dark' ? 'hover:bg-gray-800 hover:text-white' : 
                      theme === 'hacker' ? 'hover:bg-green-900/30 hover:text-green-300' : 
                      'hover:bg-gray-100 hover:text-gray-900'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Theme Switcher */}
            <div className="ml-4 flex items-center space-x-2 ">
              <button
                onClick={() => setTheme('light')}
                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer
                  ${theme === 'light' ? 'bg-gray-200 text-yellow-500' : 'bg-gray-100 text-gray-500'}`}
                title="Light"
              >
                ☀️
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer
                  ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-600 text-gray-300'}`}
                title="Dark"
              >
                🌙
              </button>
              <button
                onClick={() => setTheme('hacker')}
                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer
                  ${theme === 'hacker' ? 'bg-green-900/30 text-green-400' : 'bg-gray-800 text-green-300'}`}
                title="Hacker"
              >
                💻
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="mr-4">
              <div className="flex space-x-2">
                <button
                  onClick={() => setTheme('light')}
                  className={`w-6 h-6 rounded-full text-xs ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-100'}`}
                >
                  ☀️
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`w-6 h-6 rounded-full text-xs ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-600'}`}
                >
                  🌙
                </button>
                <button
                  onClick={() => setTheme('hacker')}
                  className={`w-6 h-6 rounded-full text-xs ${theme === 'hacker' ? 'bg-green-900/30' : 'bg-gray-800'}`}
                >
                  💻
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md 
                ${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 
                  theme === 'hacker' ? 'text-green-400 hover:text-green-300 hover:bg-green-900/30' : 
                  'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden transition-all duration-300
          ${theme === 'dark' ? 'bg-gray-800' : 
            theme === 'hacker' ? 'bg-black' : 
            'bg-white'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium
                  ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 
                    theme === 'hacker' ? 'text-green-400 hover:bg-green-900/30 hover:text-green-300' : 
                    'text-gray-900 hover:bg-gray-100 hover:text-gray-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;