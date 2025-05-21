import React, { useState } from 'react';
import { Check, Cpu, Settings, LineChart, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const StepCard = ({ step, index }: { step: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`flex flex-col items-center text-center md:w-1/3 mb-10 md:mb-0 transition-all duration-300 ${
        isHovered ? 'transform scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={`w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
        isHovered ? 'animate-pulse' : ''
      }`}>
        {React.cloneElement(step.icon, { className: step.icon.props.className.replace('text-white', 'text-purple-300') })}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">
        {step.title}
      </h3>
      <p className="text-gray-300">
        {step.description}
      </p>
    </div>
  );
};

export const ProcessSection = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    rootMargin: '0px'
  });
  const [stepsRef, areStepsVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2 
  });
  const [buttonRef, isButtonVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3
  });

  const steps = [
    {
      id: 'select',
      icon: <Check className="h-8 w-8 text-white" />,
      title: 'AI 캐릭터 선택',
      description: '업무에 가장 필요한 AI 팀원을 선택하세요. 다양한 특기를 가진 캐릭터 중에서 골라보세요.'
    },
    {
      id: 'connect',
      icon: <Settings className="h-8 w-8 text-white animate-spin-slow" />,
      title: '맞춤 연동',
      description: '귀사의 시스템에 맞게 맞춤 AI Agent를 제작하여 제공합니다.'
    },
    {
      id: 'use',
      icon: <LineChart className="h-8 w-8 text-white" />,
      title: '업무에 활용',
      description: '바로 업무에 투입하고 성과를 측정해보세요. 시간이 지날수록 더 효율적으로 변합니다.'
    },
  ];

  const handleStartNow = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef} 
      id="process" 
      className={`py-20 md:py-32 bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900 text-white relative overflow-hidden section-animate from-left ${isSectionVisible ? 'appear' : ''}`}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-200 top-10 -right-44 opacity-50"></div>
        <div className="absolute w-[350px] h-[350px] bg-sky-400/10 rounded-full blur-3xl animate-pulse delay-900 bottom-24 -left-36 opacity-40"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 section-animate scale-in ${isSectionVisible ? 'appear' : ''}`}>
          <span className="inline-block px-4 py-2 bg-white/10 text-purple-300 rounded-full font-medium text-sm mb-4 border border-white/20">
            시작하기
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            아이메이트와 함께하는 3단계
          </h2>
          <p className="text-xl text-gray-300">
            복잡한 설정 없이, 빠르게 시작하세요
          </p>
        </div>

        <div 
          ref={stepsRef} 
          className={`flex flex-col md:flex-row justify-between max-w-4xl mx-auto section-animate reveal-children ${areStepsVisible ? 'appear' : ''}`}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <StepCard step={step} index={index} />
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center md:w-auto">
                  <ArrowRight className="h-8 w-8 text-gray-600 animate-pulse" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div 
          ref={buttonRef} 
          className={`mt-16 text-center section-animate from-bottom ${isButtonVisible ? 'appear' : ''}`}
          style={{ transitionDelay: '0.3s' }}
        >
          <button 
            onClick={handleStartNow}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-semibold hover:opacity-95 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 text-lg flex items-center justify-center mx-auto"
            aria-label="Start Now"
          >
            지금 바로 시작하기
            <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};