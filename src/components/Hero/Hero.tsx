import React, { useEffect, useState } from 'react';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';
import Button from '../common/Button';

export const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const textRef = React.useRef<HTMLParagraphElement>(null);
  const buttonsRef = React.useRef<HTMLDivElement>(null);
  
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
    willChange: 'transform',
  };
  
  const handleFreeTrialClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleConsultationClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      ref={sectionRef} 
      className="relative h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden smooth-bg-transition"
    >
      {/* Animated background elements - Adjusted */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[700px] h-[700px] bg-rose-500/10 rounded-full blur-3xl -top-52 -left-72 opacity-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl bottom-[-250px] right-[-220px] opacity-30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`flex flex-col items-center text-center w-full`}>
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-300 mb-8 hover:bg-white/20 transition-all cursor-default`}>
              <Bot className="h-4 w-4" />
              <span>새로운 AI 팀원을 소개합니다</span>
              <Sparkles className="h-4 w-4" />
            </div>

            <h1 
              ref={titleRef}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight`} 
              style={{ ...parallaxStyle }}
            >
              <span className="text-white">우리 팀에</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                신입이 들어왔어요
              </span>
            </h1>

            <p 
              ref={textRef}
              className={`text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto`}
            >
              AI 어시스턴트로 더 효율적인 업무 환경을 만들어보세요
            </p>
            
            <div 
              ref={buttonsRef}
              className={`flex flex-col sm:flex-row justify-center gap-4`}
            >
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        aria-hidden="true" 
        role="presentation"
        onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};