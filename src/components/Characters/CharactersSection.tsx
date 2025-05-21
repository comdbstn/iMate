import React, { useState, useEffect } from 'react';
import { MessageCircle, Search, Calendar, PenTool, FileText, Terminal, ChevronRight, Info, Users, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import CharacterDetailPopup from './CharacterDetailPopup';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  greeting: string;
  dialogExamples: string[];
  bgColorClass: string; 
  textColorClass: string;
  highlightColorClass: string;
}

export const CharactersSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.05 });
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.2 });
  const [descriptionRef, isDescriptionVisible] = useIntersectionObserver<HTMLParagraphElement>({ threshold: 0.2 });
  const [buttonRef, isButtonVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  const characters: Character[] = [
    {
      id: 'jiyu',
      name: '지유',
      title: '만능 AI 비서',
      description: '일상 업무부터 복잡한 분석까지, 똑똑한 AI 비서가 당신의 시간을 아껴드립니다.',
      longDescription: '지유는 당신의 가장 유능한 디지털 팀원입니다. 이메일 관리, 일정 조율, 데이터 분석, 보고서 작성 등 다양한 업무를 신속하고 정확하게 처리합니다. 반복적인 작업에서 벗어나 더 중요한 일에 집중하세요!',
      image: '/images/characters/jiyu-profile.webp', 
      tags: ['업무 자동화', '데이터 분석', '일정 관리', '문서 작성'],
      greeting: '안녕하세요! 저는 지유에요. 무엇을 도와드릴까요?',
      dialogExamples: [
        '오늘의 주요 뉴스 요약해줘.',
        '다음 주 마케팅팀 주간 회의 일정 잡아줘.',
        '지난 분기 매출 보고서 초안 작성해줄 수 있어?',
      ],
      bgColorClass: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      textColorClass: 'text-white',
      highlightColorClass: 'text-sky-300',
    },
    {
      id: 'minjun',
      name: '민준',
      title: '24/7 고객 응대 매니저',
      description: '고객 문의, 더 이상 기다리게 하지 마세요. AI가 24시간 친절하고 빠른 응대를 제공합니다.',
      longDescription: '민준은 고객 만족을 최우선으로 생각하는 AI 고객 서비스 전문가입니다. 24시간 대기하며 FAQ 답변, 불만 처리, 제품 정보 제공 등 다양한 고객 요청을 즉시 해결합니다. 고객 지원팀의 업무 부담을 줄이고 응대 품질을 높여보세요.',
      image: '/images/characters/minjun-profile.webp', 
      tags: ['CS 자동화', '챗봇', '고객 지원', '상담 관리'],
      greeting: '안녕하세요, 고객님. 저는 민준입니다. 어떤 도움이 필요하신가요?',
      dialogExamples: [
        '제품 환불 규정이 어떻게 되나요?',
        '서비스 이용 중 오류가 발생했어요.',
        '가장 가까운 A/S 센터 위치를 알려주세요.',
      ],
      bgColorClass: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColorClass: 'text-white',
      highlightColorClass: 'text-emerald-300',
    },
    {
      id: 'seoyun',
      name: '서윤',
      title: '데이터 기반 마케팅 전문가',
      description: '정교한 데이터 분석과 인사이트 도출로 캠페인 성과를 극대화하는 AI 마케터를 만나보세요.',
      longDescription: '서윤은 데이터 분석을 통해 최적의 마케팅 전략을 수립하는 AI 마케터입니다. 시장 트렌드 분석, 타겟 고객 식별, 광고 캠페인 최적화, 성과 측정 및 보고서 생성까지 마케팅의 모든 과정을 지원합니다.',
      image: '/images/characters/seoyun-profile.webp',
      tags: ['마케팅 자동화', '데이터 분석', '캠페인 최적화', '성과 측정'],
      greeting: '안녕하세요! AI 마케터 서윤입니다. 성공적인 캠페인을 함께 만들어봐요.',
      dialogExamples: [
        '최근 3개월간 SNS 채널별 광고 효율 분석해줘.',
        '20대 여성 타겟으로 신제품 프로모션 아이디어 제안해줘.',
        '이번 달 콘텐츠 마케팅 성과 보고서 만들어줘.',
      ],
      bgColorClass: 'bg-gradient-to-br from-pink-500 to-rose-600',
      textColorClass: 'text-white',
      highlightColorClass: 'text-amber-300',
    },
  ];

  const handleInfoClick = (character: Character) => {
    setSelectedCharacter(character);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => setSelectedCharacter(null), 300);
  };

  const handleContactScroll = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const CharacterCard = ({ character, onInfoClick, delay = 0 }: { character: Character; onInfoClick: (character: Character) => void; delay?: number; }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

    return (
      <div
        ref={ref}
        className={`relative group bg-slate-800/70 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-white/10 transform transition-all duration-500 hover:shadow-purple-500/30 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="absolute top-4 right-4 z-20">
          <Button 
            variant="icon" 
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all transform group-hover:scale-110"
            onClick={() => onInfoClick(character)}
            aria-label={`${character.name} 상세 정보 보기`}
          >
            <Info size={20} />
          </Button>
        </div>
        <div className="relative h-64 md:h-72 w-full overflow-hidden">
          <img 
            src={character.image || '/images/placeholder-character.webp'} 
            alt={character.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-transparent to-transparent"></div>
        </div>
        <div className="p-6">
          <h3 className={`text-2xl font-bold mb-1 ${character.highlightColorClass}`}>{character.name}</h3>
          <p className="text-sm text-purple-300 font-medium mb-3">{character.title}</p>
          <p className="text-gray-300 text-sm mb-4 h-16 overflow-hidden group-hover:h-auto transition-all duration-300">
            {character.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {character.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="characters" 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-purple-900 via-rose-800 to-slate-900 text-white"
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute w-[650px] h-[650px] bg-rose-500/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-40' : 'opacity-0'} -top-32 -right-52`}></div>
        <div className={`absolute w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl transition-opacity duration-1000 ease-in-out ${isSectionVisible ? 'animate-pulse opacity-30 delay-500' : 'opacity-0'} bottom-[-200px] -left-40`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-8 md:mb-12 transition-all duration-500 ${isTitleVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-300 mb-4 text-sm`}>
            <Users className="h-4 w-4" />
            <span>팀원 소개</span>
            <Sparkles className="h-4 w-4" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
              저희 팀원들을 소개할게요
            </span>
          </h2>
          <p 
            ref={descriptionRef}
            className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-500 delay-100 ${isDescriptionVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
          >
            각 분야의 전문가 AI 에이전트들이 여러분의 비즈니스 성장을 지원합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {characters.map((character, index) => (
            <CharacterCard 
              key={character.id} 
              character={character} 
              onInfoClick={handleInfoClick} 
              delay={200 + index * 100}
            />
          ))}
        </div>

        <div 
          ref={buttonRef}
          className={`text-center transition-all duration-500 delay-300 ${isButtonVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-5'}`}
        >
          <Button
            onClick={handleContactScroll}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-full font-semibold text-lg hover:opacity-95 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-pink-500/30 flex items-center justify-center mx-auto"
            aria-label="나만의 AI 팀원 상담받기"
          >
            나만의 AI 팀원 상담받기
            <MessageCircle className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {selectedCharacter && (
        <CharacterDetailPopup 
          isOpen={isPopupOpen} 
          onClose={handleClosePopup} 
          character={selectedCharacter} 
        />
      )}
    </section>
  );
};