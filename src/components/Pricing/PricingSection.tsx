import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ plan }: { plan: any }) => (
  <div
    className={`relative bg-white rounded-2xl overflow-hidden transition-transform hover:transform hover:scale-105 ${
      plan.popular ? 'shadow-xl ring-2 ring-indigo-600' : 'shadow-md'
    }`}
  >
    {plan.popular && (
      <div className="absolute top-0 w-full text-center py-2 bg-indigo-600 text-white text-sm font-medium">
        가장 인기 있는 선택
      </div>
    )}
    <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
      <p className="text-gray-500 mb-5">{plan.title}</p>
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-900">₩{plan.price}</span>
        {plan.price !== '문의' && <span className="text-gray-500">/월</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <div className="flex-shrink-0 text-indigo-600 mr-2">
              <Check className="h-5 w-5" />
            </div>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          plan.popular
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
        }`}
        aria-label={`Select ${plan.name} plan`}
      >
        {plan.cta}
      </button>
    </div>
  </div>
);

export const PricingSection = () => {
  const plans = [
    {
      id: 'jiyu',
      name: '지유',
      title: '고객 상담 전문가',
      price: '199,000',
      features: [
        '실시간 고객 문의 응대',
        '24/7 채팅 상담 지원', 
        '이메일 응대 자동화',
        '감정 분석 리포트',
        '기본 CRM 연동'
      ],
      cta: '지유와 함께하기',
      popular: false
    },
    {
      id: 'team',
      name: '팀 패키지',
      title: '비즈니스 최적화 팀',
      price: '499,000',
      features: [
        'AI 캐릭터 3명 선택 가능',
        '모든 캐릭터 기능 이용',
        '30개 기업 시스템 연동',
        '맞춤형 워크플로우 설정',
        '비즈니스 성과 분석 대시보드',
        '우선 지원 서비스'
      ],
      cta: '팀 꾸리기',
      popular: true
    },
    {
      id: 'custom',
      name: '맞춤형',
      title: '기업 맞춤 솔루션',
      price: '문의',
      features: [
        '무제한 AI 캐릭터 사용',
        '브랜드 캐릭터 맞춤 제작',
        '모든 기업 시스템 연동',
        '완전 맞춤형 프로세스 자동화',
        '전담 기술 지원팀 배정',
        '엔터프라이즈급 보안'
      ],
      cta: '상담 신청하기',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium text-sm mb-4">
            요금제
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            누구와 함께하고 싶으세요?
          </h2>
          <p className="text-xl text-gray-600">
            비즈니스 상황에 맞는 AI 팀원을 선택하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600">
          모든 요금제는 14일 무료 체험을 제공합니다. 신용카드 정보 없이 지금 바로 시작해보세요.
        </div>
      </div>
    </section>
  );
};