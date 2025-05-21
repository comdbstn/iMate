import React, { useEffect } from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export const ContactSection = () => {
  const KAKAO_CHANNEL_URL = 'https://pf.kakao.com/_pYxixjG'; // Replace with actual Kakao channel URL

  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  const [badgeRef, isBadgeVisible] = useIntersectionObserver<HTMLSpanElement>({ threshold: 0.2 });
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.2 });
  const [descriptionRef, isDescriptionVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.2 });
  const [buttonRef, isButtonVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-700 to-slate-900 text-white smooth-bg-transition"
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute w-[650px] h-[650px] bg-rose-500/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-40' : 'opacity-0'} -bottom-40 -left-52`}></div>
        <div className={`absolute w-[450px] h-[450px] bg-purple-400/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-30 delay-500' : 'opacity-0'} top-[-60px] -right-36`}></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <span 
          ref={badgeRef}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-rose-300 mb-6 text-sm font-medium transition-all duration-500 ${isBadgeVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          <Sparkles className="h-4 w-4" />
          지금 바로 시작하세요
        </span>
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-5xl font-bold text-white mb-6 transition-all duration-500 delay-100 ${isTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          새로운 AI 팀원을 만나볼 준비가 되셨나요?
        </h2>
        <p 
          ref={descriptionRef}
          className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 transition-all duration-500 delay-200 ${isDescriptionVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          더 궁금한 점이 있거나 맞춤형 AI 에이전트 제작에 대해 논의하고 싶으시다면, 언제든지 iMate 카카오톡 채널로 문의해주세요. <br/>전문가가 친절하게 상담해 드립니다.
        </p>
        <div 
          ref={buttonRef}
          className={`transition-all duration-500 delay-300 ${isButtonVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          <Button
            asLink
            href={KAKAO_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white rounded-full font-semibold hover:opacity-95 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-pink-500/30 text-xl inline-flex items-center justify-center mx-auto"
            aria-label="iMate 카카오톡 채널로 문의하기"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            iMate 카카오톡 채널 문의하기
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};