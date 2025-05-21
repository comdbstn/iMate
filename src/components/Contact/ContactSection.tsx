import React from 'react';
import Button from '../common/Button';
// KakaoTalk 아이콘 (lucide-react에 없으므로, 필요시 커스텀 SVG 또는 다른 아이콘 라이브러리 사용)
// 임시로 메시지 아이콘 사용 또는 텍스트 버튼으로만 구성
import { MessageSquareText } from 'lucide-react'; // 예시 아이콘

export const ContactSection = () => {
  // 폼 관련 상태 및 핸들러 제거

  const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_YourChannelId'; // TODO: 실제 카카오 채널 URL로 교체해주세요.

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-700" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            지금 바로 새로운 AI 팀원을 만나보세요!
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            더 궁금한 점이 있으시거나, 귀사의 비즈니스에 iMate를 어떻게 적용할 수 있을지 논의하고 싶으신가요? <br />
            아래 버튼을 눌러 카카오톡 채널에서 간편하게 문의하세요.
          </p>
          
          <Button
            asLink // Button 컴포넌트가 asLink prop을 지원한다고 가정 (<a> 태그로 렌더링)
            href={KAKAO_CHANNEL_URL}
            target="_blank" // 새 탭에서 열기
            rel="noopener noreferrer"
            className="px-12 py-6 bg-yellow-400 text-gray-900 rounded-full font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-500/30 text-xl inline-flex items-center gap-3 group"
            aria-label="카카오톡 채널로 문의하기"
          >
            {/* <MessageSquareText className="h-7 w-7 group-hover:animate-bounce" /> */}
            <svg viewBox="0 0 28 28" className="h-7 w-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.702 4.284c-5.263 0-9.526 3.558-9.526 7.952 0 2.766 1.706 5.21 4.312 6.698-.215.968-.709 2.305-2.031 3.628-.134.134-.045.368.144.389.33.037.868-.062 1.549-.342.461-.189.896-.445 1.292-.75.068.004.136.006.205.006 1.17 0 2.268-.243 3.258-.687a8.054 8.054 0 002.799.501c5.263 0 9.526-3.558 9.526-7.951s-4.263-7.952-9.526-7.952zm3.02 10.63c-.389.378-.868.566-1.436.566-.547 0-1.026-.188-1.436-.566-.4-.378-.609-.846-.609-1.392 0-.547.209-1.015.609-1.392.39-.388.89-.582 1.436-.582.568 0 1.046.194 1.436.582.4.377.609.845.609 1.392 0 .546-.209 1.014-.609 1.392zm-6.029 0c-.39.378-.878.566-1.446.566-.547 0-1.026-.188-1.426-.566-.4-.378-.609-.846-.609-1.392 0-.547.209-1.015.609-1.392.4-.388.879-.582 1.426-.582.568 0 1.056.194 1.446.582.39.377.609.845.609 1.392 0 .546-.219 1.014-.609 1.392z"/></svg>
            카카오톡으로 문의하기
          </Button>

          <p className="mt-8 text-sm text-indigo-200">
            전문 컨설턴트가 친절하게 상담해 드립니다. (평일 09:00 ~ 18:00)
          </p>
        </div>
      </div>
    </section>
  );
};