import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Button from '../common/Button'; // Assuming Button component exists

export const ContactSection = () => {
  const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_pYxixjG'; // Replace with actual Kakao channel URL

  return (
    <section 
      id="contact" 
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-orange-800 to-red-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl animate-pulse -bottom-36 -left-44 opacity-50"></div>
        <div className="absolute w-[400px] h-[400px] bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-600 top-[-50px] -right-24 opacity-40"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-purple-300 rounded-full font-medium text-sm mb-4 border border-white/20">
          지금 바로 시작하세요
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          새로운 AI 팀원을 만나볼 준비가 되셨나요?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          더 궁금한 점이 있거나 맞춤형 AI 에이전트 제작에 대해 논의하고 싶으시다면, 언제든지 iMate 카카오톡 채널로 문의해주세요. <br/>전문가가 친절하게 상담해 드립니다.
        </p>
        <Button
          asLink
          href={KAKAO_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-semibold hover:opacity-95 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/30 text-xl inline-flex items-center justify-center mx-auto"
          aria-label="iMate 카카오톡 채널로 문의하기"
        >
          <MessageCircle className="mr-3 h-6 w-6" />
          iMate 카카오톡 채널 문의하기
          <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};