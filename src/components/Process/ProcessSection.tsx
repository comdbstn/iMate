import React from 'react';
import { Check, Cpu, Settings, LineChart, ArrowRight } from 'lucide-react';

const StepCard = ({ step }: { step: any }) => (
  <div className="flex flex-col items-center text-center md:w-1/3 mb-10 md:mb-0">
    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
      {step.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">
      {step.title}
    </h3>
    <p className="text-gray-600">
      {step.description}
    </p>
  </div>
);

export const ProcessSection = () => {
  const steps = [
    {
      id: 'select',
      icon: <Check className="h-8 w-8 text-white" />,
      title: 'AI 캐릭터 선택',
      description: '업무에 가장 필요한 AI 팀원을 선택하세요. 다양한 특기를 가진 캐릭터 중에서 골라보세요.'
    },
    {
      id: 'connect',
      icon: <Settings className="h-8 w-8 text-white" />,
      title: '간단한 연동',
      description: '클릭 몇 번으로 현재 사용 중인 시스템과 연동하세요. 기술 지식이 없어도 쉽게 설정할 수 있습니다.'
    },
    {
      id: 'use',
      icon: <LineChart className="h-8 w-8 text-white" />,
      title: '업무에 활용',
      description: '바로 업무에 투입하고 성과를 측정해보세요. 시간이 지날수록 더 효율적으로 변합니다.'
    },
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium text-sm mb-4">
            시작하기
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            아이메이트와 함께하는 3단계
          </h2>
          <p className="text-xl text-gray-600">
            복잡한 설정 없이, 빠르게 시작하세요
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <StepCard step={step} />
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center md:w-auto">
                  <ArrowRight className="h-8 w-8 text-gray-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all transform hover:scale-105 duration-200 shadow-lg"
            aria-label="Start Now"
          >
            지금 바로 시작하기
          </button>
        </div>
      </div>
    </section>
  );
};