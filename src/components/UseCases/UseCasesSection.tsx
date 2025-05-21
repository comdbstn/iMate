import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, FileText, Sparkles } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const TabButton = ({ onClick, isActive }: { onClick: () => void; isActive: boolean; }) => (
  <button
    onClick={onClick}
    className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-emerald-400 scale-125' : 'bg-white/20 hover:bg-white/30'}`}
    aria-pressed={isActive}
    aria-label={isActive ? "Current slide" : "Go to slide"}
  />
);

const UseCaseCard = ({ useCase, isActive, delay = 0 }: { useCase: any; isActive: boolean; delay?: number; }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-slate-800/60 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden shadow-xl hover:shadow-emerald-500/20 transition-all duration-500 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 bg-white/10 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30">
              {useCase.company}
            </span>
            <div className={`p-2 rounded-full flex items-center justify-center shadow-md bg-emerald-500/20`}>
              {React.cloneElement(useCase.character1.icon, { className: 'h-6 w-6 text-emerald-300' })}
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {useCase.title}
          </h3>
          <blockquote className="text-gray-300 text-lg leading-relaxed border-l-4 border-emerald-500/70 pl-6 pr-2 py-2 bg-slate-700/30 rounded-r-md">
            \"{useCase.testimonial}\"
          </blockquote>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 rounded-full"></div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-600 rounded-xl transform transition-transform duration-500 opacity-60 group-hover:opacity-80 group-hover:rotate-1"></div>
          <img 
            src={useCase.image.replace('.jpeg', '.webp')}
            alt={useCase.title}
            className="relative rounded-xl w-full h-[360px] md:h-[400px] object-cover transform shadow-2xl transition-transform duration-500 group-hover:-rotate-1"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export const UseCasesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.05 });
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.2 });
  const [descriptionRef, isDescriptionVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.2 });
  const [carouselControlsRef, isCarouselControlsVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  
  const useCases = [
    {
      id: 'startup',
      company: '스타트업 A사',
      title: '지유 도입 후 고객 상담 효율 200% 증가',
      testimonial: '24시간 고객 문의에 신속하게 응답하면서 CS팀의 업무 부담이 크게 줄었습니다. AI 지유 덕분에 고객 만족도와 재구매율까지 상승했어요!',
      image: 'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      character1: {
        name: '지유',
        icon: <MessageCircle />,
      }
    },
    {
      id: 'enterprise',
      company: '중견기업 B사',
      title: '소연 AI와 문서 작업 자동화, 야근 없는 삶!',
      testimonial: '방대한 양의 계약서 검토와 보고서 요약 업무를 AI 소연이가 대신해주니, 팀원들이 핵심 전략 수립에 더 많은 시간을 투자할 수 있게 되었습니다.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      character1: {
        name: '소연',
        icon: <FileText />,
      }
    }
  ];
  
  const activeCase = useCases[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % useCases.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + useCases.length) % useCases.length);
  };

  return (
    <section 
      id="use-cases"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-lime-900 via-emerald-800 to-teal-900 text-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-30' : 'opacity-0'} -top-40 -left-48`}></div>
        <div className={`absolute w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-20 delay-500' : 'opacity-0'} bottom-[-200px] -right-36`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div 
            ref={titleRef} 
            className={`transition-all duration-500 ${isTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-300 mb-4 text-sm">
              <Sparkles className="h-4 w-4" />
              <span>고객 성공 사례</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              iMate와 함께 비즈니스를 <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">혁신한 이야기</span>
            </h2>
          </div>
          <p 
            ref={descriptionRef}
            className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-500 delay-100 ${isDescriptionVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            다양한 산업 분야의 기업들이 iMate AI 에이전트를 통해 어떻게 성과를 개선하고 있는지 확인해보세요.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <UseCaseCard useCase={activeCase} isActive={true} delay={isSectionVisible ? 200 : 0} />
          
          <div 
            ref={carouselControlsRef}
            className={`flex justify-center items-center mt-8 md:mt-12 space-x-4 transition-all duration-500 delay-300 ${isCarouselControlsVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="이전 사례 보기"
              disabled={useCases.length <= 1}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2.5 items-center">
              {useCases.map((_, index) => (
                <TabButton
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  isActive={index === activeIndex}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="다음 사례 보기"
              disabled={useCases.length <= 1}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};