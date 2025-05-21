import React, { useEffect } from 'react';
import { CheckCircle, Terminal, Users, FileText, ShoppingCart, CalendarCheck } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  example,
  delay = 0
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  example?: string; 
  delay?: number;
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`bg-white/5 backdrop-blur-lg shadow-xl rounded-xl p-6 transform transition-all duration-500 hover:scale-105 border border-white/10 hover:shadow-purple-500/20 flex flex-col ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-purple-500/10 text-purple-400 rounded-full mr-4 flex-shrink-0">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex-grow">
        <p className="text-gray-300 mb-3">{description}</p>
        {example && (
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-sm text-purple-300 font-medium mb-1">예시:</p>
            <p className="text-sm text-gray-300 bg-slate-700/60 p-3 rounded-md">{example}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const AiAgentIntroSection = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.05 });
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.2 });
  const [descriptionRef, isDescriptionVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.2 });

  return (
    <section 
      id="ai-agent-intro"
      ref={sectionRef}
      className="py-20 md:py-32 bg-slate-800 text-white relative overflow-hidden smooth-bg-transition"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900 opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            ref={titleRef}
            className={`text-3xl md:text-5xl font-bold text-white mb-4 transition-all duration-500 ${isTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            AI 에이전트, <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">무엇이 다를까요?</span>
          </h2>
          <p 
            ref={descriptionRef}
            className={`text-lg md:text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-500 delay-100 ${isDescriptionVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            단순한 챗봇을 넘어, AI 에이전트는 특정 목표를 달성하기 위해 자율적으로 계획하고 실행하는 지능형 시스템입니다. 
            복잡한 작업을 처리하고, 다양한 도구와 서비스를 활용하여 실제 업무를 수행할 수 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Terminal className="w-6 h-6" />} 
            title="자율적 작업 수행"
            description="정해진 규칙과 목표에 따라 스스로 판단하고 작업을 실행합니다. 사람의 개입을 최소화하여 효율성을 극대화합니다."
            example="수신된 이메일을 분석하여 중요도에 따라 분류하고, 특정 키워드가 포함된 경우 담당자에게 알림을 보낸 후 CRM에 기록합니다."
            delay={200}
          />
          <FeatureCard 
            icon={<Users className="w-6 h-6" />} 
            title="다양한 시스템 연동"
            description="기존에 사용하던 CRM, ERP, 데이터베이스, API 등 다양한 외부 시스템 및 도구와 유연하게 연동하여 업무 범위를 확장합니다."
            example="고객 문의 채널(웹챗, 카카오톡)에서 접수된 CS 내용을 바탕으로 티켓을 생성하고, 담당자에게 할당한 후 진행 상황을 고객에게 자동으로 업데이트합니다."
            delay={300}
          />
          <FeatureCard 
            icon={<CheckCircle className="w-6 h-6" />} 
            title="목표 지향적 행동"
            description="단순 응답 생성을 넘어, 구체적인 목표(예: 판매 증대, 고객 만족도 향상)를 달성하기 위한 일련의 행동을 계획하고 실행합니다."
            example="정기적으로 재고 현황을 파악하여 부족한 상품이 발생하면, 사전에 설정된 공급업체에 자동으로 발주 요청을 보냅니다."
            delay={400}
          />
          <FeatureCard 
            icon={<FileText className="w-6 h-6" />} 
            title="문서 처리 및 요약"
            description="대량의 문서(PDF, 워드, 텍스트 파일 등)를 이해하고, 핵심 내용을 요약하거나 필요한 정보를 추출하여 보고서를 생성합니다."
            example="온라인 쇼핑몰에서 고객의 이전 구매 내역과 장바구니 상품을 기반으로 개인화된 할인 쿠폰을 발행하고, 이메일로 발송합니다."
            delay={500}
          />
          <FeatureCard 
            icon={<ShoppingCart className="w-6 h-6" />} 
            title="개인화된 고객 경험 제공"
            description="고객 데이터를 분석하여 맞춤형 상품을 추천하거나, 개인의 상황에 맞는 정보와 지원을 제공하여 만족도를 높입니다."
            example="온라인 쇼핑몰에서 고객의 이전 구매 내역과 장바구니 상품을 기반으로 개인화된 할인 쿠폰을 발행하고, 이메일로 발송합니다."
            delay={600}
          />
          <FeatureCard 
            icon={<CalendarCheck className="w-6 h-6" />} 
            title="예약 및 일정 관리 자동화"
            description="고객의 요청에 따라 가능한 시간을 확인하고, 약속을 잡거나 변경하며, 캘린더에 자동으로 일정을 등록하고 알림을 보냅니다."
            example="규칙에 따라 CS를 진행하여 예약을 받고 Google Sheet에 예약 목록을 직접 업로드합니다."
            delay={700}
          />
        </div>

        <div className="mt-16 text-center">
          <p className={`text-lg text-gray-200 transition-all duration-500 delay-800 ${isSectionVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}>
            iMate는 이러한 AI 에이전트 기술을 활용하여 귀사의 비즈니스에 실질적인 가치를 제공합니다.
          </p>
        </div>
      </div>
    </section>
  );
}; 