import React, { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className={`${isScrolled ? 'text-purple-400' : 'text-purple-600'} mr-2 transition-colors duration-300`}>
              <Bot className="h-7 w-7" />
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-slate-800'} transition-colors duration-300`}>
              iMate<span className={`${isScrolled ? 'text-purple-400' : 'text-purple-600'} transition-colors duration-300`}>.</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#characters"
              className={`text-sm font-medium ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-slate-900'} transition-colors duration-300`}
            >
              AI 팀원들
            </a>
            <a
              href="#benefits"
              className={`text-sm font-medium ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-slate-900'} transition-colors duration-300`}
            >
              특별한 장점
            </a>
            <a
              href="#pricing"
              className={`text-sm font-medium ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-slate-900'} transition-colors duration-300`}
            >
              요금제
            </a>
            <a
              href="#process"
              className={`text-sm font-medium ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-slate-900'} transition-colors duration-300`}
            >
              도입 과정
            </a>
            <a
              href="#faq"
              className={`text-sm font-medium ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-slate-900'} transition-colors duration-300`}
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full ${
                isScrolled 
                  ? 'text-white bg-white/10 hover:bg-white/20' 
                  : 'text-purple-700 bg-purple-100 hover:bg-purple-200'
              } transition-colors duration-300`}
            >
              무료 체험하기
            </button>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full text-white ${
                isScrolled
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95'
              } transition-all transform hover:scale-105 duration-200 shadow-lg shadow-purple-500/25`}
            >
              상담 신청하기
            </button>
            <button className="md:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};