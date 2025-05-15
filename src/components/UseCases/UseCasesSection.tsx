import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, PenTool, FileText, Calendar } from 'lucide-react';

const TabButton = ({ onClick, isActive, children }: { onClick: () => void; isActive: boolean; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`w-3 h-3 rounded-full transition-colors ${isActive ? 'bg-purple-500' : 'bg-white/20'}`}
    aria-pressed={isActive}
  >
    {children}
  </button>
);

const UseCaseCard = ({ useCase, isActive }: { useCase: any; isActive: boolean }) => (
  <div className="bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">
            {useCase.company}
          </span>
          <div className={`${useCase.character1.color} w-10 h-10 rounded-full flex items-center justify-center`}>
            {useCase.character1.icon}
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {useCase.title}
        </h3>
        <blockquote className="text-gray-300 text-lg leading-relaxed">
          "{useCase.testimonial}"
        </blockquote>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
      </div>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
        <img 
          src={useCase.image.replace('.jpeg', '.webp')}
          alt={useCase.title}
          className="relative rounded-xl w-full h-[400px] object-cover transform -rotate-1 group-hover:rotate-0 transition-transform"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

export const UseCasesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const useCases = [
    {
      id: 'startup',
      company: '스타트업',
      title: '지유와 함께 고객 상담이 더 쉬워졌어요',
      testimonial: '24시간 고객 문의에 빠르게 응답할 수 있게 되었어요. 덕분에 고객 만족도도 높아지고, 팀원들은 더 중요한 업무에 집중할 수 있게 되었죠.',
      image: 'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      character1: {
        name: '지유',
        icon: <MessageCircle className="h-6 w-6 text-white" />,
        color: 'bg-blue-500'
      }
    },
    {
      id: 'enterprise',
      company: '대기업',
      title: '문서 작업 시간이 50% 단축되었습니다',
      testimonial: '수많은 문서와 보고서 작업으로 야근이 일상이었는데, 이제는 퇴근 시간을 지킬 수 있게 되었어요. AI가 문서를 정리하고 요약해주니 업무 효율이 크게 향상되었습니다.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      character1: {
        name: '소연',
        icon: <FileText className="h-6 w-6 text-white" />,
        color: 'bg-purple-500'
      }
    }
  ];
  
  const activeCase = useCases[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % useCases.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + useCases.length) % useCases.length);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse -top-48 -left-24"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700 bottom-0 right-12"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full font-medium text-sm mb-4 border border-purple-500/20">
            성공 사례
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            실제 고객들의 이야기를 들려드릴게요
          </h2>
          <p className="text-xl text-gray-400">
            아이메이트와 함께하는 기업들의 생생한 경험담
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <UseCaseCard useCase={activeCase} isActive={true} />
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {useCases.map((_, index) => (
                <TabButton
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  isActive={index === activeIndex}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};