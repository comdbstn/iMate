import React, { useState, useEffect } from 'react';
import { MessageCircle, FileText, Calendar, Sparkles, Bot } from 'lucide-react';
import Button from '../common/Button';
import ChatPopup from '../common/ChatPopup';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ProblemCard = ({ icon, title, description, delay = 0 }: { icon: React.ReactNode; title: string; description: string; delay?: number }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-purple-500/10 p-3 rounded-full">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const ProblemSection = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 });
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.2 });
  const [textRef, isTextVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.2 });
  const [badgeRef, isBadgeVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const [imageRef, isImageVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const [chatButtonRef, isChatButtonVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <section 
      id="problem" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gradient-to-br from-sky-900 via-purple-900 to-indigo-900 text-white"
    >
      {/* Animated background elements - Adjusted for new gradient */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-40' : 'opacity-0'} -top-60 -left-40`}></div>
        <div className={`absolute w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-30 delay-500' : 'opacity-0'} top-[250px] right-0`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div
              ref={badgeRef}
              className={`inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full font-medium text-sm border border-purple-500/20 transition-all duration-500 ${isBadgeVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
            >
              <Bot className="h-4 w-4" />
              <span>안녕하세요!</span>
              <Sparkles className="h-4 w-4" />
            </div>

            <div ref={titleRef}>
              <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-all duration-500 delay-100 ${isTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}>
                <span className="text-white">안녕하세요</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                  당신의 AI 에이전트, 지유에요
                </span>
              </h2>
              <p 
                ref={textRef}
                className={`text-xl text-gray-400 transition-all duration-500 delay-200 ${isTextVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
              >
                제가 여러분의 업무 고민을 해결해드릴게요!
              </p>
            </div>
            
            <div className="space-y-4">
              <ProblemCard
                icon={<MessageCircle className="h-6 w-6 text-purple-400" />}
                title="고객 문의가 너무 많으신가요?"
                description="제가 24시간 친절하게 응대해드릴게요! 고객님들의 질문에 빠르고 정확하게 답변해드릴 수 있어요."
                delay={300}
              />
              <ProblemCard
                icon={<FileText className="h-6 w-6 text-purple-400" />}
                title="문서 작업이 밀리고 있나요?"
                description="걱정 마세요! 제가 보고서 작성부터 데이터 정리까지 도와드릴 수 있어요."
                delay={400}
              />
              <ProblemCard
                icon={<Calendar className="h-6 w-6 text-purple-400" />}
                title="반복 작업에 지치셨나요?"
                description="사람보다 빠르게, 정확하게 작업해드리겠습니다!"
                delay={500}
              />
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className={`relative transition-all duration-700 delay-300 ${isImageVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10 relative z-10 transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-square mb-6 rounded-xl overflow-hidden shadow-xl shadow-purple-500/20">
                <img 
                  src="/images/jiyu.webp"
                  alt="AI 어시스턴트 지유"
                  className="relative rounded-xl w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <div 
                ref={chatButtonRef}
                className={`text-center transition-all duration-500 delay-500 ${isChatButtonVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full font-medium text-sm mb-4 border border-purple-500/20">
                  <Bot className="h-4 w-4" />
                  지유
                </div>
                <h3 className="text-xl font-bold text-white mb-6">
                  "안녕하세요! 제가 여러분의 업무를<br/>더 쉽고 효율적으로 만들어드릴게요!"
                </h3>
                
                <Button
                  onClick={handleOpenChat}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full font-medium hover:opacity-90 transition-all transform hover:scale-105 duration-200 shadow-lg shadow-purple-500/25"
                  aria-label="지유와 대화하기"
                >
                  지유와 대화하기
                  <MessageCircle className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="absolute -top-5 -left-5 w-full h-full bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-2xl transform -rotate-3 z-0 blur-md opacity-75"></div>
          </div>
        </div>
      </div>
      <ChatPopup 
        isOpen={isChatOpen} 
        onClose={handleCloseChat} 
        botName="지유 AI"
        initialMessage="안녕하세요! 지유에게 무엇이든 물어보세요. iMate 서비스에 대해 자세히 알려드릴게요!"
      />
    </section>
  );
};