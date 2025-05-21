import React from 'react';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export const PricingSection = () => {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="pricing" 
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 text-purple-300 rounded-full font-medium text-sm mb-4 border border-white/20">
            요금안내
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            귀사만을 위한 AI 에이전트, 합리적인 비용으로 만나보세요
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            iMate는 투명하고 유연한 요금제로 귀사의 성공적인 AI 도입을 지원합니다.
            초기 구축부터 운영, 유지보수까지 맞춤형 서비스를 제공합니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg shadow-2xl rounded-xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">맞춤 AI 에이전트 제작</h3>
              <p className="text-4xl font-bold text-white mb-1">
                500,000원 <span className="text-lg font-normal text-gray-300">~ (VAT 별도)</span>
              </p>
              <p className="text-sm text-gray-400 mb-4">(기능 및 연동 범위에 따라 변동 가능)</p>
              <p className="text-gray-300 mb-5 leading-relaxed">
                기존 iMate AI 모델들을 기반으로, 귀사의 특정 요구사항과 업무 환경에 최적화된 맞춤형 AI 에이전트를 제작해 드립니다. 
                필요한 기능을 선택하고, 원하는 방식으로 튜닝하여 제공받으세요.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><Check className="h-5 w-5 text-green-400 mr-2" /> 회사 데이터 학습 및 연동</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-400 mr-2" /> 맞춤형 기능 설계 및 개발</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-400 mr-2" /> 기존 시스템(CRM, ERP 등) 연동</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-400 mr-2" /> 전용 관리자 대시보드 제공</li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-300 mb-3">AI 에이전트 운영 및 유지보수</h3>
              <p className="text-4xl font-bold text-white mb-1">
                월 100,000원 <span className="text-lg font-normal text-gray-300">~ (VAT 별도)</span>
              </p>
              <p className="text-sm text-gray-400 mb-4">(사용량 및 추가 기능에 따라 변동 가능)</p>
              <p className="text-gray-300 mb-5 leading-relaxed">
                AI 에이전트의 안정적인 운영, 지속적인 성능 모니터링 및 업데이트, 기술 지원을 포함하는 월별 비용입니다. 
                항상 최상의 컨디션으로 AI 팀원이 업무를 수행할 수 있도록 지원합니다.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><Check className="h-5 w-5 text-green-400 mr-2" /> 서버 인프라 운영 및 관리</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-400 mr-2" /> AI 모델 성능 최적화 및 업데이트</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-400 mr-2" /> 데이터 보안 및 백업</li>
                <li className="flex items-center"><Check className="h-5 w-5 text-green-400 mr-2" /> 정기 리포트 및 기술 지원</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-200 mb-6">
              보다 자세한 견적 및 맞춤형 솔루션은 상담을 통해 안내해 드립니다.
              지금 바로 문의하여 귀사만을 위한 AI 에이전트 도입을 시작하세요!
            </p>
            <Button
              onClick={handleContactClick}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-semibold hover:opacity-95 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 text-lg flex items-center justify-center mx-auto"
              aria-label="맞춤 견적 상담받기"
            >
              맞춤 견적 상담받기
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              <HelpCircle className="h-5 w-5 mr-2 text-purple-300" />
              모든 요금은 VAT 별도이며, 서비스 범위 및 계약 기간에 따라 조정될 수 있습니다. 
              자세한 내용은 문의 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};