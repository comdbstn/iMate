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
    transform: `translateY(${scrollPosition * 0.1}px)`,
  };
  
  const handleFreeTrialClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleConsultationClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-white">
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="max-w-xl text-left md:mr-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 backdrop-blur-sm border border-slate-200 text-slate-700 mb-8 hover:bg-slate-200 transition-all cursor-pointer">
              <Bot className="h-4 w-4" />
              <span>새로운 AI 팀원을 소개합니다</span>
              <Sparkles className="h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={parallaxStyle}>
              <span className="text-slate-800">우리 팀에</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text">
                신입이 들어왔어요
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl">
              AI 어시스턴트로 더 효율적인 업무 환경을 만들어보세요
            </p>
            
            <div className="flex flex-col sm:flex-row justify-start gap-4">
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
                className="px-8 py-4 bg-slate-100 backdrop-blur-sm text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-200 transition-all duration-300 transform hover:scale-105"
                aria-label="상담 신청하기"
              >
                상담 신청하기
              </Button>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:ml-8 flex-shrink-0">
            <img 
              src="/images/jiyu.webp" 
              alt="인사하는 지유 캐릭터" 
              className="w-full max-w-md lg:max-w-lg h-auto rounded-lg"
            />
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
        <div className="w-6 h-10 rounded-full border-2 border-slate-400/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-slate-500/50 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};