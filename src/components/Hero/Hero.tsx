import React, { useEffect, useState } from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentRef, isContentVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.1}px)`,
  };
  
  const handleFreeTrialClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleConsultationClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/90 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse -top-48 -left-24"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700 top-96 right-12"></div>
        <div className="absolute w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000 bottom-0 left-1/2"></div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="container mx-auto px-4 md:px-8 relative z-10 h-screen flex items-center">
        <div className={`max-w-4xl mx-auto text-center section-animate fade-in ${isContentVisible ? 'appear' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8 animate-fade-in-up hover:bg-white/20 transition-all cursor-pointer">
            <Bot className="h-4 w-4 animate-pulse" />
            <span>새로운 AI 팀원을 소개합니다</span>
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200" style={parallaxStyle}>
            <span className="text-white">우리 팀에</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              신입이 들어왔어요
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            AI 어시스턴트로 더 효율적인 업무 환경을 만들어보세요
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Button
              onClick={handleFreeTrialClick}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-500 text-white rounded-full font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              aria-label="무료 체험하기"
            >
              무료 체험하기
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleConsultationClick}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              aria-label="상담 신청하기"
            >
              상담 신청하기
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/4 right-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-float animation-delay-1000"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-hidden="true" 
        role="presentation"
        onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};