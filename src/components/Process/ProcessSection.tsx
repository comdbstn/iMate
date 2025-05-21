import React, { useEffect } from 'react';
import { Users, MessageSquare, Zap, Rocket, CheckCircle, ChevronRight, Bot, FileText, Settings, MessageCircle as ContactIcon } from 'lucide-react';
import Button from '../common/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const StepCard = ({ icon, title, description, badge, delay = 0 }: { icon: React.ReactNode; title: string; description: string; badge: string; delay?: number; }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={`bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-rose-500/20 hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-rose-500/10 rounded-full text-rose-400">{icon}</div>
        <span className="px-3 py-1 text-xs bg-rose-500/20 text-rose-300 rounded-full font-medium">{badge}</span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export const ProcessSection = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.05 });
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.2 });
  const [descriptionRef, isDescriptionVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.2 });
  const [buttonRef, isButtonVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  const handleContactScroll = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="process"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-purple-900 via-rose-800 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-40' : 'opacity-0'} -top-40 -right-52`}></div>
        <div className={`absolute w-[450px] h-[450px] bg-purple-400/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-30 delay-500' : 'opacity-0'} bottom-[-180px] -left-36`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div 
            ref={titleRef}
            className={`transition-all duration-500 ${isTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-rose-300 mb-4 text-sm">
              <Rocket className="h-4 w-4" />
              <span>AI 에이전트 도입 과정</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              최적의 AI 파트너, <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">iMate와 함께 시작하세요</span>
            </h2>
          </div>
          <p 
            ref={descriptionRef}
            className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-500 delay-100 ${isDescriptionVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            전문가 팀이 귀사의 비즈니스 환경을 분석하고, 맞춤형 AI 에이전트를 설계하여 성공적인 디지털 전환을 지원합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          <StepCard 
            icon={<MessageSquare size={28} />} 
            title="요구사항 분석 및 컨설팅"
            description="비즈니스 목표, 현재 시스템, 데이터 환경을 분석하여 최적의 AI 솔루션을 제안합니다."
            badge="Step 1"
            delay={200}
          />
          <StepCard 
            icon={<Bot size={28} />} 
            title="맞춤 AI 에이전트 설계"
            description="분석 결과를 바탕으로 필요한 기능, 연동 방식, 학습 데이터 등을 포함한 상세 설계를 진행합니다."
            badge="Step 2"
            delay={300}
          />
          <StepCard 
            icon={<Settings size={28} />} 
            title="AI 에이전트 개발 및 연동"
            description="귀사의 시스템에 맞게 맞춤 AI 에이전트를 제작하고, 기존 워크플로우에 통합합니다."
            badge="Step 3"
            delay={400}
          />
          <StepCard 
            icon={<CheckCircle size={28} />} 
            title="테스트, 배포 및 최적화"
            description="철저한 테스트 후 안정적으로 배포하며, 지속적인 모니터링과 업데이트로 성능을 최적화합니다."
            badge="Step 4"
            delay={500}
          />
        </div>

        <div 
          ref={buttonRef}
          className={`text-center transition-all duration-500 delay-600 ${isButtonVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          <Button 
            onClick={handleContactScroll} 
            className="px-10 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-pink-500/30 flex items-center justify-center mx-auto"
            aria-label="AI 도입 상담 시작하기"
          >
            AI 도입 상담 시작하기 
            <ContactIcon className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};