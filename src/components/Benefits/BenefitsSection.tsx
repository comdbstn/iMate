import React from 'react';
import { UserPlus, Rocket, TrendingUp, Globe } from 'lucide-react';

const BenefitCard = ({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) => (
  <div
    className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
    aria-label={title}
  >
    <div className="mb-6">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export const BenefitsSection = () => {
  const benefits = [
    {
      id: 'customization',
      icon: <UserPlus className="h-8 w-8 text-purple-400" />,
      title: '맞춤형 AI 팀원',
      description: '저희는 모두 다른 특기를 가진 AI 친구들이에요! 고객 상담은 제가, 마케팅은 준호가, 문서 정리는 소연이 도와드릴게요. 필요한 분야에 딱 맞는 전문가와 함께 하세요!'
    },
    {
      id: 'ease',
      icon: <Rocket className="h-8 w-8 text-purple-400" />,
      title: '쉬운 도입과 적용',
      description: '코딩이나 복잡한 설정? 전혀 걱정하지 마세요! 저희는 바로 일할 준비가 되어 있어요. 클릭 몇 번으로 시스템 연동도 끝! 기술적인 지식이 없어도 누구나 쉽게 시작할 수 있어요.'
    },
    {
      id: 'scalability',
      icon: <TrendingUp className="h-8 w-8 text-purple-400" />,
      title: '비즈니스 성장에 맞춘 확장성',
      description: '회사가 성장하면 저희도 함께 성장해요! 필요한 AI 팀원을 하나씩 추가하거나, 업무량이 늘어나면 저희의 능력도 확장할 수 있어요. 언제든 비즈니스 상황에 맞게 조절 가능하답니다!'
    },
    {
      id: 'localization',
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      title: '한국어와 한국 비즈니스에 최적화',
      description: '한국어 이해는 기본이에요! 한국 비즈니스 환경과 문화를 깊이 이해하고 있어서, 외국 AI와는 다르게 정말 한국 기업에 필요한 방식으로 도와드릴 수 있어요.'
    }
  ];

  return (
    <section id="benefits" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full font-medium text-sm mb-4 border border-purple-500/20">
            특별한 점
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            아이메이트의 특별한 장점이에요!
          </h2>
          <p className="text-xl text-gray-400">
            저희 AI 친구들과 함께라면 업무 효율이 확~ 올라갈 거예요!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.id}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};