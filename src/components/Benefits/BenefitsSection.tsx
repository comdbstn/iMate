import React from 'react';
import { Check, ZapIcon, BarChart, Globe } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  const [cardRef, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  
  return (
    <div 
      ref={cardRef}
      className={`section-animate scale-in ${isVisible ? 'appear' : ''} bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/10 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-blue-500/20`}
    >
      <div className="bg-blue-500/10 text-blue-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export const BenefitsSection = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
  
  const benefits = [
    {
      icon: <ZapIcon className="h-6 w-6" />,
      title: '맞춤형 AI 팀원',
      description: '각 업무에 특화된 AI 캐릭터로 최적의 업무 환경을 구성하세요. 개인 비서부터 전문 컨설턴트까지 다양한 역할을 수행합니다.'
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: '쉬운 도입과 사용',
      description: '복잡한 설정이나 기술 지식 없이 클릭 몇 번으로 시작할 수 있습니다. 직관적인 인터페이스로 누구나 쉽게 사용할 수 있습니다.'
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: '확장 가능한 솔루션',
      description: '소규모 스타트업부터 대기업까지 비즈니스 규모에 맞게 확장할 수 있습니다. 필요한 기능만 선택해 비용을 최적화하세요.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: '다국어 지원',
      description: '영어, 일본어, 중국어 등 다양한 언어로 전 세계 고객과 소통할 수 있습니다. 언어 장벽 없이 글로벌 비즈니스를 확장하세요.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="benefits" 
      className={`py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden section-animate from-right ${isSectionVisible ? 'appear' : ''}`}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse -top-20 -right-40 opacity-60"></div>
        <div className="absolute w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-3xl animate-pulse delay-500 bottom-10 -left-32 opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 section-animate fade-in ${isTitleVisible ? 'appear' : ''}`}
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-blue-300 rounded-full font-medium text-sm mb-4 border border-white/20">
            주요 혜택
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI 팀원이 가져다주는 이점
          </h2>
          <p className="text-xl text-gray-300">
            아이메이트 팀원들이 여러분의 비즈니스에 가져다줄 변화를 살펴보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};