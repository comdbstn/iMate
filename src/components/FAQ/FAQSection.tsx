import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ faq, isOpen, onClick }: { faq: any; isOpen: boolean; onClick: () => void }) => (
  <div className="mb-4 border-b border-gray-200 pb-4 last:border-b-0">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full text-left py-4"
      aria-expanded={isOpen}
    >
      <h3 className="text-lg font-medium text-gray-900">
        {faq.question}
      </h3>
      <div className="text-indigo-600 ml-4">
        {isOpen ? (
          <Minus className="h-5 w-5" />
        ) : (
          <Plus className="h-5 w-5" />
        )}
      </div>
    </button>
    <div
      className={`transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="text-gray-600 pb-4">
        {faq.answer}
      </p>
    </div>
  </div>
);

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: '기존 시스템과 연동이 가능한가요?',
      answer: '네, 가능합니다. 아이메이트는 주요 CRM, 이메일 마케팅 도구, 캘린더 앱, 문서 관리 시스템, 메신저 등 다양한 비즈니스 도구와 연동됩니다. API 연동을 통해 기존에 사용하시던 모든 시스템과 원활하게 통합할 수 있습니다.'
    },
    {
      question: 'AI 캐릭터를 커스터마이징할 수 있나요?',
      answer: '물론입니다. 기본 제공되는 AI 캐릭터의 성격, 스타일, 전문 분야를 조정할 수 있습니다. 특히 엔터프라이즈 플랜에서는 완전히 새로운 AI 캐릭터를 귀사의 브랜드 톤앤매너에 맞춰 제작해 드립니다.'
    },
    {
      question: '데이터 보안은 어떻게 관리되나요?',
      answer: '아이메이트는 데이터 보안을 최우선으로 생각합니다. 모든 데이터는 암호화되어 전송 및 저장되며, 국내 보안 규정을 철저히 준수합니다. 또한 고객 데이터는 모델 학습에 사용되지 않으며, 필요에 따라 온프레미스 설치 옵션도 제공합니다.'
    },
    {
      question: '어떤 규모의 기업에 적합한가요?',
      answer: '아이메이트는 소규모 스타트업부터 대기업까지 모든 규모의 기업에 적합합니다. 1인 프리랜서는 단일 AI 캐릭터로 시작할 수 있고, 중소기업은 팀 패키지를, 대기업은 맞춤형 솔루션을 선택하여 비즈니스 규모와 필요에 맞게 확장할 수 있습니다.'
    },
    {
      question: '기술 지원은 어떻게 받을 수 있나요?',
      answer: '모든 구독자에게 이메일 지원이 제공되며, 팀 패키지부터는 실시간 채팅 지원이 포함됩니다. 맞춤형 플랜에서는 전담 기술 지원팀이 배정되어 24시간 지원을 받으실 수 있습니다. 또한 모든 고객에게 상세한 문서와 비디오 튜토리얼을 제공합니다.'
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            자주 묻는 질문
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            />
          ))}
        </div>
      </div>
    </section>
  );
};