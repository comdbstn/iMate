import React, { useEffect } from 'react';
import { CheckCircle, MessageCircle, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const IncludedFeature = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number; }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLLIElement>({ threshold: 0.2 });
  return (
    <li 
      ref={ref}
      className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-3'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
      <span className="text-gray-300">{children}</span>
    </li>
  );
};

export const PricingSection = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.05 });
  const [badgeRef, isBadgeVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.2 });
  const [descriptionRef, isDescriptionVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.2 });
  const [pricingBoxRef, isPricingBoxVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const [buttonRef, isButtonVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  const handleContactScroll = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-sky-800 to-purple-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute w-[700px] h-[700px] bg-sky-500/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-40' : 'opacity-0'} -top-52 -left-72`}></div>
        <div className={`absolute w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-30 delay-500' : 'opacity-0'} bottom-[-250px] right-[-220px]`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div 
          ref={badgeRef}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sky-300 mb-6 text-sm transition-all duration-500 ${isBadgeVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          <Sparkles className="h-4 w-4" />
          <span>맞춤형 AI 에이전트</span>
        </div>

        <h2 
          ref={titleRef}
          className={`text-3xl md:text-5xl font-bold text-white mb-6 transition-all duration-500 delay-100 ${isTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          합리적인 비용으로 <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-purple-400 text-transparent bg-clip-text">최고의 AI 팀원</span>을 만나보세요
        </h2>
        <p 
          ref={descriptionRef}
          className={`text-lg md:text-xl text-gray-300 max-w-2xl mb-12 md:mb-16 transition-all duration-500 delay-200 ${isDescriptionVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          iMate는 투명하고 유연한 요금제로 귀사의 성공적인 AI 도입을 지원합니다. 
          전문가의 상담을 통해 비즈니스 목표와 예산에 가장 적합한 AI 에이전트를 설계해 드립니다.
        </p>

        <div 
          ref={pricingBoxRef}
          className={`bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/10 p-8 md:p-12 max-w-3xl mx-auto transition-all duration-700 delay-300 ${isPricingBoxVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-purple-300 mb-2">맞춤형 AI 에이전트 제작</h3>
          <p className="text-4xl md:text-5xl font-extrabold text-white mb-1">
            500,000<span className="text-2xl font-normal text-gray-400">원~</span>
          </p>
          <p className="text-sm text-gray-400 mb-6">(기능 및 연동 범위에 따라 변동)</p>
          
          <h4 className="text-xl font-semibold text-sky-300 mt-8 mb-1">AI 에이전트 운영 및 유지보수</h4>
          <p className="text-3xl font-bold text-white mb-6">
            월 100,000<span className="text-xl font-normal text-gray-400">원~</span>
          </p>

          <div className="border-t border-white/10 my-8"></div>

          <h4 className="text-lg font-semibold text-white mb-4">포함 서비스:</h4>
          <ul className="space-y-3 mb-8">
            <IncludedFeature delay={400}>비즈니스 요구사항 분석 및 AI 컨설팅</IncludedFeature>
            <IncludedFeature delay={450}>맞춤 AI 에이전트 설계 및 개발</IncludedFeature>
            <IncludedFeature delay={500}>기존 시스템 연동 (CRM, ERP, API 등)</IncludedFeature>
            <IncludedFeature delay={550}>클라우드 인프라 구축 및 배포</IncludedFeature>
            <IncludedFeature delay={600}>AI 모델 학습 및 최적화</IncludedFeature>
            <IncludedFeature delay={650}>정기적인 성능 모니터링 및 업데이트</IncludedFeature>
            <IncludedFeature delay={700}>전용 기술 지원 및 교육</IncludedFeature>
          </ul>

          <p className="text-gray-400 text-sm mb-8">
            AI 에이전트의 복잡성, 필요한 기능, 연동 시스템의 종류, 예상 사용량 등에 따라 최종 견적이 달라질 수 있습니다.
            정확한 비용은 전문가와의 심층 상담을 통해 산정됩니다.
          </p>
          
          <div 
            ref={buttonRef}
            className={`text-center transition-all duration-500 delay-800 ${isButtonVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            <Button 
              onClick={handleContactScroll}
              className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-sky-500 via-teal-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-teal-500/30 flex items-center justify-center mx-auto"
              aria-label="맞춤 견적 상담받기"
            >
              맞춤 견적 상담받기
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};