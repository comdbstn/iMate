import React, { useEffect, useState } from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import Button from '../common/Button';

export const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
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
    transform: `translateY(${scrollPosition * 0.05}px)`,
  };
  
  const handleFreeTrialClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleConsultationClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      {/* Animated background elements - Optional, can be added for consistency */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-3xl animate-pulse -top-48 -left-64 opacity-50"></div>
        <div className="absolute w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700 bottom-[-200px] right-[-200px] opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 h-screen flex items-center justify-center">
        <div className="flex flex-col items-center text-center w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-300 mb-8 hover:bg-white/20 transition-all cursor-default">
              <Bot className="h-4 w-4" />
              <span>새로운 AI 팀원을 소개합니다</span>
              <Sparkles className="h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={parallaxStyle}>
              <span className="text-white">우리 팀에</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                신입이 들어왔어요
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              AI 어시스턴트로 더 효율적인 업무 환경을 만들어보세요
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={handleFreeTrialClick}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-semibold hover:opacity-95 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 text-lg flex items-center justify-center"
                aria-label="무료 체험하기"
              >
                무료 체험하기
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleConsultationClick}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-semibold hover:opacity-95 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 text-lg flex items-center justify-center"
                aria-label="상담 신청하기"
              >
                상담 신청하기
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-hidden="true" 
        role="presentation"
        onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/30 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};