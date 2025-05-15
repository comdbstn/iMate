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
            <div className="text-purple-400 mr-2">
              <Bot className="h-7 w-7" />
            </div>
            <span className="text-2xl font-bold text-white">
              iMate<span className="text-purple-400">.</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              AI 팀원들
            </a>
            <a
              href="#benefits"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              특별한 장점
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              요금제
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              도입 과정
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full text-white bg-white/10 hover:bg-white/20 transition-colors">
              무료 체험하기
            </button>
            <button className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition-all transform hover:scale-105 duration-200 shadow-lg shadow-purple-500/25">
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