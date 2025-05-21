import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem = ({ faq, isOpen, onClick }: { faq: any; isOpen: boolean; onClick: () => void }) => (
  <div className="mb-4 border-b border-white/10 pb-4 last:border-b-0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full text-left py-4 group"
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${faq.id}`}
    >
      <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors" itemProp="name">
        {faq.question}
      </h3>
      <div className="text-purple-300 ml-4 flex-shrink-0">
        {isOpen ? (
          <Minus className="h-5 w-5" />
        ) : (
          <Plus className="h-5 w-5" />
        )}
      </div>
    </button>
    <div
      id={`faq-answer-${faq.id}`}
      role="region"
      aria-labelledby={`faq-question-${faq.id}`}
      className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[500px] opacity-100 pt-2 pb-4' : 'max-h-0 opacity-0'
      }`}
      itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
    >
      <p className="text-gray-300 leading-relaxed" itemProp="text">
        {faq.answer}
      </p>
    </div>
  </div>
);

export const FAQSection = () => {
  const [openStates, setOpenStates] = useState<boolean[]>([]);
  
  const faqs = [
    {
      id: 'faq-1',
      question: 'iMate AI 에이전트는 어떤 종류의 업무를 자동화할 수 있나요?',
      answer: 'iMate AI 에이전트는 고객 서비스 응대, 반복적인 사무 업무, 데이터 입력 및 관리, 콘텐츠 생성, 마케팅 자동화, 정보 검색 및 요약 등 다양한 업무를 자동화할 수 있습니다. 귀사의 특정 요구에 맞춰 기능을 맞춤 설정할 수 있습니다.'
    },
    {
      id: 'faq-2',
      question: '기존에 사용하고 있는 소프트웨어나 시스템과 연동이 가능한가요?',
      answer: '네, 가능합니다. iMate는 CRM, ERP, 이메일, 캘린더, 슬랙, 구글 워크스페이스 등 다양한 업무용 소프트웨어 및 시스템과 API를 통해 유연하게 연동됩니다. 특정 시스템 연동이 필요한 경우 상담 시 문의해주세요.'
    },
    {
      id: 'faq-3',
      question: 'AI 캐릭터의 목소리나 말투를 변경할 수 있나요?',
      answer: '네, 가능합니다. 제공되는 AI 캐릭터의 기본적인 성격과 말투 외에도, 원하시는 톤앤매너(예: 전문적, 친근함 등)를 설정하거나 특정 브랜드 가이드라인에 맞춰 커스터마이징할 수 있습니다. 음성 지원 모델의 경우 목소리 톤과 스타일도 선택 가능합니다.'
    },
    {
      id: 'faq-4',
      question: '데이터 보안은 어떻게 이루어지나요? 민감한 정보도 안전하게 처리되나요?',
      answer: 'iMate는 데이터 보안을 매우 중요하게 생각합니다. 모든 데이터는 전송 중 및 저장 시 암호화되며, 최신 보안 표준과 규정을 준수합니다. 고객사의 데이터는 AI 모델 학습에 재사용되지 않으며, 접근 권한 관리 및 보안 감사를 통해 철저히 관리됩니다. 온프레미스 구축 옵션도 제공하여 데이터 통제권을 강화할 수 있습니다.'
    },
    {
      id: 'faq-5',
      question: 'iMate 도입 비용과 유지보수 비용은 어떻게 되나요?',
      answer: 'iMate 도입 비용은 초기 맞춤 AI 에이전트 제작 비용과 월별 운영 및 유지보수 비용으로 구성됩니다. 제작 비용은 약 50만원부터 시작하며, 기능의 복잡도와 연동 범위에 따라 달라집니다. 월별 유지보수 비용은 약 10만원부터 시작하며, 사용량과 지원 범위에 따라 조정될 수 있습니다. 자세한 내용은 요금제 섹션을 참고하시거나 맞춤 상담을 요청해주세요.'
    },
    {
      id: 'faq-6',
      question: 'AI 에이전트가 저희 회사 업무에 얼마나 도움이 될지 어떻게 알 수 있나요?',
      answer: 'iMate는 상담을 통해 귀사의 업무 프로세스를 분석하고, AI 에이전트 도입으로 얻을 수 있는 구체적인 기대 효과(시간 절약, 비용 감축, 생산성 향상 등)를 예측해 드립니다. 또한, 특정 업무에 대한 PoC(Proof of Concept, 개념 증명)를 진행하여 실제 효과를 검증해 보실 수도 있습니다.'
    },
    {
      id: 'faq-7',
      question: '사용 중 문제가 발생하면 기술 지원은 어떻게 받을 수 있나요?',
      answer: 'iMate는 이메일, 실시간 채팅, 전화 등 다양한 채널을 통해 기술 지원을 제공합니다. 계약 플랜에 따라 전담 매니저가 배정될 수도 있으며, 문제 해결을 위한 원격 지원 및 방문 지원도 가능합니다. 사용자 매뉴얼과 FAQ 자료도 함께 제공됩니다.'
    }
  ];
  
  React.useEffect(() => {
    setOpenStates(new Array(faqs.length).fill(false));
  }, [faqs.length]);

  const toggleFAQ = (index: number) => {
    setOpenStates(prevStates => 
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-teal-900 to-green-900 text-white relative overflow-hidden" itemScope itemType="https://schema.org/FAQPage">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl animate-pulse delay-400 -bottom-48 -right-36 opacity-50"></div>
        <div className="absolute w-[300px] h-[300px] bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000 top-28 -left-28 opacity-40"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-purple-300 rounded-full font-medium text-sm mb-4 border border-white/20">
            <HelpCircle className="h-5 w-5" />
            자주 묻는 질문
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            궁금한 점이 있으신가요?
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            iMate 서비스에 대해 자주 문의하시는 질문과 답변을 모아봤어요.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-xl p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openStates[index]}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};