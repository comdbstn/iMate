import React, { useState } from 'react';
import { MessageCircle, FileText, Calendar, Megaphone, Users, Sparkles, Bot } from 'lucide-react';
import Button from '../common/Button';
import ChatPopup from '../common/ChatPopup';

const ProblemCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
    <div className="flex items-start gap-4">
      <div className="bg-purple-500/10 p-3 rounded-full">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  </div>
);

export const ProblemSection = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <section id="problem" className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Animated background elements - Adjusted */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse -top-52 -left-32 opacity-50"></div>
        <div className="absolute w-[350px] h-[350px] bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700 top-[300px] right-10 opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full font-medium text-sm border border-purple-500/20">
              <Bot className="h-4 w-4" />
              <span>안녕하세요!</span>
              <Sparkles className="h-4 w-4" />
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-white">안녕하세요</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text">
                  당신의 AI 에이전트, 지유에요
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                제가 여러분의 업무 고민을 해결해드릴게요!
              </p>
            </div>
            
            <div className="space-y-4">
              <ProblemCard
                icon={<MessageCircle className="h-6 w-6 text-purple-400" />}
                title="고객 문의가 너무 많으신가요?"
                description="제가 24시간 친절하게 응대해드릴게요! 고객님들의 질문에 빠르고 정확하게 답변해드릴 수 있어요."
              />
              <ProblemCard
                icon={<FileText className="h-6 w-6 text-purple-400" />}
                title="문서 작업이 밀리고 있나요?"
                description="걱정 마세요! 제가 보고서 작성부터 데이터 정리까지 도와드릴 수 있어요."
              />
              <ProblemCard
                icon={<Calendar className="h-6 w-6 text-purple-400" />}
                title="반복 작업에 지치셨나요?"
                description="사람보다 빠르게, 정확하게 작업해드리겠습니다!"
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 relative z-10 transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-square mb-6 rounded-xl overflow-hidden shadow-xl shadow-purple-500/20">
                <img 
                  src="/images/jiyu.webp"
                  alt="AI 어시스턴트 지유"
                  className="relative rounded-xl w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <div className="text-center">
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
            
            <div className="absolute -top-5 -left-5 w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl transform -rotate-3 z-0 blur-sm"></div>
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