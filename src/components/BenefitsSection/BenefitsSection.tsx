import React, { useEffect } from 'react';
import { ThumbsUp, Zap, Clock, BarChart, Sparkles, Lightbulb } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const BenefitCard = ({ icon, title, description, delay = 0 }: { icon: React.ReactNode; title: string; description: string; delay?: number; }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:shadow-yellow-500/20 hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-400 w-fit mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export const BenefitsSection = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.05 });
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.2 });
  const [descriptionRef, isDescriptionVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.2 });

  const benefits = [
    {
      icon: <Zap size={28} />,
      title: '업무 효율성 극대화',
      description: '단순 반복 업무를 자동화하여 직원들이 더 중요한 핵심 업무에 집중할 수 있도록 합니다.',
    },
    {
      icon: <Clock size={28} />,
      title: '24시간 생산성 향상',
      description: 'AI 에이전트는 쉬지 않고 작동하여 시간과 장소에 구애받지 않고 업무를 처리합니다.',
    },
    {
      icon: <BarChart size={28} />,
      title: '비용 절감 효과',
      description: '인력 운영 비용을 줄이고, 업무 처리 속도 향상으로 전반적인 운영 비용을 절감합니다.',
    },
    {
      icon: <ThumbsUp size={28} />,
      title: '고객 만족도 증대',
      description: '신속하고 정확한 고객 응대로 대기 시간을 줄이고, 개인화된 서비스로 만족도를 높입니다.',
    },
    {
      icon: <Lightbulb size={28} />,
      title: '데이터 기반 의사결정',
      description: '방대한 데이터를 분석하여 비즈니스 성장을 위한 통찰력 있는 정보를 제공합니다.',
    },
    {
      icon: <Sparkles size={28} />,
      title: '새로운 비즈니스 기회 창출',
      description: 'AI 기술을 활용하여 기존에는 불가능했던 새로운 서비스와 가치를 창출합니다.',
    },
  ];

  return (
    <section 
      id="benefits"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-orange-900 via-yellow-800 to-lime-900 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-30' : 'opacity-0'} -top-32 -right-40`}></div>
        <div className={`absolute w-[450px] h-[450px] bg-lime-400/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-20 delay-500' : 'opacity-0'} bottom-[-150px] -left-32`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div 
            ref={titleRef} // titleRef를 h2 대신 이 div에 적용
            className={`transition-all duration-500 ${isTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-yellow-300 mb-4 text-sm">
              <Sparkles className="h-4 w-4" />
              <span>iMate 도입 효과</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              AI 에이전트가 만드는 <span className="bg-gradient-to-r from-yellow-400 via-lime-400 to-green-400 text-transparent bg-clip-text">놀라운 변화</span>
            </h2>
          </div>
          <p 
            ref={descriptionRef}
            className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-500 delay-100 ${isDescriptionVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            iMate AI 에이전트 도입을 통해 귀사의 비즈니스는 업무 효율성 증대, 비용 절감, 고객 만족도 향상 등 다양한 긍정적인 효과를 경험할 수 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 