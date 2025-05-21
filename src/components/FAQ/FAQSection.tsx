import React, { useState, useEffect } from 'react';
import { ChevronDown, MessageCircle, HelpCircle, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

type FAQItemType = {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
  schema?: object; 
};

const faqData: FAQItemType[] = [
  {
    id: 'what-is-ai-agent',
    question: 'AI 에이전트가 정확히 무엇인가요?',
    answer: 'AI 에이전트는 특정 목표를 달성하기 위해 자율적으로 계획하고, 배우고, 행동하는 지능형 시스템입니다. 단순 반복 작업을 자동화하는 것을 넘어, 복잡한 문제를 해결하고 사용자와 상호작용하며 실제 업무를 수행할 수 있습니다. 예를 들어, 고객 문의에 응대하거나, 데이터를 분석하여 보고서를 작성하거나, 마케팅 캠페인을 관리하는 등의 일을 할 수 있습니다.',
    schema: {
      "@type": "Question",
      name: "AI 에이전트가 정확히 무엇인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI 에이전트는 특정 목표를 달성하기 위해 자율적으로 계획하고, 배우고, 행동하는 지능형 시스템입니다. 단순 반복 작업을 자동화하는 것을 넘어, 복잡한 문제를 해결하고 사용자와 상호작용하며 실제 업무를 수행할 수 있습니다. 예를 들어, 고객 문의에 응대하거나, 데이터를 분석하여 보고서를 작성하거나, 마케팅 캠페인을 관리하는 등의 일을 할 수 있습니다."
      }
    }
  },
  {
    id: 'how-to-use',
    question: 'iMate AI 에이전트는 어떻게 사용하나요?',
    answer: 'iMate AI 에이전트는 귀사의 기존 업무 시스템(CRM, ERP, 메신저 등)과 유연하게 연동됩니다. 별도의 복잡한 설치 과정 없이 간단한 설정을 통해 바로 사용을 시작할 수 있습니다. 또한, 직관적인 대시보드를 통해 AI 에이전트의 활동을 모니터링하고 관리할 수 있으며, 필요에 따라 전문가의 지원도 받으실 수 있습니다.',
    schema: {
      "@type": "Question",
      name: "iMate AI 에이전트는 어떻게 사용하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iMate AI 에이전트는 귀사의 기존 업무 시스템(CRM, ERP, 메신저 등)과 유연하게 연동됩니다. 별도의 복잡한 설치 과정 없이 간단한 설정을 통해 바로 사용을 시작할 수 있습니다. 또한, 직관적인 대시보드를 통해 AI 에이전트의 활동을 모니터링하고 관리할 수 있으며, 필요에 따라 전문가의 지원도 받으실 수 있습니다."
      }
    }
  },
  {
    id: 'customization',
    question: '우리 회사에 맞는 맞춤형 AI 에이전트 제작이 가능한가요?',
    answer: '네, 가능합니다. iMate는 각 비즈니스의 특성과 요구사항에 맞춰 AI 에이전트를 맞춤 제작해 드립니다. 업종별 전문 지식 학습, 기업 문화 및 브랜드 톤앤매너 적용, 특정 업무 프로세스 자동화 등 세부적인 부분까지 고려하여 최적의 AI 파트너를 만들어 드립니다. 전문가와의 상담을 통해 자세한 내용을 확인하세요.',
    schema: {
      "@type": "Question",
      name: "우리 회사에 맞는 맞춤형 AI 에이전트 제작이 가능한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, 가능합니다. iMate는 각 비즈니스의 특성과 요구사항에 맞춰 AI 에이전트를 맞춤 제작해 드립니다. 업종별 전문 지식 학습, 기업 문화 및 브랜드 톤앤매너 적용, 특정 업무 프로세스 자동화 등 세부적인 부분까지 고려하여 최적의 AI 파트너를 만들어 드립니다. 전문가와의 상담을 통해 자세한 내용을 확인하세요."
      }
    }
  },
  {
    id: 'data-security',
    question: '데이터 보안은 어떻게 이루어지나요?',
    answer: 'iMate는 고객 데이터 보안을 최우선으로 생각합니다. 최신 암호화 기술을 적용하고 엄격한 데이터 접근 관리 정책을 시행하여 고객님의 소중한 정보가 안전하게 보호될 수 있도록 만전을 기하고 있습니다. 또한, 관련 법규 및 규제를 철저히 준수하며, 정기적인 보안 감사를 통해 시스템의 안정성을 확보합니다.',
    schema: {
      "@type": "Question",
      name: "데이터 보안은 어떻게 이루어지나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iMate는 고객 데이터 보안을 최우선으로 생각합니다. 최신 암호화 기술을 적용하고 엄격한 데이터 접근 관리 정책을 시행하여 고객님의 소중한 정보가 안전하게 보호될 수 있도록 만전을 기하고 있습니다. 또한, 관련 법규 및 규제를 철저히 준수하며, 정기적인 보안 감사를 통해 시스템의 안정성을 확보합니다."
      }
    }
  },
  {
    id: 'cost',
    question: 'AI 에이전트 도입 비용은 어느 정도인가요?',
    answer: 'AI 에이전트 도입 비용은 필요한 기능, 연동 시스템의 복잡성, 데이터 처리량 등에 따라 달라집니다. iMate는 합리적이고 투명한 요금 정책을 가지고 있으며, 초기 맞춤 제작 비용과 월별 운영/유지보수 비용으로 구성됩니다. 자세한 내용은 \'요금안내\' 섹션을 참고하시거나, 맞춤 견적 상담을 통해 확인하실 수 있습니다.',
    schema: {
      "@type": "Question",
      name: "AI 에이전트 도입 비용은 어느 정도인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI 에이전트 도입 비용은 필요한 기능, 연동 시스템의 복잡성, 데이터 처리량 등에 따라 달라집니다. iMate는 합리적이고 투명한 요금 정책을 가지고 있으며, 초기 맞춤 제작 비용과 월별 운영/유지보수 비용으로 구성됩니다. 자세한 내용은 \'요금안내\' 섹션을 참고하시거나, 맞춤 견적 상담을 통해 확인하실 수 있습니다."
      }
    }
  },
];

const FAQItem = ({ item, onToggle, delay = 0 }: { item: FAQItemType; onToggle: (id: string) => void; delay?: number; }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-lg shadow-lg transition-all duration-500 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={() => onToggle(item.id)}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors duration-200"
        aria-expanded={item.isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        <ChevronDown 
          className={`h-6 w-6 text-purple-300 transition-transform duration-300 ${item.isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div 
        id={`faq-answer-${item.id}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${item.isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 pt-0">
          <p className="text-gray-300 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.05 });
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.2 });
  const [descriptionRef, isDescriptionVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.2 });
  const [buttonRef, isButtonVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  const handleToggle = (id: string) => {
    setOpenFAQ(prevOpen => (prevOpen === id ? null : id));
  };

  const handleContactScroll = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(item => item.schema).filter(Boolean),
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-sky-900 via-teal-800 to-slate-900 text-white relative overflow-hidden"
    >
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-30' : 'opacity-0'} -top-20 -left-48`}></div>
        <div className={`absolute w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-20 delay-500' : 'opacity-0'} bottom-[-100px] -right-32`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div 
            ref={titleRef} // titleRef를 h2 대신 이 div에 적용 (애니메이션 일관성)
            className={`transition-all duration-500 ${isTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-teal-300 mb-4 text-sm">
              <HelpCircle className="h-4 w-4" />
              <span>자주 묻는 질문</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              궁금한 점이 있으신가요? <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 text-transparent bg-clip-text">무엇이든 물어보세요!</span>
            </h2>
          </div>
          <p 
            ref={descriptionRef}
            className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-500 delay-100 ${isDescriptionVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            iMate AI 에이전트 서비스에 대해 자주 묻는 질문과 답변입니다. 
            더 궁금한 점이 있다면 언제든지 문의해주세요.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          {faqData.map((item, index) => (
            <FAQItem 
              key={item.id} 
              item={{ ...item, isOpen: openFAQ === item.id }} 
              onToggle={handleToggle} 
              delay={200 + index * 100} // 순차적 애니메이션
            />
          ))}
        </div>

        <div 
          ref={buttonRef}
          className={`text-center transition-all duration-500 delay-300 ${isButtonVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          <p className="text-lg text-gray-300 mb-6">더 궁금한 점이나 특정 요구사항이 있으신가요?</p>
          <Button 
            onClick={handleContactScroll} 
            className="px-10 py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-600 text-white rounded-full font-semibold text-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30 flex items-center justify-center mx-auto"
            aria-label="문의하기"
          >
            전문가에게 직접 문의하기
            <MessageCircle className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};